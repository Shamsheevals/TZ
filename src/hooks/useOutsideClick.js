import { useEffect } from "react";

const useOutsideClick = (ref, handler, mouseEvent = "mousedown") => {
  const handleClickOutside = (e) => {
    if (
      ref?.current &&
      e?.target &&
      !ref.current.contains(e.target) &&
      handler
    ) {
      handler(e);
    }
  };
  useEffect(() => {
    document.addEventListener(mouseEvent, handleClickOutside);
    return () => {
      document.removeEventListener(mouseEvent, handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOutsideClick;
