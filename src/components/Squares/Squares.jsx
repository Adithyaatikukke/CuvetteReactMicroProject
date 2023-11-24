import { sign } from "../select/image";
import squareCss from "./Squares.module.css";
const Squares = ({ item, onClick, index }) => {
	const attr = !item ? "square" : item;

	return (
		<div className={squareCss[attr]} onClick={() => onClick(index)}>
			{!item ? item : sign[item]}
		</div>
	);
};

export default Squares;
