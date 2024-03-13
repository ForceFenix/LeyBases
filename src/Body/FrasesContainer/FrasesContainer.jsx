import React from 'react';
import './FrasesContainer.css';
import belgrano from '../../assets/images/belgrano.jpg';

const FrasesContainer = () => {
    return (
        <>
            <section className='frases-container' >
                <div className="frases">
                    <div className="frases--foto">
                        <img src={belgrano} alt="juan manuel belgrano" />
                    </div>
                    <div className="frases--texto">
                        <h2>"Un pueblo culto nunca puede ser esclavizado"</h2>
                        <h3>- Juan Manuel Belgrano</h3>
                    </div>
                </div>
            </section>

        </>
    )
}

export { FrasesContainer }