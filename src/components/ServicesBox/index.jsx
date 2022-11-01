import React from 'react';
import style from "./style.module.css";

const Services = () => {
    return (
        <div>
            <div className={style.serviceText} id='services'>
                <h3 className={style.serviceSmallText}>my <span>services</span></h3>
                <h2 className={style.servicebigtext}>
                    what i do
                </h2>
            </div>
            <div className={style.body}>
                <div className={style.container}>
                    <div className={style.card}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={style.content}>
                            <h2 className={style.h2}>01</h2>
                            <h3>FrontEnd Development</h3>
                            <p>
                                Developed efficient
                                and maintainable website with credible user
                                interface
                            </p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={style.content}>
                            <h2 className={style.h2}>02</h2>
                            <h3>BackEnd Development</h3>
                            <p>
                                Develop useful, usable and valid node.js interface 
                                for computing frontend projects.
                                Have a great knowledge about backend..
                            </p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={style.content}>
                            <h2 className={style.h2}>03</h2>
                            <h3>Solidity Starter</h3>
                            <p>
                                Started learning solidity.
                                Soon to become a blockchain engineer with 
                                great and effective solidity skills.. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;