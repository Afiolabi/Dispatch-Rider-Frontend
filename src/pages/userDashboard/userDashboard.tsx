// import NavbarProfile from "../../components/Navbar/NavbarProfile";
import DemoNav from "../../components/Navbar/DemoNavbar";
import React, { Dispatch, SetStateAction, useState } from "react";
import dashboard_style from "./userDashboard.module.css";
import orderimg from "../../assets/Users_dashboard/orders.svg";
import msg1 from "../../assets/Users_dashboard/msg1.svg";
import msg2 from "../../assets/Users_dashboard/msg2.svg";
import overview from "../../assets/Users_dashboard/overview.svg";
import addresscontact from "../../assets/Users_dashboard/addresscontact.svg";
import emailcontact from "../../assets/Users_dashboard/emailcontact.svg";
import phonecontact from "../../assets/Users_dashboard/phonecontact.svg";
import { apiDelete, apiGet, apiGetAndAuth } from "../../utils/api/axios";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import Success from "../../assets/Success.svg";
import modalStyle from "../UserRequestRider/Modal2.module.css";
// import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

function removeTimeAndFormatDate(datetimeString: string): string {
	// Parse the input string using the Date object
	const date = new Date(datetimeString);
	// Use the Intl.DateTimeFormat object to format the date
	const options: any = {
		weekday: "short",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	};
	const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
	return formattedDate;
}
// console.log("My date now:  " ,removeTimeAndConvertTo12HourFormat("2022-12-21T11:58:01.571Z"))
const UserDashboard = () => {
	// const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const [modal2, setModal2] = useState(false);
	const [modal3, setModal3] = useState(false);
	const [orders, setBiddings] = React.useState([]);
	const [completedOrders, setCompletedOrders] = React.useState(null);
	// const [order, setOrder]: any = React.useState([]);
	// const [loading, setLoading] = React.useState(false);
	const [rider, setRider]: any = React.useState([]);
	const [orderId, setOrderId]: [number, Dispatch<SetStateAction<number>>] =
		useState(0);

	const handleDelete = () => {
		const go = async () => {
			try {
				// setLoading(true);
				await apiDelete(`/users/delete-order/${orderId}`).then((res: any) => {
					toast.success(res.data.message);
					setTimeout(() => {
						// navigate("/user-dashboard");
						// toggleModal3();
						window.location.reload();
					}, 2000);
				});
			} catch (error) {
				console.log(error);
			}
		};
		void go().then(() => {
			// setLoading(false);
		});
	};

	const handleClick = (riderId: number, status: string, orderId: number) => {
		console.log(status, orderId);
		setOrderId(orderId);
		// console.log("it is ", orderId);
		if (status === "pending") {
			toggleModal3();
		} else {
			getRiderProfile(riderId);
			// 	let responses: AxiosResponse<any, any>;
			// 	const go = async (orderId: number) => {
			// 		try {
			// 			setLoading(true);
			// 			responses = await apiGet(`/users/my-order/${orderId}`);
			// 		} catch (error) {
			// 			console.log(error);
			// 		}
			// 	};
			// 	void go(orderId).then(() => {
			// 		setLoading(false);
			// 		setOrder(responses.data.Order);

			// 		const ride = order.riderId;
			// 		getRiderProfile(ride);

			// 	});
		}
	};
	// console.log("The orders are ", order.riderId);
	// const rideId: number = order.Order.riderId;

	const getRiderProfile = (ride: number) => {
		const go1 = async (ride: number) => {
			try {
				// setLoading(true);
				const rider = await apiGet(`/riders/rider-order-profile/${ride}`);
				console.log("This is rider", rider);
				// setLoading(false);
				setRider(rider.data.order.rider);
				toggleModal2();
			} catch (error) {
				console.log(error);
			}
		};
		void go1(ride);
	};

	const toggleModal = () => {
		setModal(!modal);
	};
	const toggleModal2 = () => {
		setModal2(!modal2);
	};
	const toggleModal3 = () => {
		setModal3(!modal3);
	};
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const access_token = localStorage.getItem("signature");
	console.log(access_token);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const getBiddings = async () => {
		// e.preventDefault();
		try {
			const response = await apiGetAndAuth("/users/my-orders", {
				headers: {
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					Authorization: `Bearer ${access_token}`,
				},
			});
			// console.log("myData: ", response?.data);
			setBiddings(response?.data?.rows);
			console.log("myData: ", response?.data);
		} catch (err) {
			console.error("get_all_order", err);
		}
	};
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const getCompletedOrders = async () => {
		// e.preventDefault();
		try {
			const res = await apiGetAndAuth("/users/completed-orders", {
				headers: {
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					Authorization: `Bearer ${access_token}`,
				},
			});
			setCompletedOrders(res?.data?.count);
		} catch (error) {
			// console.error("get_completed_order", error);
		}
	};

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		const container = event.currentTarget;
		if (
			container.scrollHeight - container.scrollTop ===
			container.clientHeight
		) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getBiddings();
		}
	};
	const call = (phone: string) => {
		window.location.href = `tel:${phone}`;
	};

	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getBiddings();
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getCompletedOrders();
	}, []);
	return (
		<>
			{/* <NavbarProfile /> */}
			<DemoNav />
			<div className={dashboard_style.user_dashboard_parent_div}>
				<div className={dashboard_style.middle_container}>
					<h1 className={dashboard_style.viewoverH1}>
						<img src={overview} width="30px" height="30px" />
						Overview
					</h1>
					{/* <div className={dashboard_style.second_container}> */}
					<div className={dashboard_style.orders_container}>
						<div className={dashboard_style.top_orders}>
							<span id={dashboard_style.orders}>Total Orders</span>
							<Link
								to="/request-rider"
								className={dashboard_style.userDashboardLink}
							>
								<span id={dashboard_style.request}>Make a Request</span>
							</Link>
						</div>
						<hr />
						<div className={dashboard_style.bottom_orders}>
							<span>
								<strong id={dashboard_style.order_number}>
									{completedOrders}
								</strong>
								<br />
								<br />
								<strong id={dashboard_style.orders_completed}>
									Orders Completed
								</strong>
							</span>
							<span id={dashboard_style.image}>
								<img
									src={orderimg}
									id={dashboard_style.orders_image}
									height="39.38px"
									width="36.32px"
								/>
							</span>
						</div>
					</div>
					<div className={dashboard_style.messages_container}>
						<p id={dashboard_style.messages}>Messages</p>
						<hr />
						<div id={dashboard_style.image_div}>
							<img
								id={dashboard_style.msg1}
								src={msg1}
								width="54px"
								height="49.5px"
							/>
							<img
								id={dashboard_style.msg2}
								src={msg2}
								width="54px"
								height="38.4px"
							/>
						</div>
						<div id={dashboard_style.no_messages}>
							<p id={dashboard_style.msgP}>No Messages</p>
							<br />
							<p id={dashboard_style.msgP2}>
								You curently do not have any message
							</p>
						</div>
					</div>
					<div
						className={dashboard_style.myorders_container}
						style={{ height: "350px", overflow: "scroll" }}
						onScroll={handleScroll}
					>
						<div className={dashboard_style.order_details}>
							<span id={dashboard_style.orderzz}>My Orders</span>
							<span className={dashboard_style.seeAll}>See all</span>
						</div>
						{/* <hr /> */}
						{/* biddings.length > 0 ? <Your code> : <>No data Available<></> */}
						{orders?.length > 0 ? (
							orders.map((bidding: any) => {
								const myStyle = {
									backgroundColor:
										bidding.status === "pending"
											? "rgba(252, 193, 52, 0.1)"
											: " rgba(52, 168, 83, 0.1)",
									color: bidding.status === "pending" ? "#F8B02B" : "#34A853",
									cursor: "pointer",
								};
								return (
									<div className={dashboard_style.order_stats} key={bidding.id}>
										<span className={dashboard_style.date}>
											{removeTimeAndFormatDate(bidding.createdAt)}
										</span>
										<span
											className={dashboard_style.status}
											onClick={() =>
												handleClick(bidding.riderId, bidding.status, bidding.id)
											}
											style={myStyle}
										>
											{bidding.status}
										</span>
										<br />
										<br />
										<strong className={dashboard_style.space}>
											<span className={dashboard_style.orderNo}>
												Order No - {bidding.orderNumber}
											</span>
											<span className={dashboard_style.amount}>
												N{bidding.offerAmount}
											</span>
										</strong>
									</div>
								);
							})
						) : (
							<p className={dashboard_style.para}>No data available</p>
						)}
					</div>
					<div className={dashboard_style.contacts_container}>
						<div className={dashboard_style.contact}>
							<p>Contact Us</p>
						</div>
						<hr />
						<div className={dashboard_style.bio}>
							<p id={dashboard_style.getInTouch}>Get in touch</p>
							<p id={dashboard_style.questions}>
								Any questions or remarks? Send us a message
							</p>
							<br />
							<div className={dashboard_style.company_contacts}>
								<img
									src={emailcontact}
									className={dashboard_style.contactUs_images1}
								/>
							</div>
							<div
								onClick={(e) => {
									window.location.href = "mailto:hello@swiftrider.com";
								}}
							>
								<p
									id={dashboard_style.contact_details1}
									className={dashboard_style.contact_details_link}
								>
									<a href="#">hello@swiftrider.com</a>
								</p>
							</div>
							<div className={dashboard_style.company_contacts}>
								<img
									src={phonecontact}
									className={dashboard_style.contactUs_images2}
								/>
							</div>
							<div>
								<p
									id={dashboard_style.contact_details2}
									className={dashboard_style.contact_details_link}
								>
									<a href="tel:+2348062898015">08062898015,</a>
									<a href="tel:+2347015950245">07015950245</a>
								</p>
							</div>
							<div className={dashboard_style.company_contacts}>
								<img
									src={addresscontact}
									className={dashboard_style.contactUs_images3}
								/>
							</div>
							<div>
								<p id={dashboard_style.contact_details3}>
									20, Abn Street, Banana Island, Lagos
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					{modal2 && (
						<div className={modalStyle.modal}>
							<div className={modalStyle.overlay}> </div>
							<div className={modalStyle.modal_content}>
								<img
									src={Success}
									alt="success"
									className={modalStyle.success}
								/>
								<h5 className={modalStyle.modalName}>Order Accepted </h5>
								<p className={modalStyle.modalText}>
									Your order has been accepted by
								</p>
								<h5 className={modalStyle.modalTitle}>{rider.name}</h5>
								<div className={dashboard_style.modalOrderDelete}>
									<button
										className={modalStyle.modalBtn1}
										onClick={toggleModal}
									>
										View Rider
									</button>

									{/* <button
										className={modalStyle.modalBtn1}
										onClick={() => {
											handleDelete();
										}}
									>
										Cancel Order
									</button> */}
								</div>
								<button
									className={modalStyle.close_modal}
									onClick={() => {
										setRider([]);
										toggleModal2();
									}}
								>
									<AiOutlineClose size={20} />
								</button>
							</div>
						</div>
					)}
					{modal && (
						<div className={modalStyle.modal}>
							<div className={modalStyle.overlay}> </div>
							<div className={modalStyle.modal_content2}>
								<h5 className={modalStyle.modalName}>
									Rider arriving in about 1:00:00
								</h5>
								<img
									className={modalStyle.requestProfilePic}
									src={rider.passport}
									alt="profilePic"
								/>
								<h5 className={modalStyle.modalTitle}>{rider.name}</h5>
								<p className={modalStyle.modalText}>{rider.phone}</p>
								<p className={modalStyle.modalNumber}> Lincense plate number</p>
								<p className={modalStyle.modalPlate}> {rider.plateNumber}</p>
								<p className={modalStyle.modalNo}>
									4.90 <AiFillStar />
								</p>
								<div className={modalStyle.modalArrange}>
									<button
										className={modalStyle.modalBtn3}
										onClick={() => call(rider.phone)}
									>
										Call
									</button>
									<button className={modalStyle.modalBtn2}>Send Message</button>
								</div>
								<button
									className={modalStyle.close_modal}
									onClick={() => {
										// setOrder([]);
										setRider([]);
										toggleModal();
										toggleModal2();
										// setModal2(false);
									}}
								>
									<AiOutlineClose size={30} style={{ color: "red" }} />
								</button>
							</div>
						</div>
					)}

					{modal3 && (
						<div className={modalStyle.modal1}>
							<div className={modalStyle.overlayy}> </div>
							<div className={modalStyle.modal_content}>
								<h5 className={modalStyle.modalName}>Delete pending order</h5>
								<button
									className={modalStyle.modalBtn1}
									onClick={() => {
										handleDelete();
									}}
								>
									Delete Order
								</button>
								<button
									className={modalStyle.close_modal1}
									onClick={() => {
										// setOrder([]);
										setRider([]);
										toggleModal3();
										// setModal2(false);
									}}
								>
									<AiOutlineClose size={20} />
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default UserDashboard;
