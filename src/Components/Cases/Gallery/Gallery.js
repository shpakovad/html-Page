import React from "react";
import style from "./Gallery.module.css";
import Slider from "../Slider/Slider";

function Gallery() {
    return (<>
            <section className={style.menu}>
                <div className={style.wrapperLink_1}><a href="#" className={style.link_1}>Все мероприятия</a></div>
                <div className={style.wrapperLink_2}><a href="#" className={style.link}>Конференции</a></div>
                <div className={style.wrapperLink_3}><a href="#" className={style.link}>Бизнес завтраки</a></div>
                <div className={style.wrapperLink_4}><a href="#" className={style.link}>Коучинги и тренинги</a></div>
                <div className={style.wrapperLink_5}><a href="#" className={style.link}>Тимбилдинги и корпоративы</a>
                </div>
            </section>
            <div className={style.gallery}>
                <div className={style.wrapperCards}>
                    <div className={style.union}>
                        <div className={style.cards}>
                            <div className={style.borderLink}/>
                            <Slider/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
