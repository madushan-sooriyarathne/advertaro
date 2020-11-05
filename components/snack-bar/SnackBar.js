import { useContext } from "react";
import {
  SnackBarContext,
  SnackBarDispatchContext,
} from "../../context/SnackBarContext";
import { Bar, Message, CloseButton } from "./SnackBarStyles";

const SnackBar = () => {
  const message = useContext(SnackBarContext);
  const setMessage = useContext(SnackBarDispatchContext);

  const closeSnackBar = (event) => {
    setMessage("");
  };

  return (
    <Bar show={message}>
      <Message>{message}</Message>
      <CloseButton onClick={closeSnackBar}>
        <use xlinkHref="/static/img/svg/sprites.svg#close"></use>
      </CloseButton>
    </Bar>
  );
};

export default SnackBar;
