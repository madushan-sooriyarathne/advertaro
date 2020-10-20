import { DarkButton } from "./CommonButtonDarkStyles";
import Link from "next/link";

const CommonButtonDark = ({ text, url }) => {
  return (
    <Link href={url}>
      <DarkButton>{text}</DarkButton>
    </Link>
  );
};

export default CommonButtonDark;
