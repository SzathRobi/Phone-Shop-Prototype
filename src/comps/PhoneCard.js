import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  Modal,
} from "@material-ui/core";

import InfoIcon from "@material-ui/icons/Info";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

const useStyles = makeStyles({
  root: {
    width: 240,
    margin: "5px 10px 20px 10px",
    boxSizing: "border-box",
    position: "relative",
    padding: "1rem 0 2rem 0",
  },
  cardImg: {
    width: "5rem",
    heihgt: "5rem",
  },
  cardBtns: {
    position: "absolute",
    bottom: 0,
  },
  cardModal: {
    overflowX: "scroll",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 15,
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalInfos: {
    width: "90%",
    heihgt: "90%",
    margin: "auto",
    outline: "none",
    backgroundColor: "#f3f3f3",
  },
  gridItem: {
    padding: "0 10px",
  },
  modalInfoTitle: {
    fontWeight: 600,
  },
  infoClose: {
    margin: "0 0 10px 50%",
    transform: "translateX(-50%)",
  },
});

export default function ImgMediaCard({
  mobileData,
  addFav,
  removeFav,
  addCartItem,
  removeCartItem,
  index,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => setOpen(true)}>
        <img
          className={classes.cardImg}
          src={mobileData.basic.img}
          alt={mobileData.basic.name}
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {mobileData.basic.name}
          </Typography>
          <Typography variant="body1" component="p">
            Price: {mobileData.basic.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardBtns}>
        <Button onClick={() => setOpen(true)} size="small" color="primary">
          <InfoIcon />
        </Button>
        <Button size="small" color="primary">
          {mobileData.basic.isFav === false ? (
            <FavoriteBorderIcon onClick={() => addFav(mobileData)} />
          ) : (
            <FavoriteIcon onClick={() => removeFav(mobileData)} />
          )}
        </Button>
        <Button size="small" color="primary">
          {mobileData.basic.inCart === false ? (
            <AddShoppingCartIcon onClick={() => addCartItem(mobileData)} />
          ) : (
            <RemoveShoppingCartIcon
              onClick={() => removeCartItem(mobileData, index)}
            />
          )}
        </Button>
      </CardActions>

      {
        //////////////    MODAL   //////////////////
      }

      <Modal
        className={classes.cardModal}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Grid className={classes.modalInfos} container>
          <Grid item container className={classes.modalHeader}>
            <h2>{mobileData.basic.name}</h2>
          </Grid>

          <Grid item container xs={12} md={6} className={classes.gridItem}>
            <Grid item container>
              <h3>Body:</h3>
            </Grid>
            <Grid item container>
              <h4>Dimensions: {mobileData.body.dimensions}</h4>
            </Grid>
            <Grid item container>
              <h4>Weight: {mobileData.body.weight}g</h4>
            </Grid>
            <Grid item container>
              <h4>SIM: {mobileData.body.sim}</h4>
            </Grid>
          </Grid>

          <Grid item container xs={12} md={6} className={classes.gridItem}>
            <Grid item container>
              <h3>Display:</h3>
            </Grid>
            <Grid item container>
              <h4>Size: {mobileData.display.size}cm</h4>
            </Grid>
            <Grid item container>
              <h4>Resolution: {mobileData.display.resolution}</h4>
            </Grid>
          </Grid>

          <Grid item container xs={12} md={6} className={classes.gridItem}>
            <Grid item container>
              <h3>Platform:</h3>
            </Grid>
            <Grid item container>
              <h4>OS: {mobileData.platform.os}cm</h4>
            </Grid>
            <Grid item container>
              <h4>Memory: {mobileData.platform.memory}</h4>
            </Grid>
            <Grid item container>
              <h4>CPU: {mobileData.platform.cpu}</h4>
            </Grid>
          </Grid>

          <Grid item container xs={12} md={6} className={classes.gridItem}>
            <Grid item container>
              <h3>Misc:</h3>
            </Grid>
            <Grid item container>
              <h4>Colors: {mobileData.misc.colors}cm</h4>
            </Grid>
            <Grid item container>
              <h4>NFC: {mobileData.misc.nfc}</h4>
            </Grid>
            <Grid item container>
              <h4>Radio: {mobileData.misc.radio}</h4>
            </Grid>
          </Grid>
          <Button
            className={classes.infoClose}
            onClick={() => setOpen(false)}
            size="small"
            color="secondary"
            variant="contained"
          >
            Close
          </Button>
        </Grid>
      </Modal>
    </Card>
  );
}
