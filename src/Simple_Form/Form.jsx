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
    <body
      style={{
        display: "flex",
        //alignItems: "center",
        //justifyContent: "center",
        minHeight: "70vh",
        background: "linear-gradient(to right,#5d4157, #a8caba)",
        width: "100vw",
        //padding: "10px",
        boxSizing: "border-box",
        overflowX: "hidden",
        "@media (max-width: 960px)": {
          width: "90vw",
        },
        "@media (max-width: 600px)": {
          width: "80vw",
        },
        "@media (max-width: 400px)": {
          width: "70vw",
        },
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
            maxWidth: 400,
            width: "100%",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "white",
          }}
        >
          <Typography variant="h5" gutterBottom align="center">
            Store Information
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Stack alignItems="center" direction="row" gap={2}>
              <StoreMallDirectoryOutlinedIcon />
              <Typography variant="h6">Store Name</Typography>
            </Stack>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Prashant Corner"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              required
            />
            <Stack alignItems="center" direction="row" gap={2}>
              <PersonOutlineOutlinedIcon />
              <Typography variant="h6">Contact Person</Typography>
            </Stack>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Prashant Patil"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />
            <Stack alignItems="center" direction="row" gap={2}>
              <AdUnitsOutlinedIcon />
              <Typography variant="h6">Mobile Number</Typography>
            </Stack>
            <TextField
              variant="outlined"
              size="small"
              placeholder="+91-9833155616"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <Stack alignItems="center" direction="row" gap={2}>
              <CategoryOutlinedIcon />
              <Typography variant="h6">Merchant Category</Typography>
            </Stack>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Sweet Shop"
              name="merchantCategory"
              value={formData.merchantCategory}
              onChange={handleChange}
              required
            />
            <Stack alignItems="center" direction="row" gap={2}>
              <HomeOutlinedIcon />
              <Typography variant="h6">Store Address</Typography>
            </Stack>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Center Point Building,Nerul,Maharashtra 400706"
              name="storeAddress"
              value={formData.storeAddress}
              onChange={handleChange}
              required
            />
            <Stack alignItems="center" direction="row" gap={2}>
              <DraftsOutlinedIcon />
              <Typography variant="h6">Email</Typography>
            </Stack>
            <TextField
              variant="outlined"
              size="small"
              placeholder="contact@prashatcorner.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained" type="submit" sx={{ width: "50%" }}>
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
    </body>
  );
};

export default Form;
