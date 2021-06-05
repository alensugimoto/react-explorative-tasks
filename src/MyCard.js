import { TextField } from "@material-ui/core";
import { useState } from "react";

function MyCard(props) {
  const highlight = props.highlight;
  const [value, setValue] = useState(props.value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <div className="MyCard">
      <form>
        <TextField
          type="text"
          variant="outlined"
          error={highlight}
          defaultValue={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default MyCard;
