import "./Services.css";
import reliable from "../../assets/reliable.svg";
import time from "../../assets/time.svg";
import track from "../../assets/track.svg";
import headset from "../../assets/headset.svg";
import world from "../../assets/world.svg";
import order from "../../assets/order.svg";
import quality_riders from "../../assets/quality_riders.svg";
import ellipse from "../../assets/Ellipse.svg";
import stars from "../../assets/stars.svg";

const Services = () => {
	return (
		<div className="container">
			<div className="servicesContainer">
				<h1 className="services_h1">TopNotch Services</h1>
				<p className="services_p">
					Quickly integrate powerful solutions that gives you more flexibility
					and control over your parcel shipping and logistics processes
				</p>
			</div>

			<div className="grid">
				<div className="column">
					<div className="card">
						<img src={reliable} alt="reliable" />
						<p className="cardTitle se services_p">Reliable and Secure</p>
						<p className="services_p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
					<div className="card">
						<img src={time} alt="time" />
						<p className="cardTitle services_p">On-Time Delivery</p>
						<p className="servicer_p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
					<div className="card">
						<img src={track} alt="track" />
						<p className="cardTitle services_p">Track your shipment</p>
						<p className="servicer_p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img src={headset} alt="headset" />
						<p className="cardTitle services_p">Great Customer Service</p>
						<p className="servicer_p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
					<div className="card">
						<img src={world} alt="world" />
						<p className="cardTitle services_p">Nationwide Delivery</p>
						<p className="servicer_p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
					<div className="card">
						<img src={order} alt="order" />
						<p className="cardTitle services_p">Order Fulfilment</p>
						<p className="servicer_p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
							maecenas fusce orci nullam aenean arcu tellus. Massa rhoncus
							vestibulum, at nunc pellentesque ornare urna
						</p>
					</div>
				</div>
			</div>
			<div className="qualityriders">
				<div className="riderImage">
					<img src={quality_riders} alt="quality_riders" />
				</div>

				<div className="riderText">
					<h1 className="services_h1">Quality Riders & Partners Ready To Deliver</h1>
					<p className="servicer_p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
						volutpat tortor ultricies tincidunt magna. Faucibus tempus pretium
						sed enim integer at aliquet a. Semper vel id lectus quis vitae,
						velit est. Orci mi sed dui viverra.
					</p>
				</div>
			</div>
			<div className="clients">
				<div className="clientText">
					<h1 className="services_h1">What Our Clients Say About Us</h1>
				</div>
				<div className="grid">
					<div className="column1">
						<div className="clientCard">
							<div className="imageCircle">
								<img src={ellipse} alt="ellipse" />
							</div>
							<p className="servicer_p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est
								leo a eget risus nunc. Arcu amet nibh arcu risus vulputate.
								Amet, ac nec, nunc viverra massa blandit nec enim volutpat.
								Cursus pretium velit eget justo, turpis.
							</p>
							<div className="textStars">
								<p className="cardTitle services_p">Jenifer Harrison</p>
								<img src={stars} alt="stars" />
							</div>
						</div>
						<div className="clientCard">
							<div className="imageCircle">
								<img src={ellipse} alt="ellipse" />
							</div>
							<p className="servicer_p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est
								leo a eget risus nunc. Arcu amet nibh arcu risus vulputate.
								Amet, ac nec, nunc viverra massa blandit nec enim volutpat.
								Cursus pretium velit eget justo, turpis.
							</p>
							<div className="textStars">
								<p className="cardTitle services_p">Jenifer Harrison</p>
								<img src={stars} alt="stars" />
							</div>
						</div>
						<div className="clientCard">
							<div className="imageCircle">
								<img src={ellipse} alt="ellipse" />
							</div>
							<p className="servicer_p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est
								leo a eget risus nunc. Arcu amet nibh arcu risus vulputate.
								Amet, ac nec, nunc viverra massa blandit nec enim volutpat.
								Cursus pretium velit eget justo, turpis.
							</p>
							<div className="textStars">
								<p className="cardTitle services_p">Jenifer Harrison</p>
								<img src={stars} alt="stars" />
							</div>
						</div>
					</div>
					<div className="column1">
						<div className="clientCard">
							<div className="imageCircle">
								<img src={ellipse} alt="ellipse" />
							</div>
							<p className="servicer_p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est
								leo a eget risus nunc. Arcu amet nibh arcu risus vulputate.
								Amet, ac nec, nunc viverra massa blandit nec enim volutpat.
								Cursus pretium velit eget justo, turpis.
							</p>
							<div className="textStars">
								<p className="cardTitle services_p">Jenifer Harrison</p>
								<img src={stars} alt="stars" />
							</div>
						</div>
						<div className="clientCard">
							<div className="imageCircle">
								<img src={ellipse} alt="ellipse" />
							</div>
							<p className="services_p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est
								leo a eget risus nunc. Arcu amet nibh arcu risus vulputate.
								Amet, ac nec, nunc viverra massa blandit nec enim volutpat.
								Cursus pretium velit eget justo, turpis.
							</p>
							<div className="textStars">
								<p className="cardTitle services_p">Jenifer Harrison</p>
								<img src={stars} alt="stars" />
							</div>
						</div>
						<div className="clientCard">
							<div className="imageCircle">
								<img src={ellipse} alt="ellipse" />
							</div>
							<p className="services_p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est
								leo a eget risus nunc. Arcu amet nibh arcu risus vulputate.
								Amet, ac nec, nunc viverra massa blandit nec enim volutpat.
								Cursus pretium velit eget justo, turpis.
							</p>
							<div className="textStars">
								<p className="cardTitle services_p">Jenifer Harrison</p>
								<img src={stars} alt="stars" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
