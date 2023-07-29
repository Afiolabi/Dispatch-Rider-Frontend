import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/logins/Login";
// import "./App.css";
import Register from "./pages/Register/Register";
import RidersSignup from "./pages/RidersSignupForm /RidersSignup";
// import ForgotPasswordd from "./pages/ForgotPasswordd/ForgotPasswordd";
import MailSent from "./pages/SentMail/MailSent";
import ResetPasswordd from "./pages/ResetPasswordd/ResetPasswordd";
import ProfileSetting from "./pages/ProfileSetting/ProfileSetting";
// import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
// import VendorDashboard from "./pages/VendorDashboard/VendorDashboard";
import { ToastContainer } from "react-toastify";
import ForgetPasswordCard from "./components/fPassCard/fPassCard";
import RequestRider from "./pages/UserRequestRider/RequestRider";
import Modal from "./pages/UserRequestRider/Modal";
import BidingOrder from "./pages/RiderBiddingOrder/RiderBiddingOrder";
import UserDashboard from "./pages/userDashboard/userDashboard";
import RidersDashboard from "./pages/RidersDashboard/RidersDashboard";
import RiderHistory from "./pages/RiderHistory/RiderHistory";
// import { ProtectAdminRoute, ProtectRiderRoute } from "./context/ProtectRoute";
import { ProtectUserRoute, ProtectRiderRoute } from "./context/ProtectRoute";
import RiderProfileSetting from "./pages/RiderProfileSettingPage/RiderProfile";
import PickUpUserHistory from "./pages/UserHistory/PickUpUserHistory";
import Ridermap from "./pages/Ridermaps/Ridermap";
import Riderrequestaccepted from "./pages/Ridermaps/Riderrequestaccepted";
import RiderDashboard from "./pages/John/ridersDashboard";
// setup  for fontend

const App = () => {
	return (
		<React.Fragment>
			<ToastContainer />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/user-signup" element={<Register />} />
					<Route path="/riders-signup" element={<RidersSignup />} />
					<Route path="/sentmail" element={<MailSent />} />
					<Route path="/forgotpasswordd" element={<ForgetPasswordCard />} />
					<Route path="/john" element={<RiderDashboard />} />
					<Route
						path="/request-rider"
						element={
							<ProtectUserRoute>
								<RequestRider />
							</ProtectUserRoute>
						}
					/>
					<Route path="/request-rider-success" element={<Modal />} />
					<Route
						path="/user-dashboard"
						element={
							<ProtectUserRoute>
								<UserDashboard />
							</ProtectUserRoute>
						}
					/>
					<Route
						path="/riders-accept-order-view/:requestId"
						element={<Ridermap />}
					/>
					<Route path="/accept-request" element={<Riderrequestaccepted />} />

					<Route
						path="/rider-biddings"
						element={
							<ProtectRiderRoute>
								<BidingOrder />
							</ProtectRiderRoute>
						}
					/>
					<Route
						path="/riders-dashboard"
						element={
							<ProtectRiderRoute>
								<RidersDashboard />
							</ProtectRiderRoute>
						}
					/>
					<Route
						path="/users/resetpasswordd/:token"
						element={<ResetPasswordd />}
					/>
					<Route path="/profilesetting" element={<ProfileSetting />} />
					<Route path="/users/dashboard" element={<UserDashboard />} />
					<Route path="/riders/dashboard" element={<RidersDashboard />} />
					<Route path="/riderhistory" element={<RiderHistory />} />
					<Route path="/riders/all-biddings" element={<RidersDashboard />} />
					<Route
						path="/user-profilesetting"
						element={
							<ProtectUserRoute>
								<ProfileSetting />
							</ProtectUserRoute>
						}
					/>
					<Route
						path="/riders-accept-order-view/:requestId"
						element={
							<ProtectRiderRoute>
								<Ridermap />
							</ProtectRiderRoute>
						}
					/>
					<Route
						path="/accept-request/:ID"
						element={
							<ProtectRiderRoute>
								<Riderrequestaccepted />
							</ProtectRiderRoute>
						}
					/>
					<Route
						path="/rider-profilesetting"
						element={
							<ProtectRiderRoute>
								<RiderProfileSetting />
							</ProtectRiderRoute>
						}
					/>
					<Route path="/order-history" element={<PickUpUserHistory />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
};

export default App;
