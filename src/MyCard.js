import { TextField } from "@material-ui/core";

function MyCard({ value, highlight, onChange }) {
  return (
    <div className="MyCard">
      <TextField
        type="text"
        variant="outlined"
        defaultValue={value}
        error={highlight}
        onChange={onChange}
      />
    </div>
  );
}

export default MyCard;
