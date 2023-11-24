import { sign } from "../select/image";
import WinnerCss from "./WinnerModal.module.css";
const WinnerModal = ({ handleQuit, handleNextRound, winner, yourChoice }) => {
  return (
    <div className={WinnerCss.win}>
      <p className={WinnerCss.declaration}>
        {winner === "tie"
          ? "its tie"
          : winner === yourChoice
          ? "You Won!"
          : "PC Won!"}
      </p>
      <h2 className={WinnerCss[winner]}>
        {winner === "tie" ? (
          "No one won"
        ) : (
          <>
            {sign[winner]} <span>takes the round</span>
          </>
        )}
      </h2>
      <span className={WinnerCss.buttons}>
        <button onClick={handleQuit} className={WinnerCss.quit}>
          quit
        </button>
        <button onClick={handleNextRound} className={WinnerCss.playAgain}>
          next round
        </button>
      </span>
    </div>
  );
};

export default WinnerModal;