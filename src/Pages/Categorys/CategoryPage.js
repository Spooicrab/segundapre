import React from "react";
import test from "../../Components/ItemListContainer/test.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ItemlistContainer = () => {
  const filteredItems = test.filter((item) => item.category === "gaseosa");

  return (
    <div className="card">
      {filteredItems.map((item) => (
        <div className="tarjetas" key={item.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={item.url}
                alt="producto"
                height="340"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ItemlistContainer;
