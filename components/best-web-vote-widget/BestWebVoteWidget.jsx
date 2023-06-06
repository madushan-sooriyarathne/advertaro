import ImageComponent from "@components/image-component";

import { Widget } from "./BestWebVoteWidgetStyles";

const BestWebVoteWidget = () => {
  return (
    <Widget
      href="https://www.vote.bestweb.lk/site/advertaro_lk"
      role="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <Image
          src="https://www.bw2023.lk/vote4us.png"
          alt="Bestweb 2023 voting button"
        />
      </div>
      <span>Vote for us</span>
    </Widget>
  );
};

export default BestWebVoteWidget;
