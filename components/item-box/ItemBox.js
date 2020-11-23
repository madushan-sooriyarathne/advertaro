import { Box, Name } from "./ItemBoxStyles";

const ItemBox = ({ service }) => {
  return (
    <Box image={service.serviceImage.fields.file.url}>
      <Name>{service.title}</Name>
    </Box>
  );
};

export default ItemBox;
