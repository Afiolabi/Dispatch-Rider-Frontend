import "./Hero.css";
import hero from "../../assets/hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div>
			<div className="Container">
				<div className="ImageContainer">
					<div className="imageOverlay"></div>
					<div className="mainText">
						<h1 className="hero_h1">
							Fast, Reliable and Quality Dispatch Service
						</h1>
						<p className="hero_p">Send. Track. Receive.</p>
						<div className="buttondiv">
							<Link to="/user-signup" className="button1">
								Pickup Register
							</Link>
							<Link to="/riders-signup" className="button2">
								Register as a Rider
							</Link>
						</div>
					</div>

					<img src={hero} alt="hero" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
