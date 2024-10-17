import React from "react";
import { Drawer, Switch, Typography, FormControlLabel } from "@mui/material";

const ColumnsDrawer = ({
  columns,
  isOpen,
  onClose,
  toggleColumnVisibility,
}) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: 250, padding: 20 }}>
        <Typography variant="h4" align="center">
          Show/Hide Columns
        </Typography>
        {columns.map((column) => (
          <FormControlLabel
            key={column.id}
            control={
              <Switch
                checked={column.visible}
                onChange={() => toggleColumnVisibility(column.id)}
                color="primary"
              />
            }
            label={column.header}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          />
        ))}
      </div>
    </Drawer>
  );
};

export default ColumnsDrawer;
