import Link from "next/link";

import { Box } from "./PartnerBoxStyles";

const PartnerBox = ({ img, url }) => {
  return (
    <Link href={url}>
      <Box image={img}> </Box>
    </Link>
  );
};

export default PartnerBox;
