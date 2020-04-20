import React, { useState } from "react";
import AWS from "aws-sdk";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

import NavBar from "./NavBar";
import "../Style/Home.css";

AWS.config.update({ region: "us-west-1" });

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
  let s3Instance = new AWS.S3({
    apiVersion: "2006-03-01",
    accessKeyId: "AKIASTXONR27XACX6QFL",
    secretAccessKey: "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",
  });

  const [descriptionValue, setDescriptionValue] = useState("");
  const [dateLostValue, setDateLostValue] = useState(currentDate());
  const [foundByValue, setFoundByValue] = useState("");
  const [openSuccessAlertValue, setOpenSuccessAlertValue] = useState(false);
  const [openFailureAlertValue, setOpenFailureAlertValue] = useState(false);
  const [fileValue, setFileValue] = useState("");

  const onSubmitClick = () => {
    if (!fileValue.value) {
      // Handler error
      alert("Must put a img");
      return;
    }

    let uploadParams = {
      Bucket: "locatec",
      Key: Date.now().toString() + "__" + fileValue.value.split("\\").pop(),
      Body: fileValue.files[0],
    };

    s3Instance.upload(uploadParams, (err, data) => {
      if (err) {
        setOpenFailureAlertValue(true);
      }
      if (data) {
        uploadToDB(data.Location, data.Key);
      }
    });
  };

  const uploadToDB = (img_url, img_key) => {
    axios
    .get(
      "https://b9gaqag9bb.execute-api.us-east-1.amazonaws.com/InsertObject?" +
        "objetoname=" + descriptionValue + "&" +
        "objetoimgurl=" + img_url + "&" +
        "fechaperdida=" + dateLostValue + "&" +
        "encontradopor=" + foundByValue + "&" +
        "lugarid=" + 1 + "&" +
        "statusid=" + 14 + "&" +
        "fecharecogida="
    )
      .then((res) => {
        setOpenSuccessAlertValue(true);
      })
      .catch((err) => {
        var params = {
          Bucket: "locatec",
          Key: img_key,
        };
        s3Instance.deleteObject(params, () => {});
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
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccessAlertValue(false);
    setOpenFailureAlertValue(false);
  };

  return (
    <Grid container>
      <NavBar active="Register"></NavBar>
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
              <input
                type="file"
                ref={(ref) => {
                  setFileValue(ref);
                }}
                accept="image/png, image/jpeg, image/jpg"
              />
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
      <Snackbar
        open={openSuccessAlertValue}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert severity="success" onClose={handleClose}>
          Record uploaded!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openFailureAlertValue}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert severity="error" onClose={handleClose}>
          Couldn't upload record, try again!
        </Alert>
      </Snackbar>
    </Grid>
  );
}
