import React, { useState } from 'react';
import style from "./style.module.css";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AnimatedBar from '../Animatedbar';

const SideComponent = () => {
    const meunBar = {
        color: 'white'
    }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className={style.navbarContainer}>
                <span className={style.flexStart}>
                    <div className={style.logo}>
                        <h3>UnclePhil</h3>
                    </div>
                </span>
                <span className={style.flexEnd}>
                    <div className={style.navbarToggle}>
                        <button onClick={() => setIsOpen(true)}>
                            <MenuOpenIcon style={meunBar} />
                        </button>
                    </div>
                </span>
            </div>
            {isOpen && <AnimatedBar setIsOpen={setIsOpen} />}
        </div>
    )
}

export default SideComponent;