import LoadingSpinner from "../../loading-spinner/LoadingSpinner";
import { Button } from "./SubmitButtonStyles";

const SubmitButton = ({ children, loading = false }) => {
  return (
    <Button type="submit">{loading ? <LoadingSpinner /> : children}</Button>
  );
};

export default SubmitButton;
