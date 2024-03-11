import React from 'react';
import './Parrafo.css'

const Parrafo = () => {
    return (
        <>
            <section className='parrafos-container'>
                <div className="parrafo">
                    <h2>ARTÍCULO 573:</h2>
                    <p className='subtitulo'>Incorpórase como artículo 37 bis a la Ley N° 17.741 Texto ordenado 2001 el siguiente:</p>
                    <p className='cita'>
                        “ARTÍCULO 37 bis.- Los créditos serán otorgados a tasas de mercado.”
                        ARTÍCULO 574.- Sustitúyese el artículo 38 de la Ley N° 17.741 Texto ordenado 2001 por el siguiente:
                        “ARTÍCULO 38.- Mientras un crédito otorgado en virtud del inciso a) del artículo 21 no haya sido cancelado, el
                        beneficiario no podrá acceder a futuros créditos ni subsidios del Instituto hasta que la deuda quede íntegramente
                        saldada. Tampoco podrá participar en ninguna producción que reciba subsidios o créditos del Instituto, aunque no
                        fuera beneficiario de esos recursos en dichas producciones”
                    </p>
                </div>
            </section>
        </>
    )
}

export { Parrafo }