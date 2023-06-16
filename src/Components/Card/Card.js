import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

/////////////////////////////////////////////
export default function Cardcat({ items }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={items.url} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {items.name} || Precio: {items.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver
        </Button>
      </CardActions>
    </Card>
  );
}
