/* eslint-disable @typescript-eslint/restrict-template-expressions */
import style from "./ProfileSetting.module.css";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import DemoNav from "../../components/Navbar/DemoNavbar";

const baseUrl = "http://localhost:4000";

function ProfileSetting() {
	const [formData, setFormData] = useState({});

	const handleChange = (e: any) => {
		console.log("changing data");
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const id = localStorage.getItem("signature");
			console.log(id);
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
			<section className={style.sectionContainer}>
				<div className={style.user_profileContainer_datas}>
					<div className={style.view}>
						<h1 className={style.viewer}>Profile Settings</h1>
					</div>
					<section className={style.user_profile_section2}>
						<div className={style.form}>
							{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
							<form className={style.formField} onSubmit={handleSubmit}>
								<h5 className={style.title2}>BASIC INFORMATION</h5>
								<p className={style.text}>
									Only you can view and edit your information
								</p>
								<label className={style.user_profile_label}>Name</label>
								<div className={style.userProfile_input}>
									<input
										required
										className={style.userProfile}
										type="text"
										placeholder="matthew"
										name="name"
										onChange={handleChange}
									/>
									<div className={style.icon1}>
										<FaPencilAlt />
									</div>
								</div>
								<label className={style.user_profile_label}>Phone Number</label>
								<div className={style.userProfile_input}>
									<input
										required
										className={style.userProfile}
										type="text"
										placeholder="phone"
										name="phone"
										onChange={handleChange}
									/>
									<div className={style.icon1}>
										<FaPencilAlt />
									</div>
								</div>
								<label className={style.user_profile_label}>Email</label>
								<div className={style.userProfile_input}>
									<input
										required
										className={style.userProfile}
										type="text"
										placeholder="email"
										name="email"
										onChange={handleChange}
									/>
									<div className={style.icon1}>
										<FaPencilAlt />
									</div>
								</div>
								<div className={style.btn_contain}>
									{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
									<button className={style.btn_container} type="submit">
										Submit
									</button>
								</div>
								{/* <input
								type="submit"
								placeholder="Save"
								className={style.Submit}
							/> */}
							</form>
						</div>
					</section>
				</div>
			</section>
		</div>
	);
}
export default ProfileSetting;
