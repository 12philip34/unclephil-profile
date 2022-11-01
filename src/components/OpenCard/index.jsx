import React from 'react';
import style from './style.module.css';
import image from '../../images/herobg.png';
import image2 from '../../images/front.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhilipCv from '../../images/PhilipNssienCV.pdf'

const Opening = () => {
    return (
        <div className={style.body} id='home'>
            <div className={style.card}>
                <div className={style.imgBox}>
                    <img src={image} alt="hero-image.png" />
                    <img src={image2} alt="hero-image2.png" />
                </div>
                <div className={style.details}>
                    <div className={style.content}>
                        <div className={style.textArea}>
                            <h2>Meet</h2>
                            <h3>Nssien, philip</h3>
                            <p>
                                Prolific web developer with great
                                experience ranging from frontend to backend
                                and proven end-to-end development skills.
                            </p>
                            <a href={PhilipCv} className={style.titleButton} download="Philip_cv">
                                Me Resume
                            </a>
                            <span className={style.linkIcon}>
                                <h4> check me:</h4>
                                <a href='https://www.facebook.com/Nssienphilip/' target='_blank'>
                                    <FacebookIcon className={style.classLinkicon} />
                                </a>
                                 <a href='https://twitter.com/Nssienphilip' target='_blank'>
                                        <TwitterIcon className={style.classLinkicon} />
                                 </a>
                                 <a href='https://github.com/12philip34' target='_blank'>
                                      <GitHubIcon className={style.classLinkicon} />
                                 </a>
                                 <a href='https://www.linkedin.com/in/philip-nssien/' target='_blank'>
                                      <LinkedInIcon className={style.classLinkicon} />
                                 </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opening