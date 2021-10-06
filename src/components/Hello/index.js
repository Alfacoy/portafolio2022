import React from "react";
import useThemeContext from '@theme/hooks/useThemeContext';
import cv from '@site/static/curriculum.pdf';
import clsx from "clsx";

// IMAGES
import DarkTheme from '@site/static/img/header/night.png'
import LightTheme from '@site/static/img/header/day.png'

// STYLES
import style from './style.module.css';

const Hello = () => {
    const {isDarkTheme} = useThemeContext();

    return (
        <header className={`container`}>
            <section className={style.header}>
                <article className={`col`}>
                    <div>
                        <h1 className={`${style.header__title} ${!isDarkTheme ? style.header__title_night : ''}`}>Brian Durand</h1>
                        <h2 className={style.header__subtitle}>Frontend Developer</h2>
                    </div>
    
                    <div>
                        <p className={style.header__paragraph}>
                            Actualmente vivo en <b>Buenos Aires</b> (Argentina) y me encuentro
                            trabajando para <b>Integrity Seguros</b> como <strong className={style.header__paragraph_highlight_blue}>Analista Programador Junior</strong>.
                        </p>
    
                        <p className={style.header__paragraph}>
                            Por la noche, curso en el <b>Instituto Técnologico Beltrán</b> el segundo año de la carrera de <strong className={style.header__paragraph_highlight_blue}>Analista en Sistemas</strong>.
                        </p>
                        
                        <a href={cv} target="_blank" rel="noreferrer noopener" aria-label="Curriculum" className={isDarkTheme ? style.header__color_light : style.header__color_dark}>
                            <span className={`${style.header__button} ${!isDarkTheme ? style.header__button_night : ''}`}>
                                Currículum
                            </span>
                        </a>
                    </div>
                </article>
                <article className={`col`}>
                    <img src={isDarkTheme ? DarkTheme : LightTheme} alt="Imágen en versión obscura." className={style.header__image} />
                </article>
            </section>
        </header>
    )
}

export default Hello;