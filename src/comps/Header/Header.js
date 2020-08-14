import React, { useState } from "react";
import SearchCard from "./SearchCard";
import { mobileDatas } from "../../mobileDatas/mobileDatas";

import clsx from "clsx";
import { fade, makeStyles, useTheme } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SearchIcon from "@material-ui/icons/Search";

import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputBase,
} from "@material-ui/core";

import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function Header({
  updateRenderedPhones,
  open,
  handleDrawerOpen,
  handleDrawerClose,
  searchValue,
  updateSearchValue,
  searchExact,
  setSearchValue,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const [focused, setFocused] = useState(false);
  const focusIn = () => {
    setFocused(true);
  };
  const focusOut = () => {
    setTimeout(() => {
      setFocused(false);
      setSearchValue("");
    }, 100);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Phone Shop
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={searchValue}
              onChange={updateSearchValue}
              onFocus={focusIn}
              onBlur={focusOut}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>

      {
        //////////////  DRAWER  //////////////////
      }

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["All Phones", "Huawei", "Apple", "Samsung", "Honor"].map(
            (text, index) => (
              <Link to="/" key={text}>
                <ListItem button onClick={updateRenderedPhones}>
                  <ListItemIcon>
                    {index !== 2 ? <PhoneAndroidIcon /> : <PhoneIphoneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Favourites", "Cart"].map((text, index) => (
            <Link to={`/${text}`} key={text}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>
                  {index === 0 ? <FavoriteIcon /> : <ShoppingCartIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>

      {
        //////////////// SEARCHCARD ////////////////////
      }
      <div className="searchCardContainer">
        {searchValue !== "" && focused
          ? mobileDatas
              .filter((mobileData) =>
                mobileData.basic.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((mobileData) => (
                <SearchCard
                  key={mobileData.basic.name}
                  name={mobileData.basic.name}
                  img={mobileData.basic.img}
                  searchExact={searchExact}
                />
              ))
          : null}
      </div>
    </div>
  );
}
