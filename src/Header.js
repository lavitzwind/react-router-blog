import { FaLaptop, FaTabletAlt, FaMobileALt } from "react-icons/fa";

const Header = ({ title, width }) => {
	return (
		<header className="Header">
			<h1>{title}</h1>
		</header>
	);
};

export default Header;
