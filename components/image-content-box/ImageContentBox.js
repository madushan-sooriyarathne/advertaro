import { Box, Image, BoxTitle, Description } from "./ImageContentBoxStyles";

const ImageContentBox = ({ image, title, description }) => {
  return (
    <Box>
      <Image image={image} />
      <BoxTitle>{title}</BoxTitle>
      <Description>{description}</Description>
    </Box>
  );
};

export default ImageContentBox;
