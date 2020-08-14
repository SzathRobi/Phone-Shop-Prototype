import React, { useState } from "react";
import PhoneCard from "../PhoneCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Modal } from "@material-ui/core";
import BuyForm from "./BuyForm";

const useStyles = makeStyles({
  cart: {
    flex: 1,
  },
  cotentGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buyBtn: {
    marginBottom: 10,
  },
});
export default function Cart({
  cartItems,
  addCartItem,
  removeCartItem,
  total,
  addFav,
  removeFav,
}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={classes.cart}>
      <h1>Cart</h1>
      <h2>Total: {total}$</h2>
      <h2>Phones:</h2>
      <div className={classes.cotentGrid}>
        {cartItems.map((mobileData, index) => (
          <PhoneCard
            key={index}
            index={index}
            mobileData={mobileData}
            addCartItem={addCartItem}
            removeCartItem={removeCartItem}
            addFav={addFav}
            removeFav={removeFav}
          />
        ))}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        className={classes.buyBtn}
      >
        Buy
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <BuyForm handleClose={handleClose} />
      </Modal>
    </div>
  );
}
