import { useEffect, useState } from "react";
import { Button, Symbol } from "./FloaterStyles";

const Floater = () => {
  const [showButton, setShowButton] = useState(false);

  const handleClick = (event) => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y >= 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <Button show={showButton} onClick={handleClick}>
      <Symbol>
        <use xlinkHref="/static/img/svg/sprites.svg#up"></use>
      </Symbol>
    </Button>
  );
};

export default Floater;
