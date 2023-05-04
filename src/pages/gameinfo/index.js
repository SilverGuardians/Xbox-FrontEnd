import React from "react";
import "./style.css";
// import GamesList from '../../components/storeComponents/gamesList'
// import { FaSearch } from 'react-icons/fa'
import NavbarBack from "../../components/navbarBack";
import HeaderInfo from "../../components/infoComponent/headerinfo";
import ImgInfo from "../../components/infoComponent/imginfo";
import { useParams } from "react-router-dom";
import CardProps from "../../components/storeComponents/gamesList/data";

const GameInfo = (data) => {
  const { id } = useParams();
  let info = CardProps.filter(item => {
    return item.id == id
  })
  return (
    <>
      <NavbarBack />
      <main>
        <HeaderInfo info={info}/>
        <hr></hr>
      </main>

      <main>{/* <ImgInfo /> */}</main>
    </>
  );
};

export default GameInfo;
