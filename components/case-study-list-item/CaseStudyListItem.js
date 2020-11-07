import Link from "next/link";
import { ItemBox, Title } from "./CaseStudyListItemStyles";

const CaseStudyListItem = ({ image, title, id }) => {
  return (
    <Link href={`/case-studies/${id}`}>
      <ItemBox image={image}>
        <Title>{title}</Title>
      </ItemBox>
    </Link>
  );
};

export default CaseStudyListItem;
