// import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import NavBarHome from "../../components/Navbar/NavBarHome";

const Home = () => {
	return (
		<div>
			<NavBarHome />
			<div className="HomeCpntCtner">
				<Hero />
				<Services />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
