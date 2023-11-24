import RefreshCss from "./RefreshModal.module.css";
const RefreshModal = ({ handleQuit, handlePlayAgain }) => {
  return (
    <div className={RefreshCss.refreshContainer}>
      <h2 className={RefreshCss.head}>Do you want to quit?</h2>
      <span className={RefreshCss.buttons}>
        <button className={RefreshCss.playAgain} onClick={handlePlayAgain}>
          play again
        </button>
        <button className={RefreshCss.quit} onClick={handleQuit}>
          quit
        </button>
      </span>
    </div>
  );
};

export default RefreshModal;