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
      <Message>
        You have been successfully subscribed to our newsletter. A confirmation
        email has been sent!
      </Message>
      <CloseButton onClick={closeSnackBar}>
        <use xlinkHref="/static/img/svg/sprites.svg#close"></use>
      </CloseButton>
    </Bar>
  );
};

export default SnackBar;
