import React from 'react';
import style from "./style.module.css";

const AboutContainer = () => {
    return (
        <div>
            <div className={style.aboutMeContainer} id="about">
                <div className={style.aboutMeTopDiv}>
                    <h2 className={style.aboutThree}>About <span>me</span></h2>
                    <h2 className={style.abouthTwo}>This is me!</h2>
                </div>
                <div className={style.aboutMeBottomDiv}>
                    <div className={style.aboutMeXperience}>
                        <div className={style.xperienceContentDiv}>
                            <h2>.10+</h2>
                            <p>Months Of Experience</p>
                        </div>
                        <div className={style.xperienceContentDiv}>
                            <h2>200+</h2>
                            <p>Working Hours</p>
                        </div>
                        <div className={style.xperienceContentDiv}>
                            <h2>25+</h2>
                            <p>Successfull Projects</p>
                        </div>
                        <div className={style.xperienceContentDiv}>
                            <h2>32+</h2>
                            <p>Lots of Repositories</p>
                        </div>
                    </div>
                    <div className={style.aboutMeBlog}>
                        <h2 className={style.aboutThree}>my name is <span>Nssien, Philip</span></h2>
                        <p className={style.aboutBlog}>
                            Prolific web developer with great experience ranging from frontend to backend and proven end-to-end development skills. I’m A Talented, Ambitious, And Self-Motivated Developer With A Solid
                            Technical Background And Useful Skills Ranging From Self-Discipline, Teamwork, And The Ability
                            To Work With Minimum Supervision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContainer;