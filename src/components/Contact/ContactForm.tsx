import { TextField, Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
const ContactForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Grid container xs={12} columnSpacing={4} rowSpacing={2}>
        <Grid item lg={6} xs={12}>
          <TextField
            name="name"
            placeholder="Name*"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle sx={{ color: "custom.secondary" }} />
                </InputAdornment>
              ),
              sx: {
                color: "custom.secondary",
              },
            }}
            sx={{
              bgcolor: "white",
              width: "100%",
            }}
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <TextField
            name="email"
            placeholder="Email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MailOutlineRoundedIcon sx={{ color: "custom.secondary" }} />
                </InputAdornment>
              ),
              sx: {
                color: "custom.secondary",
              },
            }}
            sx={{
              bgcolor: "white",
              width: "100%",
            }}
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <TextField
            name="phone"
            placeholder="Phone"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocalPhoneIcon sx={{ color: "custom.secondary" }} />
                </InputAdornment>
              ),
              sx: {
                color: "custom.secondary",
              },
            }}
            sx={{
              bgcolor: "white",
              width: "100%",
            }}
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <TextField
            select
            defaultValue="EUR"
            name="subject"
            placeholder="Subject One"
            sx={{
              bgcolor: "white",
              width: "100%",
            }}
            InputProps={{
              sx: {
                color: "custom.secondary",
              },
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={5}
            name="message"
            placeholder="Message*"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ position: "absolute", right: 14, top: 24 }}
                >
                  <MailOutlineRoundedIcon sx={{ color: "custom.secondary" }} />
                </InputAdornment>
              ),
              sx: {
                color: "custom.secondary",
              },
            }}
            sx={{
              bgcolor: "white",
              width: "100%",
            }}
          />
        </Grid>
        <Button
          endIcon={<SendIcon />}
          variant="contained"
          // color="custom.secondary"

          sx={{
            ":hover": {
              bgcolor: "white", // theme.palette.primary.main
              color: "custom.secondary",
            },
            width: 180,
            height: 48,
            mx: "auto",
            mt: 2,
            bgcolor: "custom.secondary",
            borderRadius: 10,
          }}
        >
          Send Message
        </Button>
      </Grid>
    </form>
  );
};

export default ContactForm;
