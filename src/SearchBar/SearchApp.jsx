import { useState } from "react";
import users from "./Data/celebrities.json";
import { SearchBar, Accordion } from "./Components";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = users.filter((item) =>
    `${item.first} ${item.last}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "60vh",
          background: "linear-gradient(to right, #9796f0, #fbc7d4)",
          width: "100vw",
          padding: "10px",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Typography variant="h4" color="Black" align="center">
            Simple React SearchBar With Search Filter
          </Typography>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredData.length > 0 ? (
            filteredData.map((user) => <Accordion key={user.id} user={user} />)
          ) : (
            <p className="text-center text-gray-500">No results found</p>
          )}
        </Box>
      </div>
    </>
  );
}

export default App;
