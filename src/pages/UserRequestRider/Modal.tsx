import React, { useState } from "react";
import profilePic from "../../assets/profilepic.png";
import { AiFillStar } from "react-icons/ai";
import Success from "../../assets/Success.svg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import modalStyle from "../UserRequestRider/Modal2.module.css";

function Modal() {
	const [modal, setModal] = useState(false);
	const [modal2, setModal2] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};
	const toggleModal2 = () => {
		setModal2(!modal2);
	};
	return (
		<div>
			<div>
				<button onClick={toggleModal2}>kevwe</button>
			</div>
			{modal2 && (
				<div className={modalStyle.modal}>
					<div className={modalStyle.overlay}> </div>
					<div className={modalStyle.modal_content}>
						<img src={Success} alt="success" className={modalStyle.success} />
						<h5 className={modalStyle.modalName}>Order Accepted </h5>
						<p className={modalStyle.modalText}>
							
							Your order has been accepted by
						</p>
						<h5 className={modalStyle.modalTitle}>Babatunde Akin</h5>

						<div className={modalStyle.modalArrange}>
							<button className={modalStyle.modalBtn1} onClick={toggleModal}>
								View Rider
							</button>
						</div>
					</div>
				</div>
			)}

			{modal && (
				<div className={modalStyle.modal}>
					<div className={modalStyle.overlay}> </div>
					<div className={modalStyle.modal_content2}>
						<h5 className={modalStyle.modalName}>Rider arriving in 8mins </h5>
						<img
							className={modalStyle.requestProfilePic}
							src={profilePic}
							alt="profilePic"
						/>
						<h5 className={modalStyle.modalTitle}>Babatunde Akin</h5>
						<p className={modalStyle.modalText}> 08031234567</p>
						<p className={modalStyle.modalNumber}> Lincense plate number</p>
						<p className={modalStyle.modalPlate}> RYC40CE</p>
						<p className={modalStyle.modalNo}>
							
							4.82 <AiFillStar />
						</p>

						<div className={modalStyle.modalArrange}>
							<button className={modalStyle.modalBtn3}>Call</button>
							<button className={modalStyle.modalBtn2}>Send Message</button>
						</div>
						<Link to="/user-dashboard">
							<button className={modalStyle.close_modal}>
								<AiOutlineClose size={20} />
							</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}

export default Modal;
