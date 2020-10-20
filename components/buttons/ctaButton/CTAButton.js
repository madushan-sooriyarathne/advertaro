import { CallToActionButton, BtnText } from "./CTAButtonStyles";
import Link from "next/link";

const CTAButton = ({ text, url }) => {
  return (
    <Link href={url}>
      <CallToActionButton>{text}</CallToActionButton>
    </Link>
  );
};

export default CTAButton;
