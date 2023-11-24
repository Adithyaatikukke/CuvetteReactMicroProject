import choosePlayerCss from "./selectPlayer.module.css";
import { sign } from "./image";
const select = ({ onClick, yourChoice }) => {
  const active = yourChoice;
  console.log(active);
  return (
    <div className={choosePlayerCss.chooseComp}>
      <h3 className={choosePlayerCss.heading}>PICK PLAYER</h3>
      <div className={choosePlayerCss.buttonCont}>
        <button
          className={`${choosePlayerCss.crossButton} ${
            active === "cross" ? choosePlayerCss.active : ""
          }`}
          onClick={() => {
            onClick("cross");
          }}
        >
          {sign.cross}
        </button>
        <button
          className={`${choosePlayerCss.circleButton} ${
            active === "circle" ? choosePlayerCss.active : ""
          }`}
          onClick={() => {
            onClick("circle");
          }}
        >
          {sign.circle}
        </button>
      </div>
    </div>
  );
};

export default select;