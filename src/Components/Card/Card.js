import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardHOME({ items }) {
  return (
    <Link to={`detail/${items.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={items.url}
            alt="producto"
            height="340"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {items.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {items.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
