import React, { useState } from "react";
import "./styles.css";
import Header from "./comps/Header/Header";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./comps/Home/Home";
import Favourites from "./comps/Favourites/Favourites";
import Cart from "./comps/Cart/Cart";

const useStyles = makeStyles({
  cotentGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  pages: {
    position: "relative",
    bottom: 30,
  },
  arrow: {
    padding: 10,
    height: 50,
    borderRadius: "50%",
    position: "fixed",
    bottom: 10,
    right: "5%",
  },
});

export default function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [renderedPhones, setRenderedPhones] = useState("All Phones");
  const updateRenderedPhones = (event) => {
    setRenderedPhones(event.target.innerText);
    setOpen(false);
  };

  const [favs, setFavs] = useState([]);
  const addFav = (mobileData) => {
    const newFavs = [...favs, mobileData];
    mobileData.basic.isFav = true;
    setFavs(newFavs);
    console.log(favs);
  };

  const removeFav = (mobileData, index) => {
    mobileData.basic.isFav = false;
    const newFavs = [...favs];
    newFavs.splice(index, 1);
    setFavs(newFavs);
  };

  const [total, setTotal] = useState(0);

  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (mobileData) => {
    mobileData.basic.inCart = true;
    setTotal(total + mobileData.basic.price);
    const newCartItems = [...cartItems, mobileData];
    setCartItems(newCartItems);
  };
  const removeCartItem = (mobileData, index) => {
    mobileData.basic.inCart = false;
    setTotal(total - mobileData.basic.price);
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [searchValue, setSearchValue] = useState("");
  const updateSearchValue = (event) => setSearchValue(event.target.value);

  const [searchQuery, setSearchQuery] = useState("");

  const searchExact = (name) => {
    setRenderedPhones("");
    setSearchQuery(name);
    setSearchValue("");
    console.log(searchQuery);
  };

  return (
    <Router>
      <div className="App">
        <Grid container>
          <Grid item container>
            <Header
              updateRenderedPhones={updateRenderedPhones}
              open={open}
              handleDrawerOpen={handleDrawerOpen}
              handleDrawerClose={handleDrawerClose}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              updateSearchValue={updateSearchValue}
              searchExact={searchExact}
            />
          </Grid>
          <Grid item container className={classes.pages}>
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  renderedPhones={renderedPhones}
                  addFav={addFav}
                  removeFav={removeFav}
                  addCartItem={addCartItem}
                  removeCartItem={removeCartItem}
                  searchQuery={searchQuery}
                />
              )}
            />
            <Route
              path="/Favourites"
              component={() => (
                <Favourites
                  favs={favs}
                  removeFav={removeFav}
                  addCartItem={addCartItem}
                  removeCartItem={removeCartItem}
                />
              )}
            />
            <Route
              path="/Cart"
              component={() => (
                <Cart
                  cartItems={cartItems}
                  addCartItem={addCartItem}
                  removeCartItem={removeCartItem}
                  total={total}
                  addFav={addFav}
                  removeFav={removeFav}
                />
              )}
            />
          </Grid>
        </Grid>
        <Button className={classes.arrow} variant="contained" color="secondary">
          <ArrowUpwardRoundedIcon
            onClick={scrollToTop}
            style={{ fontSize: 30 }}
          />
        </Button>
      </div>
    </Router>
  );
}
