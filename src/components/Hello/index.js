import React from "react";
import clsx from "clsx";
import style from './style.module.css';
import DarkTheme from '@site/static/img/header/night.png'
import LightTheme from '@site/static/img/header/day.png'
import useThemeContext from '@theme/hooks/useThemeContext';

const Hello = () => {
    const {isDarkTheme} = useThemeContext();

    return (
        <header className={`container`}>
            <section className={clsx(` row`,style.header)}>
                <article className={`col`}>
                    <div>
                        <h1 className={`${style.header__title}`}>Brian Durand</h1>
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
    
                        <a className={`${style.header__button}`} href="./curriculum.pdf" target="_blank">Currículum</a>
                    </div>
                </article>
                <article className={`col`}>
                    <img src={isDarkTheme ? DarkTheme : LightTheme} alt="Imágen en versión obscura." />
                </article>
            </section>
        </header>
    )
}

export default Hello;