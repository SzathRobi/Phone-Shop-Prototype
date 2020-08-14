import React from "react";
import { mobileDatas } from "../../mobileDatas/mobileDatas";
import PhoneCard from "../PhoneCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cotentGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90vw",
    position: "relative",
    left: 20
  }
});

export default function Home({
  renderedPhones,
  addFav,
  removeFav,
  addCartItem,
  removeCartItem,
  searchQuery
}) {
  const classes = useStyles();

  return (
    <div className="Home">
      <Grid container>
        <Grid item container>
          <Grid className={classes.cotentGrid} item container>
            {searchQuery !== "" && renderedPhones === ""
              ? mobileDatas
                  .filter((mobileData) =>
                    mobileData.basic.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((mobileData, index) => (
                    <PhoneCard
                      key={mobileData.basic.id}
                      index={index}
                      mobileData={mobileData}
                      addFav={addFav}
                      removeFav={removeFav}
                      addCartItem={addCartItem}
                      removeCartItem={removeCartItem}
                    />
                  ))
              : null}
            {renderedPhones === "All Phones"
              ? mobileDatas.map((mobileData, index) => (
                  <PhoneCard
                    key={mobileData.basic.id}
                    index={index}
                    mobileData={mobileData}
                    addFav={addFav}
                    removeFav={removeFav}
                    addCartItem={addCartItem}
                    removeCartItem={removeCartItem}
                  />
                ))
              : null}
            {renderedPhones === "Huawei"
              ? mobileDatas
                  .filter(
                    (mobileData) => mobileData.basic.type === renderedPhones
                  )
                  .map((mobileData, index) => (
                    <PhoneCard
                      key={mobileData.basic.id}
                      index={index}
                      mobileData={mobileData}
                      addFav={addFav}
                      removeFav={removeFav}
                      addCartItem={addCartItem}
                      removeCartItem={removeCartItem}
                    />
                  ))
              : null}
            {renderedPhones === "Apple"
              ? mobileDatas
                  .filter(
                    (mobileData) => mobileData.basic.type === renderedPhones
                  )
                  .map((mobileData, index) => (
                    <PhoneCard
                      key={mobileData.basic.id}
                      index={index}
                      mobileData={mobileData}
                      addFav={addFav}
                      removeFav={removeFav}
                      addCartItem={addCartItem}
                      removeCartItem={removeCartItem}
                    />
                  ))
              : null}
            {renderedPhones === "Samsung"
              ? mobileDatas
                  .filter(
                    (mobileData) => mobileData.basic.type === renderedPhones
                  )
                  .map((mobileData, index) => (
                    <PhoneCard
                      key={mobileData.basic.id}
                      index={index}
                      mobileData={mobileData}
                      addFav={addFav}
                      removeFav={removeFav}
                      addCartItem={addCartItem}
                      removeCartItem={removeCartItem}
                    />
                  ))
              : null}
            {renderedPhones === "Honor"
              ? mobileDatas
                  .filter(
                    (mobileData) => mobileData.basic.type === renderedPhones
                  )
                  .map((mobileData, index) => (
                    <PhoneCard
                      key={mobileData.basic.id}
                      index={index}
                      mobileData={mobileData}
                      addFav={addFav}
                      removeFav={removeFav}
                      addCartItem={addCartItem}
                      removeCartItem={removeCartItem}
                    />
                  ))
              : null}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
