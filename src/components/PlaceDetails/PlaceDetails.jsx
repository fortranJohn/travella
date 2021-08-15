import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  CardActions,
  Button,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://cache.marriott.com/marriottassets/marriott/LOSSI/lossi-the-italian-7525-hor-feat.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" className={classes.placeName}>
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            {" "}
            Out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award, i) => (
          <Box my={1} display="flex" justifyContent="space-between" key={i}>
            <img src={award.images.small} alt={award.display_name} />
            <Typography gutterBottom variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            variant="subtitle2"
            color="textSecondary"
            gutterBottom
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography
            variant="subtitle2"
            color="textSecondary"
            gutterBottom
            className={classes.spacing}
          >
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
