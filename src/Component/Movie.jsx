import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Movie = (props) => {
  return (
    <Card sx={{ width: 250, marginBottom: 6, marginRight: 2 }} >
        <CardActionArea onClick={() => alert()}>
          <CardMedia
            component="img"
            height="180"
            image={props.Poster}
            alt={props.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {props.Title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
    </Card>
  );
};
export default Movie;
