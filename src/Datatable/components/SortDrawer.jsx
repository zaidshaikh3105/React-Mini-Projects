import React from "react";
import {
  Drawer,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";

const SortDrawer = ({
  isOpen,
  onClose,
  columns,
  sortingColumn,
  setSortingColumn,
  sortingOrder,
  setSortingOrder,
}) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: 250, padding: 20 }}>
        <Typography variant="h4" align="center">
          Sort by Column
        </Typography>

        <FormControl component="fieldset" style={{ marginBottom: "20px" }}>
          <FormLabel component="legend">Select a Column</FormLabel>
          <RadioGroup
            value={sortingColumn}
            onChange={(e) => setSortingColumn(e.target.value)}
          >
            {columns.map((column) => (
              <FormControlLabel
                key={column.id}
                value={column.id}
                control={<Radio />}
                label={column.header}
                disabled={!column.visible}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Select Sorting Order</FormLabel>
          <RadioGroup
            value={sortingOrder}
            onChange={(e) => setSortingOrder(e.target.value)}
          >
            <FormControlLabel
              value="asc"
              control={<Radio />}
              label="Ascending"
            />
            <FormControlLabel
              value="desc"
              control={<Radio />}
              label="Descending"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </Drawer>
  );
};

export default SortDrawer;
