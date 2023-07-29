import { useEffect, useState } from "react";
// import NavbarProfile from "../../components/Navbar/NavbarBiddingOrder";
import rDashboard from "./RidersDashboard.module.css";
import overviewRider from "../../assets/overviewRider.svg";
import shoppingBag from "../../assets/shoppingBag.svg";
import { TiMessages } from "react-icons/ti";
import { VscLocation } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "../../utils/api/axios";
import DemoNav from "../../components/Navbar/DemoNavbar";

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
const RidersDashboard = () => {
	const [ridersBill, setRidersBill] = useState([]);
	const [completedRides, setCompletedRides] = useState("");



	useEffect(() => {
		async function fetchData() {
			const signature = localStorage.getItem("signature");
			if (signature === null) return;
			const config = {
				headers: {
					Authorization: `Bearer ${signature}`,
				},
			};
			await axios
				.get(
					"http://localhost:4000/riders/rider-dashdoard-completed-orders",
					config
				)
				.then((res) => {
					setCompletedRides(String(res.data.totalOrders));
				});
		}
		async function getRidersBill() {
			// e.preventDefault();
			const signature = localStorage.getItem("signature");
			if (signature === null) return;
			const config = {
				headers: {
					Authorization: `Bearer ${signature}`,
				},
			};
			await axios
				.get(
					"http://localhost:4000/riders/rider-dashboard-pending-orders",
					config
				)
				.then((res) => {
					setRidersBill(res.data?.orders?.rows);
				});
			// console.log("myData: ", response?.data);
		}
		fetchData().catch(console.error);
		getRidersBill().catch(console.error);
	}, []);
	return (
		<div className={rDashboard.container}>
			{/* <NavbarProfile /> */}
			<DemoNav />
			<div className={rDashboard.subcontainer}>
				<div className={rDashboard.overviewHeader}>
					<img src={overviewRider} alt="overview" />
					<h1 className={rDashboard.overviewh1}>Overview</h1>
				</div>
				<div className={rDashboard.gridArea}>
					<div className={rDashboard.totalOrders}>
						<div className={rDashboard.orderRequest}>
							<h1 className={rDashboard.totalOrdersH1}>Total Orders</h1>
							
						</div>
						<div className={rDashboard.ordersCompleted}>
							<h1 className={rDashboard.orders1}>{completedRides}</h1>
							<h2 className={rDashboard.ordersH2}>Rides completed</h2>
							<img
								className={rDashboard.shoppingBag}
								src={shoppingBag}
								alt="shoppingBag"
							/>
						</div>
					</div>
					<div className={rDashboard.myOrders}>
						<div className={rDashboard.myOrdersee}>
							<h1 className={rDashboard.ordersMy}>My Rides</h1>
							<a href="#" className={rDashboard.seeAllOrders}>
								See all
							</a>
						</div>
						{ridersBill?.length > 0 ? (
							ridersBill.map((ridersBill: any) => (
								<div className={rDashboard.pendingTime} key={ridersBill.id}>
									<p className={rDashboard.todayBread}>
										
										{removeTimeAndFormatDate(ridersBill.createdAt)}
									</p>
									<span className={rDashboard.pendingRides}>
										{ridersBill.orderNumber}
									</span>
									<p className={rDashboard.orderNos}>{ridersBill.status}</p>
									<span className={rDashboard.orderCash}>
										N{ridersBill.offerAmount}
									</span>
								</div>
							))
						) : (
							<p>No data available</p>
						)}
					</div>
					<div className={rDashboard.messages}>
						<div className={rDashboard.messagesTopic1}>
							<h1 className={rDashboard.messagesTopic}>Messages</h1>
						</div>
						<div className={rDashboard.messagesIcons}>
							<div className={rDashboard.iconMessage}>
								<TiMessages className={rDashboard.tiMessage} />
							</div>
							<h1 className={rDashboard.noMessage}>No Messages</h1>
							<p className={rDashboard.noMessageP}>
								You currently do not have any message
							</p>
						</div>
					</div>
					<div className={rDashboard.Contact}>
						<div className={rDashboard.usContact}>
							<h1 className={rDashboard.usContact1}>Contact us</h1>
						</div>
						<div className={rDashboard.getIntouch}>
							<h1 className={rDashboard.getIntouch1}>Get in touch</h1>
							<p className={rDashboard.getInSend}>
								Any question or remarks? Send us a message.
							</p>
						</div>
						<div
							className={rDashboard.contactDetails}
							onClick={(e) => {
								window.location.href = "mailto:hello@swiftrider.com";
							}}
						>
							<p className={rDashboard.emailAddress}>
								
								<MdOutlineEmail />
								<a className={rDashboard.contact_details_link} href="#">hello@swiftrider.com</a>
							</p>
							<p className={rDashboard.phoneNum}>
								<BsTelephone />
								<a className={rDashboard.contact_details_link} href="tel:+2348062898015">08062898015,</a>
								<a className={rDashboard.contact_details_link} href="tel:+2347015950245">07015950245</a>
							</p>
							<p className={rDashboard.homeAddress}>
								<VscLocation />
								<a  href="#" className={rDashboard.contact_details_link}>25, Uhkorunmi street, Ohuhen, Edo</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default RidersDashboard;
