import React from 'react';
import './CapitulosContainer.css'


const CapitulosContainer = () => {

    const titulos = ['Titulo I', 'Titulo II', 'Titulo III', 'Titulo IV', 'Titulo V', 'Titulo VI', 'Titulo VII', 'Titulo VIII', 'Titulo IX', 'Titulo X']

    const colorIntercalado = (lista) => { //recibe un array
        for (let i; i > lista.length; i++) { //por cada elemento del array, suma 1
            if ((i % 2) == 0) { //si es par hace lo siguiente
                return (<li className='pestana oscura'>{array[i]}</li>)
            } else {
                return (<li className='pestana clara'>{array[i]}</li>)
            }
        }
    }

    return (
        <>
            <section className='indice-container'>

                <div className="ul-container">
                    <ul className='titulos-container'>
                        {
                            titulos.map((element, index) => {
                                if ((index % 2) == 0) { //si es par hace lo siguiente
                                    return (<li className='pestana oscura'>{element}</li>)
                                } else {
                                    return (<li className='pestana clara'>{element}</li>)
                                }
                            }
                            )
                        }
                    </ul>
                    <div className="titulo-seleecionado">
                        <h2>TITULO I</h2>
                        <h3>OBJETO, PRINCIPIOS RECTORES Y EMERGENCIA</h3>
                    </div>
                    <ul className='capitulos-container'>
                        <div className="capitulo-li">
                            <li className='capitulos-style1'>I</li>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="capitulo-li">
                            <li className='capitulos-style2'>II</li>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="capitulo-li">
                            <li className='capitulos-style3'>III</li>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="capitulo-li">
                            <li className='capitulos-style1'>IV</li>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="capitulo-li">
                            <li className='capitulos-style2'>V</li>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="capitulo-li">
                            <li className='capitulos-style3'>I</li>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="capitulo-li">
                            <li className='capitulos-style1'>I</li>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>

                    </ul>
                </div>

            </section>
        </>
    )
}

export { CapitulosContainer }