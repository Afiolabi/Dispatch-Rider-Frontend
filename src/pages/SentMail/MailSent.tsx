import React from "react";

import "./MailSent.css";

import Email from "../../assets/Email.svg";
import { Link } from "react-router-dom";

const MailSent = () => {
	return (
		<div className="sentMail-Container">
			<div className="Cover">
				<div className="image">
					<img src={Email} alt=""></img>
				</div>
				<div className="text">
					<h3>Check your mail</h3>
					<p>
						We have sent a password recover <br /> instruction to your account.
					</p>
					<h6>Don’t receive the email? Click to Resend link</h6>
				</div>
				<div>
					<Link to="/resetpasswordd" className="sentBtn">
						Back to Login
					</Link>
				</div>
				{/* <ReusableButton text="Open email app"></ReusableButton> */}
			</div>
		</div>
	);
};

export default MailSent;
