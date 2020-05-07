import React from "react";
import style from "./Main.module.css";
import earth from "../assets/images/Main/earth.svg"
import Header from "./Header/Header";
import Description from "./Description/Description";
import Benefits from "./Benefits/Benefits";
import rocket from "../assets/images/Main/rocket.svg";

function Main() {
    return (
        <div className={style.wrapperMain}>
            <img className={style.earthImg} src={earth} alt="img_earth"/>
            <div className={style.wrapper}>
            </div>
            <Header/>
            <Description/>
            <Benefits/>
            <img className={style.rocket} src={rocket} alt="rocket"/>
            <div className={style.lineMain}/>
        </div>
    );
}

export default Main;
