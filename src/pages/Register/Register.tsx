import React, { useState } from "react";
import registerBg from "../../assets/registerBg.svg";
import Group15 from "../../assets/Group15.svg";
import { Link } from "react-router-dom";
import modern from "./Register.module.css";
// import { apiPost } from "../../utils/api/axios";
import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = "http://localhost:4000";
 
const Register = () => {
  const [formData, setFormData] = useState({});
 
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  console.log(formData);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios
        .post(`${baseUrl}/users/signup`, formData)
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
    <div className={modern.userregister_container}>
      <div className={modern.userregbg_background}>
        <img src={registerBg} alt="Swift rider" />
        <h2 className={modern.userregdelivery}>
          Delivery service just got easier, elegant & superb with Swift Rider
        </h2>
      </div>
 
      <div className={modern.userregform_style}>
        <div className={modern.userregform_div}>
          <div className={modern.userregrider_top}>
            <Link to="/">
              <img src={Group15} alt="rider" />
            </Link>
            <p className={modern.swift}>
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className={modern.swiftLink}
              >
                Swift <br /> Rider
              </Link>
            </p>
          </div>
 
          <h3 className={modern.signup_head}>Customer Signup</h3>
          <div>
            <label className={modern.labels}>Name</label>
            <input
              className={modern.registerinputs}
              type="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
 
          <div>
            <label className={modern.labels}>Phone Number</label>
            <input
              className={modern.registerinputs}
              type="phone"
              placeholder="Enter your phone number"
              name="phone"
              onChange={handleChange}
            />
          </div>
 
          <div>
            <label className={modern.labels}>Email</label>
            <input
              className={modern.registerinputs}
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />
          </div>
 
          <div>
            <label className={modern.labels}>Password</label>
            <input
              className={modern.registerinputs}
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />
          </div>
 
          <div>
            <label className={modern.labels}>Confirm password</label>
            <input
              className={modern.registerinputs}
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              name="confirm_password"
            />
          </div>
 
          <div className={modern.btn_container}>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <button className={modern.btn_Reg} onClick={handleSubmit}>
              Signup
            </button>
          </div>
          <div>
            <p className={modern.pTag}>
              Already have an account?
              <Link
                to="/login"
                className="sign"
                style={{ textDecoration: "none", color: "#f00" }}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Register;

