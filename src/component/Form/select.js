import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const Selector = ({ newArrondissement, setNewArrondissement }) => {
  return (
    <div>
      <InputLabel
        id="demo-simple-select-label"
        style={{
          color: "black",
          fontWeight: "bold",
        }}
      >
        Arrondissement
      </InputLabel>
      <Select
        style={{ display: "flex", color: "black" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={newArrondissement}
        label="Arrondissement"
        onChange={(e) => setNewArrondissement(e.target.value)}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={13}>13</MenuItem>
        <MenuItem value={14}>14</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={17}>17</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={19}>19</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </div>
  );
};
