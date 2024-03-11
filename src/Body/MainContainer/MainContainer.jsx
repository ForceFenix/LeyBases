import React from 'react';
import './MainContainer.css';
import congreso from '../../assets/images/congreso.jpg'

const MainContainer = () => {



    return(
        <>
        <main>
            <div className="main-container">
                <div className="images">
                    <img src={congreso} alt="" />
                </div>
            </div>
        </main>
        </>
    )
}

export { MainContainer }