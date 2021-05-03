import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ReactPlayer from "react-player";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    marginLeft: 25,
    marginTop: 20,
  },
  image: {
    width: "100%",
    borderTopRadius: 5,
  },
  WhatsAppIcon:{
    color: 'green'
  }
}));

const OneCard = (props) => {
  const classes = useStyles();
  const video = {
    name: props.name,
    url: props.url,
    image: props.image,
  };
  const [open, setopen] = useState(false);
  const [liked, setliked] = useState(false)
  return (
    <Card className={classes.root} raised={true}>
      <CardMedia className={classes.image}>
        {/* <img
          src={video.image}
          alt="image unavailable"
          className={classes.image}
        /> */}
        <ReactPlayer width="100%" height="100%" controls url={video.url} />
      </CardMedia>
      <CardContent>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          noWrap={true}
        >
          {video.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>{setliked(!liked)}}>
          <FavoriteIcon color={!liked?("default "):("secondary")}/>
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() => {
            setopen(true);
          }}
        >
          <ShareIcon />
        </IconButton>
        <Dialog
          open={open}
          onClose={() => {
            setopen(false);
          }}
        >
          <Box className={classes.share}>
            <IconButton>
              <a  target="_blank" href="https://www.facebook.com">
                <FacebookIcon fontSize="large" color="primary" />
              </a>
            </IconButton>

            <IconButton>
              <a  target="_blank" href="www.whatsapp.com">
                <WhatsAppIcon fontSize="large" className={classes.WhatsAppIcon} />
              </a>
            </IconButton>
          </Box>
        </Dialog>
      </CardActions>
    </Card>
  );
};

export default OneCard;
