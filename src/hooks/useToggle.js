import { useState } from "react";

const useToggle = () => {
  const [ele, setEle] = useState(null);
  const open = Boolean(ele);
  const handleClick = (event) => {
    setEle(event.currentTarget);
  };
  const handleClose = () => {
    setEle(null);
  };
  return {
    ele,
    open,
    handleClick,
    handleClose,
  };
};

export default useToggle;
