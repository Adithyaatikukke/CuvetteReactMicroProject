import { useRef } from "react";

export const useOutSideClick = (callback) => {
  const ref = useRef();
  function handleOutsideClick(e) {
    if (ref.current && ref.current.parentElement === e.target) {
      callback?.();
    }
  }
  return { ref, handleOutsideClick };
};
