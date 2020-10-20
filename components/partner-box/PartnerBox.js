import Link from "next/link";

import { Box, Button } from "./PartnerBoxStyles";

const PartnerBox = ({ img, url }) => {
  return (
    <Box image={img}>
      <Link href={url}>
        <Button>Go to case study</Button>
      </Link>
    </Box>
  );
};

export default PartnerBox;
