/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import image from "../../assets/Users_dashboard/image.png";
import logodesign from "../../assets/logodesign.svg";
import loginFormStyle from "./LoginForm.module.css";
import { apiPost } from "../../utils/api/axios";
import { toast } from "react-toastify";

const LoginForm = () => {
	const [formData, setFormData] = useState({});
	const navigate = useNavigate();

	const handleChange = (e: any) => {
		console.log("changing data");
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		console.log(formData);
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			// riderRegisterConfig(formData);

			await apiPost("/users/login", formData)
				.then((res: any) => {
					const signature = res.data.signature;
					const role = res.data.role;
					const userName = res.data.name;

					if (signature !== null) {
						localStorage.setItem("signature", signature);
						localStorage.setItem("role", role);
						localStorage.setItem("userName", userName);
						toast.success(res.data.message);
						setTimeout(() => {
							if (res.data.role === "rider") {
								navigate("/riders-dashboard");
								// } else if (res.data.role === "admin") {
								// 	navigate("/admin-dashboard");
							} else if (res.data.role === "user") {
								navigate("/user-dashboard");
							}
							// navigate("/user-dashboard");
						}, 2000);
					}
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
		<div className={loginFormStyle.login_f_section}>
			<div className={loginFormStyle.login_form_data_container}>
				<div className={loginFormStyle.login_form_image}>
					<h1 className={loginFormStyle.login_section_h1}>
						Delivery service just got easier, elegant & superb with Dispatch
						Buddy
					</h1>
					<img src={image} />
				</div>
				<form className={loginFormStyle.login_form} onSubmit={handleSubmit}>
					<div className={loginFormStyle.login_logo_div}>
						<Link to="/" style={{ textDecoration: "none" }}>
							<div className={loginFormStyle.login_form_logo}>
								<img src={logodesign} alt="logo" />
								<span>
									Swift
									<br />
									Rider
								</span>
							</div>
						</Link>
					</div>
					<div className={loginFormStyle.login_form_data_content}>
						<h1 className={loginFormStyle.login_form_title}>Login</h1>
						<label className={loginFormStyle.login_form_label}>Username:</label>
						<input
							placeholder="✉️  Enter your email"
							className={loginFormStyle.login_form_input}
							type="email"
							id="email"
							name="email"
							onChange={handleChange}
						/>
						<br />
						<label className={loginFormStyle.login_form_label}>Password:</label>
						{/* <img src={Vector} alt="password_icon" className={loginFormStyle.login_password_icon}></img> */}
						<input
							placeholder="🔒  Enter your password"
							className={loginFormStyle.login_form_input}
							type="password"
							id="password"
							name="password"
							onChange={handleChange}
						/>
						<br />
						<p className={loginFormStyle.login_form_a}>
							<Link
								to="/forgotpasswordd"
								className={loginFormStyle.login_form_a}
							>
								Forgot Password?
							</Link>
						</p>
						<input
							className={loginFormStyle.login_form_s_input}
							type="submit"
							value="Login"
						/>
						<div>
							<p className={loginFormStyle.login_form_p}>
								Don't have an account?
								<Link style={{ textDecoration: "none" }} to="/user-signup">
									Create account
								</Link>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
