import React from "react";
import style from "./Header.module.css";
import phone from "../../assets/images/Main/phone.svg";

function Header() {
    return (
        <header className={style.header}>
            <div className={style.description}>
                <div className={style.event}>EventBiz<span>Pro</span></div>
                <div className={style.seminars}>Организация семинаров</div>
            </div>
            <nav className={style.menu}>
                <a href='#benefits'>Преимущества</a>
                <a href='#reviews'>Отзывы</a>
                <a href='#consultation'>Консультация</a>
                <a href='#cases'>Кейсы</a>
                <a href='#contacts'>Контакты</a>
            </nav>
            <div className={style.wrapperPhone}>
                <img src={phone} alt=""/>
            </div>
        </header>
    );
}

export default Header;
