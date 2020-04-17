import React, { useState } from "react";
import { LocatecContext } from "../Context/LocatecContext";
import { Grid, TextField, Button, Typography, Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import axios from "axios";

import NavBar from "./NavBar";
import "../Style/Home.css";

let currentDate = () => {
  let d = new Date();
  return (
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2)
  );
};

export default function RegisterObject() {
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dateLostValue, setDateLostValue] = useState(currentDate());
  const [foundByValue, setFoundByValue] = useState("");
  const [openSuccessAlertValue, setOpenSuccessAlertValue] = useState(false)
  const [openFailureAlertValue, setOpenFailureAlertValue] = useState(false)

  const onSubmitClick = () => {
    console.log("Description-> " + descriptionValue);
    console.log("Date Lost-> " + dateLostValue);
    console.log("Found By-> " + foundByValue);
    axios
      .get(
        "https://b9gaqag9bb.execute-api.us-east-1.amazonaws.com/InsertObject?" +
          "objetoname=" +
          descriptionValue +
          "&" +
          "objetoimgurl=" +
          "placeholder.jpg" +
          "&" +
          "fechaperdida=" +
          dateLostValue +
          "&" +
          "encontradopor=" +
          foundByValue +
          "&" +
          "lugarid=" +
          1 +
          "&" +
          "statusid=" +
          14 +
          "&" +
          "fecharecogida="
      )
      .then((res) => {
        console.log(res);
        setOpenSuccessAlertValue(true);
      })
      .catch((err) => {
        console.log(err);
        setOpenFailureAlertValue(true);
      });
  };

  const handleDescriptionChange = (event) => {
    event.preventDefault();
    setDescriptionValue(event.target.value);
  };

  const handleDateLostChange = (event) => {
    event.preventDefault();
    setDateLostValue(event.target.value);
  };

  const handleFoundByChange = (event) => {
    event.preventDefault();
    setFoundByValue(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccessAlertValue(false);
    setOpenFailureAlertValue(false);
  };

  return (
    <Grid container>
      <NavBar />
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Register new lost product
            </Typography>
          </Grid>
          <form noValidate autoComplete="off">
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Description"
                value={descriptionValue}
                onChange={handleDescriptionChange}
              />
            </Grid>

            <br></br>
            <Grid item xs={12}>
              <input type="file" />
            </Grid>

            <br></br>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Date of lost"
                type="date"
                value={dateLostValue}
                onChange={handleDateLostChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <br></br>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Found by:"
                value={foundByValue}
                onChange={handleFoundByChange}
              />
            </Grid>

            <br></br>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                type="button"
                onClick={() => {
                  onSubmitClick();
                }}
              >
                Create record
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Snackbar open={openSuccessAlertValue} autoHideDuration={4000} onClose={handleClose}>
        <Alert  severity="success" onClose={handleClose}>
          Record uploaded!
        </Alert>
      </Snackbar>

      <Snackbar open={openFailureAlertValue} autoHideDuration={4000} onClose={handleClose}>
        <Alert  severity="error" onClose={handleClose}>
          Couldn't upload record, try again!
        </Alert>
      </Snackbar>
    </Grid>
  );
}
