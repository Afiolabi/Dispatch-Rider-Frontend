/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import riderProfilestyle from "./updateRiderProfile.module.css";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import DemoNav from "../../components/Navbar/DemoNavbar";

const baseUrl = "http://localhost:4000";

function RiderProfileSetting() {
	const [formData, setFormData] = useState({});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const id = localStorage.getItem("signature");
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			await axios
				.patch(`${baseUrl}/users/updateUserProfile/${id}`, formData, {
					headers: {
						Authorization: `Bearer ${id}`,
					},
				})
				.then((res) => {
					toast.success(res.data.message);
					setTimeout(() => {
						window.location.href = "/user-dashboard";
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
		<div>
			<DemoNav />
			<section className={riderProfilestyle.rider_profile_sectionContainer}>
				<div
					className={
						riderProfilestyle.rider_profile_user_profileContainer_datas
					}
				>
					<div className={riderProfilestyle.rider_profile_view}>
						<h1 className={riderProfilestyle.rider_profile_viewer}>
							Profile Settings
						</h1>
					</div>
					<section
						className={riderProfilestyle.rider_profile_user_profile_section2}
					>
						<div className={riderProfilestyle.rider_profile_form}>
							{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
							<form
								className={riderProfilestyle.rider_profile_formField}
								onSubmit={handleSubmit}
							>
								<h5 className={riderProfilestyle.rider_profile_title2}>
									BASIC INFORMATION
								</h5>
								<p className={riderProfilestyle.rider_profile_text}>
									Only you can view and edit your information
								</p>
								<label className={riderProfilestyle.rider_profile_label}>
									Name
								</label>
								<div
									className={riderProfilestyle.rider_profile_userProfile_input}
								>
									<input
										required
										className={riderProfilestyle.rider_profile_userProfile}
										type="text"
										placeholder="matthew"
										name="name"
										onChange={handleChange}
									/>
									<div className={riderProfilestyle.rider_profile_icon1}>
										<FaPencilAlt />
									</div>
								</div>
								<label className={riderProfilestyle.rider_profile_label}>
									Phone Number
								</label>
								<div
									className={riderProfilestyle.rider_profile_userProfile_input}
								>
									<input
										required
										className={riderProfilestyle.rider_profile_userProfile}
										type="text"
										placeholder="phone"
										name="phone"
										onChange={handleChange}
									/>
									<div className={riderProfilestyle.rider_profile_icon1}>
										<FaPencilAlt />
									</div>
								</div>
								<label className={riderProfilestyle.rider_profile_label}>
									Email
								</label>
								<div
									className={riderProfilestyle.rider_profile_userProfile_input}
								>
									<input
										required
										className={riderProfilestyle.rider_profile_userProfile}
										type="text"
										placeholder="email"
										name="email"
										onChange={handleChange}
									/>
									<div className={riderProfilestyle.rider_profile_icon1}>
										<FaPencilAlt />
									</div>
								</div>
								<div className={riderProfilestyle.rider_profile_btn_contain}>
									{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
									<button
										className={riderProfilestyle.rider_profile_btn_container}
										type="submit"
									>
										Submit
									</button>
								</div>
								{/* <input
								type="submit"
								placeholder="Save"
								className={riderProfilestyle.rider_profile_Submit}
							/> */}
							</form>
						</div>
					</section>
				</div>
			</section>
		</div>
	);
}
export default RiderProfileSetting;
