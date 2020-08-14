import React from "react";
import PhoneCard from "../PhoneCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  favs: {
    flex: 1,
  },
  cotentGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default function Favourites({
  favs,
  removeFav,
  addCartItem,
  removeCartItem,
}) {
  const classes = useStyles();
  return (
    <div className={classes.favs}>
      <h1>Favourites</h1>
      <div className={classes.cotentGrid}>
        {favs.map((mobileData, index) => (
          <PhoneCard
            key={index}
            index={index}
            mobileData={mobileData}
            removeFav={removeFav}
            addCartItem={addCartItem}
            removeCartItem={removeCartItem}
          />
        ))}
      </div>
    </div>
  );
}
