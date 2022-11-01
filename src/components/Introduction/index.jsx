import React from 'react';
import style from "./style.module.css";
import IntroImage from '../../images/intro.jpg';

const Introduction = () => {
  return (
    <div>
       <div className={style.introductionContainer}>
          <div className={style.introductionContentBox}>
            <h1 className={style.headerSpan}>
              Uncle <span>Phil</span>
            </h1>
            <img src={IntroImage} alt="IntroImage" className={style.introImage} />
          </div>
       </div>
    </div>
  )
}

export default Introduction