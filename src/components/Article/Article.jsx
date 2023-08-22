import React, { useState } from "react";
import styles from "./style.module.css";
import Body from "../UI/Body/Body";
import Navbar from "../UI/Navbar/Navbar";
import CardArticle from "./components/CardArticle";
import { imagenunez } from "../../assets/image";

const Article = () => {
  const Article = {
    id: "a1",
    image: imagenunez,
    title: "darwin nunez",
    desc: "Núñez came through Peñarol's youth academy, being promoted to the first team in 2017. In August 2019, he joined Spanish Segunda División club Almería for a club record fee. Benfica signed him in 2020 for a club-record transfer worth €24 million, the most expensive signing in Portuguese football history.",
  };
  return (
    <Body>
      <Navbar title="article" />
      <CardArticle
        key={Article.id}
        image={Article.image}
        title={Article.title}
        desc={Article.desc}
      />
    </Body>
  );
};

export default Article;
