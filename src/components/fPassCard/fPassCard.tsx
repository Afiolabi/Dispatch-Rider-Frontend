/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./fPassCard.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const baseUrl = "http://localhost:4000";

const ForgetPasswordCard = () => {
	const [createForm, setCreateForm] = useState({});
	const submitDetails = (e: any) => {
		e.preventDefault();
		const { name, value } = e.target;
		console.log({ name, value });
		setCreateForm({
			...createForm,
			[name]: value,
		});
	};
	const fetchLink = async () => {
		try {
			console.log("async function");
			await axios
				.post(`${baseUrl}/users/forgotpasswordd`, createForm)
				.then((res) => {
					toast.success(res.data.message);
					setTimeout(() => {
						console.log(res.data);
					}, 10000);
				})
				.catch((err) => {
					toast.error(err.response.data.Error);
					console.log(err);
				});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="h">
			<form className="Cover" onSubmit={fetchLink}>
				<div className="text">
					<h3>Forgot Password</h3>
					<div className="size">
						<p className="nter">
							Enter the email associated with your account and we’ll send an
							email with instruction to reset your password
						</p>
					</div>
				</div>
				<div>
					<label className="labels">Email</label>
					<input
						type="email"
						placeholder="Email"
						className="fill"
						name="email"
						onChange={submitDetails}
					/>
				</div>

				<div>
					<button className="resetBtn" type="submit">
						<Link to="/sentmail">Reset Password</Link>
					</button>
				</div>
				<div>
					<button className="backLog">Back to Login</button>
				</div>
			</form>
		</div>
	);
};

export default ForgetPasswordCard;
