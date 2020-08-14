import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  buyForm: {
    width: 280,
    height: "90%",
    backgroundColor: "#f4f4f4",
    position: "fixed",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  formBtn: {
    margin: "15px 5px 5px 5px"
  },
  cancelBtn: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)"
  }
});

export default function BuyForm({ handleClose }) {
  const classes = useStyles();

  const [step, setStep] = useState(1);
  const [client, setClient] = useState();

  return (
    <div className={classes.buyForm}>
      {step === 1 ? (
        <form className={classes.form}>
          <h1>Billing Data</h1>
          <TextField label="Full Name" />
          <TextField label="City" />
          <TextField label="Postal Code" />
          <TextField label="Street" />
          <TextField label="Street Number" />
          <Button
            onClick={() => setStep(2)}
            className={classes.formBtn}
            color="primary"
            variant="contained"
          >
            Next
          </Button>
        </form>
      ) : (
        <form className={classes.form}>
          <h1>Card Data</h1>
          <TextField label="Card Number" />
          <TextField label="Expire Date" />
          <TextField label="CVC" />
          <div>
            <Button
              onClick={() => setStep(1)}
              className={classes.formBtn}
              color="primary"
              variant="contained"
            >
              Back
            </Button>
            <Button
              onClick={() => alert("Thank You")}
              className={classes.formBtn}
              color="primary"
              variant="contained"
            >
              Buy
            </Button>
          </div>
        </form>
      )}
      <Button
        onClick={handleClose}
        className={classes.cancelBtn}
        variant="contained"
        color="secondary"
      >
        Cancel
      </Button>
    </div>
  );
}
