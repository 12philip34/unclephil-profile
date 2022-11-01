import React from 'react';
import style from "./style.module.css";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const AnimatedBar = ({ setIsOpen }) => {
    const cancleButton = {
        color: '#fff',
        fontSize: '50px',
        cursor: 'pointer'
    }

    return (
        <div>
            <div className={style.dimentionNavbarContainer}>
                <button className={style.cancelBtn} onClick={() => setIsOpen(false)}>
                    <CloseRoundedIcon style={cancleButton} />
                </button>
                <div className={style.dimentionNavbar}>
                    <ul>
                        <li style={{ zIndex: "5" }}><a href="#home">Home</a></li>
                        <li style={{ zIndex: "4" }}><a href="#services">Services</a></li>
                        <li style={{ zIndex: "3" }}><a href="#portfolio">Sites</a></li>
                        <li style={{ zIndex: "2" }}><a href="#about">about</a></li>
                        <li style={{ zIndex: "1" }} className={style.lastLi}><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AnimatedBar;