import CopyToClipboard from "react-copy-to-clipboard";
import gameStartBtnCss from "./Start.module.css";
import toast from "react-hot-toast";

const GameStartButton = ({ type, children, onClick }) => {
	if (type !== "tertiary") {
		return (
			<button className={gameStartBtnCss[type]} onClick={() => onClick?.()}>
				{children}
			</button>
		);
	} else
		return (
			<CopyToClipboard
				text={window.location.href}
				onCopy={() => {
					toast("invite link copied", {
						duration: 2000,
						style: {
							backgroundColor: "#192A32",
							color: "#F2B237",
							width: "13.75rem",
							height: "2.25rem",
							fontWeight: "600",
						},
					});
				}}
			>
				<button className={gameStartBtnCss[type]}>Invite your friend</button>
			</CopyToClipboard>
		);
};

export default GameStartButton;