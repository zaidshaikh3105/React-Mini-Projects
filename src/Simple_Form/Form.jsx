import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AdUnitsOutlinedIcon from "@mui/icons-material/AdUnitsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

const Form = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    contactPerson: "",
    mobileNumber: "",
    merchantCategory: "",
    storeAddress: "",
    email: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      console.log(formData);
      setOpen(true);
    } else {
      e.target.reportValidity();
    }
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({
      storeName: "",
      contactPerson: "",
      mobileNumber: "",
      merchantCategory: "",
      storeAddress: "",
      email: "",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #5d4157, #a8caba)",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 500,
            width: "100%",
            p: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{ color: "#333" }}
          >
            Store Information
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            {[
              {
                label: "Store Name",
                icon: StoreMallDirectoryOutlinedIcon,
                name: "storeName",
                placeholder: "Prashant Corner",
              },
              {
                label: "Contact Person",
                icon: PersonOutlineOutlinedIcon,
                name: "contactPerson",
                placeholder: "Prashant Patil",
              },
              {
                label: "Mobile Number",
                icon: AdUnitsOutlinedIcon,
                name: "mobileNumber",
                placeholder: "+91-9833155616",
              },
              {
                label: "Merchant Category",
                icon: CategoryOutlinedIcon,
                name: "merchantCategory",
                placeholder: "Sweet Shop",
              },
              {
                label: "Store Address",
                icon: HomeOutlinedIcon,
                name: "storeAddress",
                placeholder: "Center Point Building, Nerul",
              },
              {
                label: "Email",
                icon: DraftsOutlinedIcon,
                name: "email",
                placeholder: "contact@prashatcorner.com",
                type: "email",
              },
            ].map((field) => (
              <Box key={field.name}>
                <Stack alignItems="center" direction="row" gap={2}>
                  <field.icon style={{ color: "#555" }} />
                  <Typography variant="h6" sx={{ color: "#555" }}>
                    {field.label}
                  </Typography>
                </Stack>
                <TextField
                  variant="outlined"
                  size="small"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={{
                    marginTop: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                  type={field.type || "text"}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "100%",
                backgroundColor: "#5d4157",
                "&:hover": {
                  backgroundColor: "#44313e",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>

        {/* Success Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Success"}</DialogTitle>
          <DialogContent>
            <Typography>Your form has been submitted successfully.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Box>
  );
};

export default Form;
