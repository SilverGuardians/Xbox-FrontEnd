import React, { useState } from "react";
import "./style.css";
// import { Link } from 'react-router-dom';
import { FaPlus, FaSearch } from "react-icons/fa";
import CardProps from "./data";
import Card from "./card";
import GameInfo from "../../../pages/gameinfo";
import { Link } from "react-router-dom";

const GamesList = () => {

  return (
    <>
      <div className="games-container">
        <div className="store-title">
          <div className="search">
            <div className="search-icon">
              <FaSearch />
            </div>
            <input type="test" placeholder="Buscar" />
          </div>
          <div></div>
        </div>
        <div className="games-content">
          <div className="games-box-plus">
            <p>Jogos Exclusivos</p>
            <div>
              <p>Mostrar Tudo</p>
              <FaPlus className="icon" />
            </div>
          </div>
          {CardProps.map((item) => {
            if (item.categoria === "Exclusivos") {
              return (
                <Link to={`/gameinfo/${item.id}`}>
                  <Card key={item.nome} name={item.nome} image={item.image} />
                </Link>
              );
            }
          })}
        </div>
        <div className="games-content">
          <div className="games-box-plus">
            <p>RPG</p>
            <div>
              <p>Mostrar Tudo</p>
              <FaPlus className="icon" />
            </div>
          </div>
          {CardProps.map((item) => {
            if (item.categoria === "RPG") {
              return (
                <Link to={`/gameinfo/${item.id}`}>
                  <Card name={item.nome} image={item.image} />
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default GamesList;
