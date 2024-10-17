import React from "react";
import {
  Drawer,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";

const GroupDrawer = ({
  isOpen,
  onClose,
  columns,
  groupingColumns,
  setGroupingColumns,
}) => {
  const handleGroupByChange = (event) => {
    setGroupingColumns(event.target.value);
  };

  const handleClearGrouping = () => {
    setGroupingColumns([]);
  };

  const groupableColumns = columns.filter(
    (column) => column.id === "category" || column.id === "subcategory"
  );

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: 250, padding: 20 }}>
        <Typography variant="h4" align="center">
          Group by Columns
        </Typography>

        <FormControl fullWidth style={{ marginBottom: "20px" }}>
          <InputLabel>Group By</InputLabel>
          <Select
            value={groupingColumns}
            onChange={handleGroupByChange}
            label="Group By"
            multiple
          >
            {groupableColumns
              .filter((column) => column.visible)
              .map((column) => (
                <MenuItem key={column.id} value={column.id}>
                  {column.header}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        {groupingColumns.length > 0 && (
          <Button variant="outlined" fullWidth onClick={handleClearGrouping}>
            Clear Grouping
          </Button>
        )}
      </div>
    </Drawer>
  );
};

export default GroupDrawer;
