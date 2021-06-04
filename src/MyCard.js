import { Box } from "@material-ui/core";

const MyCard = ({ value, highlight }) => {
  return (
    <div className="MyCard">
      <Box border={highlight ? 1 : 0} borderColor="red">
        {value}
      </Box>
    </div>
  );
};

export default MyCard;
