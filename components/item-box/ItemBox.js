import { Box, Name } from "./ItemBoxStyles";

const ItemBox = ({ name, img }) => {
  return (
    <Box image={img}>
      <Name>{name}</Name>
    </Box>
  );
};

export default ItemBox;
