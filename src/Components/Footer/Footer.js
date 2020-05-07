import React from "react";
import style from "./Footer.module.css";
import FooterLinks from "./FooterLinks/FooterLinks";

function Footer() {
    return (
        <div className={style.wrapperFooter}>
            <div className={style.firstSection}><span className={style.eventBiz}>EventBiz</span><span
                className={style.pro}>Pro</span>
                <span className={style.seminars}>Организация семинаров</span>
            </div>
            <div className={style.secondSection}><a href="#">Политика конфиденциальности</a></div>
            <div className={style.thirdSection}><a href="#">Соглашение на обработку персональных данных</a></div>
            <div>
                <div className={style.benefits}><a href='#benefits'>Преимущества</a></div>
                <div className={style.reviews}><a href='#reviews'>Отзывы</a></div>
                <div className={style.consultation}><a href='#consultation'>Консультация</a></div>
                <div className={style.cases}><a href='#cases'> Кейсы</a></div>
                <div className={style.contacts}><a href='#contacts'> Контакты</a></div>
                <div className={style.lineFooter}/>
            </div>
            <FooterLinks/>
        </div>
    );
}

export default Footer;
