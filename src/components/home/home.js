import React from "react";

import { Card } from "./card";
import "./home.css";
import banner1 from "./imgs/container image 1.jpg";
import banner2 from "./imgs/container image 2.jpg";
import banner3 from "./imgs/conatiner image 3.jpg";

var defaultCard = {
  hint: "Complex geometric shapes",
  title: "Complex geometric shapes made of triangles using multiple colors.",
  content:
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur,adipisci velit.Loreum Ispum dolor ist buin chat duo smark.",
};

export const Home = () => {
  return (
    <div className="container">
      <Card
        banner={banner1}
        hint={defaultCard.hint}
        title={defaultCard.title}
        content={defaultCard.content}
      />
      <Card
        banner={banner2}
        hint={defaultCard.hint}
        title={defaultCard.title}
        content={defaultCard.content}
      />
      <Card
        banner={banner3}
        hint={defaultCard.hint}
        title={defaultCard.title}
        content={defaultCard.content}
      />
    </div>
  );
};
