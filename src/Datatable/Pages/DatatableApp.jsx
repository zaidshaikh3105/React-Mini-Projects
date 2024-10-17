import { useState } from "react";
import { Typography, Button, Box, IconButton } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { Visibility, Sort, GroupWork } from "@mui/icons-material";
import ColumnsDrawer from "../components/ColumnsDrawer.jsx";
import SortDrawer from "../components/SortDrawer.jsx";
import GroupDrawer from "../components/GroupDrawer.jsx";
import { products } from "../Data/data.js";
import { styled } from "@mui/system";

const FullScreen = styled("div")({
  width: "100vw",
  height: "100vh",
  padding: "20px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  background: "linear-gradient(to right, #141e30, #243b55)",
});

const buttonStyles = {
  marginBottom: "10px",
  marginRight: "10px",
  color: "white",
  border: "1px solid #fff",
};

const tableContainerStyles = {
  backgroundColor: "#141e30",

  borderRadius: "4px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  marginTop: "20px",
};

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return new Date(dateString).toLocaleString("en-IN", options).replace(",", "");
};

function DatatableApp() {
  const columnsOptions = [
    { id: "id", header: "ID", accessorKey: "id", visible: true },
    { id: "name", header: "Name", accessorKey: "name", visible: true },
    {
      id: "category",
      header: "Category",
      accessorKey: "category",
      visible: true,
    },
    {
      id: "subcategory",
      header: "Subcategory",
      accessorKey: "subcategory",
      visible: true,
    },
    {
      id: "price",
      header: "Price",
      accessorKey: "price",
      visible: true,
      Cell: ({ cell }) => `$${cell.getValue()}`,
    },
    {
      id: "sale_price",
      header: "Sale Price",
      accessorKey: "sale_price",
      visible: true,
      Cell: ({ cell }) => (cell.getValue() ? `$${cell.getValue()}` : "N/A"),
    },
    {
      id: "createdAt",
      header: "Created At",
      accessorKey: "createdAt",
      visible: true,
      Cell: ({ cell }) => formatDate(cell.getValue()),
    },
    {
      id: "updatedAt",
      header: "Updated At",
      accessorKey: "updatedAt",
      visible: true,
      Cell: ({ cell }) => formatDate(cell.getValue()),
    },
  ];

  const [columns, setColumns] = useState(columnsOptions);
  const [isGroupDrawerOpen, setIsGroupDrawerOpen] = useState(false);
  const [groupingColumns, setGroupingColumns] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSortDrawerOpen, setIsSortDrawerOpen] = useState(false);
  const [sortingColumn, setSortingColumn] = useState("id");
  const [sortingOrder, setSortingOrder] = useState("asc");

  const handleToggleColumn = (columnId) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, visible: !column.visible }
          : column
      )
    );
  };

  return (
    <FullScreen>
      <Typography variant="h4" color="white" align="center" gutterBottom>
        Advanced Data Table
      </Typography>

      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          variant="outlined"
          startIcon={<Visibility />}
          onClick={() => setIsDrawerOpen(true)}
          sx={buttonStyles}
        >
          Show/Hide Columns
        </Button>
        <Button
          variant="outlined"
          startIcon={<Sort />}
          onClick={() => setIsSortDrawerOpen(true)}
          sx={buttonStyles}
        >
          Sort Options
        </Button>
        <Button
          variant="outlined"
          startIcon={<GroupWork />}
          onClick={() => setIsGroupDrawerOpen(true)}
          sx={buttonStyles}
        >
          Group Options
        </Button>
      </Box>

      <ColumnsDrawer
        columns={columns}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        toggleColumnVisibility={handleToggleColumn}
      />
      <SortDrawer
        isOpen={isSortDrawerOpen}
        onClose={() => setIsSortDrawerOpen(false)}
        columns={columns}
        sortingColumn={sortingColumn}
        setSortingColumn={setSortingColumn}
        sortingOrder={sortingOrder}
        setSortingOrder={setSortingOrder}
      />
      <GroupDrawer
        isOpen={isGroupDrawerOpen}
        onClose={() => setIsGroupDrawerOpen(false)}
        columns={columns}
        groupingColumns={groupingColumns}
        setGroupingColumns={setGroupingColumns}
      />

      <Box sx={tableContainerStyles}>
        <MaterialReactTable
          columns={columns.filter((column) => column.visible)}
          data={products}
          enableSorting={true}
          state={{
            sorting: [{ id: sortingColumn, desc: sortingOrder === "desc" }],
            grouping: groupingColumns,
          }}
          enableColumnFilters={true}
          enableGlobalFilter={true}
          enablePagination={true}
          manualPagination={false}
          enableGrouping={true}
        />
      </Box>
    </FullScreen>
  );
}

export default DatatableApp;
