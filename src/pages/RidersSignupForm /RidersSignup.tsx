import { useState } from "react";
import styled from "./RidersSignupForm.module.css";
import RiderImage from "../../assets/Riders_signup_assets/rider_image.svg";
import BikeLogo from "../../assets/Riders_signup_assets/bike_icon.svg";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:4000";

const RidersSignup = () => {
	const [dataValues, setDataValues] = useState<Record<string, any>>({});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setDataValues({ ...dataValues, [name]: value });
	};

	const handleImageChange = (e: any) => {
		const { name } = e.target;
		const file = e.target.files[0];
		if (file.size > 1000000) {
			toast.error("file is too large");
			return;
		}
		// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
		if (!file.type.includes("image")) {
			toast.error("File must be an image");
		}
		setDataValues({ ...dataValues, [name]: file });
	};
	console.log("data", dataValues);
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		// console.log("this is formDatat", formData);
		const formData = new FormData();
		formData.append("email", dataValues.email);
		formData.append("name", dataValues.name);
		formData.append("phone", dataValues.phone);
		formData.append("city", dataValues.city);
		formData.append("plateNumber", dataValues.plateNumber);
		formData.append("password", dataValues.password);
		formData.append("confirmPassword", dataValues.confirmPassword);
		formData.append("image", dataValues.documents);
		formData.append("image", dataValues.passport);
		formData.append("image", dataValues.validID);
		try {
			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			};
			await axios
				.post(`${baseUrl}/riders/riders-signup`, formData, config)
				.then((res) => {
					const signature = res.data.signature;
					localStorage.setItem("signature", signature);
					toast.success(res.data.message);
					setTimeout(() => {
						window.location.href = "/login";
					}, 2000);
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.response.data.Error);
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className={styled.Rider_Signup_container}>
			<div className={styled.image_container}>
				<img src={RiderImage} alt="placeholder_image_riders_signup_form" />
				<p className={styled.cp}>
					Delivery service just got easier, elegant & superb with Swift Riders
				</p>
			</div>
			<div className={styled.signup_form_field_container}>
				<div className={styled.form_bx}>
					{/* ---------- LOGO ---------- */}
					<Link to="/" style={{ textDecoration: "none" }}>
						<div className={styled.RiderSignUpLogo}>
							<div className={styled.logo_image}>
								<span>
									<img
										src={BikeLogo}
										alt="placeholder_image_riders_signup_form"
									/>
								</span>
							</div>
							<div className={styled.desc}>Swift Riders</div>
						</div>
					</Link>
					<h3 className={styled.sub_title}>Sign Up as a Rider</h3>
					{/* -------------- FORM -------------- */}
					<form className={styled.rider_SignUp_form}>
						<div className={styled.form_elem}>
							<i className="fa fa-user icon"></i>
							<label htmlFor="name" className={styled.rider_signup_label}>
								Name
							</label>
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-phone icon"></i>
							<label htmlFor="phone" className={styled.rider_signup_label}>
								Phone Number
							</label>
							<input
								type="phone"
								name="phone"
								placeholder="Enter your phone number"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-envelope icon"></i>
							<label className={styled.rider_signup_label} htmlFor="email">
								Email
							</label>
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-city icon"></i>
							<label className={styled.rider_signup_label} htmlFor="city">
								City
							</label>
							<input
								type="text"
								id="city"
								name="city"
								placeholder="City"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-city icon"></i>
							<label
								className={styled.rider_signup_label}
								htmlFor="plate number"
							>
								Plate Number
							</label>
							<input
								type="text"
								id="plateNumber"
								name="plateNumber"
								placeholder="Plate Number"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-cloud-upload icon"></i>
							<label className={styled.rider_signup_label} htmlFor="documents">
								Bike documents
							</label>
							<input
								type="file"
								name="documents"
								placeholder="Upload"
								onChange={handleImageChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-cloud-upload icon"></i>
							<label className={styled.rider_signup_label} htmlFor="validID">
								Valid ID Card
							</label>
							<input
								type="file"
								name="validID"
								placeholder="Upload"
								onChange={handleImageChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-cloud-upload icon"></i>
							<label className={styled.rider_signup_label} htmlFor="passport">
								Passport Photo
							</label>
							<input
								type="file"
								name="passport"
								placeholder="Upload"
								onChange={handleImageChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-lock icon"></i>
							<label className={styled.rider_signup_label} htmlFor="Password">
								Password
							</label>
							<input
								type="password"
								name="password"
								placeholder="Enter your Password"
								onChange={handleChange}
							/>
						</div>
						<div className={styled.form_elem}>
							<i className="fa fa-lock icon"></i>
							<label
								className={styled.rider_signup_label}
								htmlFor="confirmPassword"
							>
								Confirm Password
							</label>
							<input
								type="password"
								name="confirmPassword"
								placeholder="Enter your Password"
								onChange={handleChange}
							/>
						</div>

						<div className="btn-container">
							{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
							<button className={styled.buttonReg} onClick={handleSubmit}>
								Signup
							</button>
						</div>
						{/* <div className={styled.form_elem}>
							<i className=" icon"></i>
							<input
								type="submit"
								name="signup"
								value="Sign Up"
								id={styled.submit}
								onClick={handleSubmit}
							/>
						</div> */}
						<p className={styled.signin}>
							Already have an account?
							<a>
								<Link to="/login" style={{ textDecoration: "none" }}>
									<span className="signin" style={{ textAlign: "center" }}>
										Sign In
									</span>
								</Link>
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};
export default RidersSignup;
