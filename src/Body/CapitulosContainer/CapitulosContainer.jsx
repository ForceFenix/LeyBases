import React, { useState } from 'react';
import './CapitulosContainer.css'


const CapitulosContainer = () => {

    var [tituloH2, setTituloH2] = useState('');
    var [subtituloH3, setSubtituloH3] = useState('');
    var [capitulosListado, setCaptiulosListado] = useState([]);

    const titulosLista = [
        { //TITULO I
            id: 0,
            titulo: 'Título I',
            subtitulo: 'OBJETO, PRINCIPIOS RECTORES Y EMERGENCIA',
            capitulos: [{
                numero: 'I',
                nombre: 'OBJETO Y PRINCIPIOS RECTORES DE LA LEY'
            },
            {
                numero: 'II',
                nombre: 'DECLARACIÓN DE EMERGENCIA PÚBLICA'
            }]
        },
        { //TITULO II
            id: 1,
            titulo: 'Título II',
            subtitulo: 'REORGANIZACIÓN ADMINISTRATIVA',
            capitulos: [{
                numero: 'I',
                nombre: 'EMERGENCIA Y REORGANIZACIÓN ADMINISTRATIVA'
            },
            {
                numero: 'II',
                nombre: 'PRIVATIZACION DE EMPRESAS PÚBLICAS'
            },
            {
                numero: 'III',
                nombre: 'POLÍTICA DE CALIDAD REGULATORIA'
            },
            {
                numero: 'IV',
                nombre: 'CONTROL INTERNO DE LA ADMINISTRACIÓN'
            },
            {
                numero: 'V',
                nombre: 'OFICINA ANTICORRUPCIÓN'
            },
            {
                numero: 'VI',
                nombre: 'ACTIVIDAD POLÍTICA Y FUNCIÓN PÚBLICA'
            },
            {
                numero: 'VII',
                nombre: 'SOLUCIÓN DE CONTROVERSIAS'
            },
            {
                numero: 'VIII',
                nombre: 'CONTRATOS VIGENTES'
            },
            {
                numero: 'IX',
                nombre: 'MODIFICACIONES A LA LEY NACIONAL DE PROCEDIMIENTOS ADMINISTRATIVOS'
            }
            ]
        },
        { //TITULO III
            id: 2,
            titulo: 'Título III',
            subtitulo: 'REORGANIZACIÓN ECONÓMICA',
            capitulos: [{
                numero: 'I',
                nombre: 'DESREGULACIÓN ECONÓMICA'
            },
            {
                numero: 'II',
                nombre: 'LEY GENERAL DE SOCIEDADES N° 19.550'
            },
            {
                numero: 'III',
                nombre: 'MOVILIDAD DE LAS PRESTACIONES'
            },
            {
                numero: 'IV',
                nombre: 'OPERACIONES DE CRÉDITO PÚBLICO'
            },
            {
                numero: 'V',
                nombre: 'MEDIDAS FISCALES'
            },
            {
                numero: 'VI',
                nombre: 'PROMOCIÓN DEL EMPLEO REGISTRADO'
            },
            {
                numero: 'VII',
                nombre: 'CONSOLIDACIÓN DE DEUDA DEL SECTOR PÚBLICO NACIONAL'
            },
            {
                numero: 'VIII',
                nombre: 'BIOECONOMÍA'
            },
            {
                numero: 'IX',
                nombre: 'ENERGÍA'
            }
            ]
        },
        { //TITULO IV
            id: 3,
            titulo: 'Título IV',
            subtitulo: 'SEGURIDAD Y DEFENSA',
            capitulos: [{
                numero: 'I',
                nombre: 'SEGURIDAD INTERIOR'
            },
            {
                numero: 'II',
                nombre: 'DEFENSA NACIONAL'
            }
            ]
        },
        { //TITULO V
            id: 4,
            titulo: 'Título V',
            subtitulo: 'JUSTICIA',
            capitulos: [{
                numero: 'I',
                nombre: 'Honorarios Profesionales de Abogados, Procuradores y Auxiliares De La Justicia (Ley N° 27.423)'
            },
            {
                numero: 'II',
                nombre: 'Régimen de propiedad intelectual (Ley N° 11.723)'
            },
            {
                numero: 'III',
                nombre: 'Código Civil y Comercial (Ley N° 26.994)'
            },
            {
                numero: 'IV',
                nombre: 'RETIRO DE FONDOS DE DEPÓSITO JUDICIAL MEDIANTE ORDEN DEL JUEZ (Ley N° 9667)'
            },
            {
                numero: 'V',
                nombre: 'REGISTROS JUDICIALES UNIVERSALES (Decreto-Ley N° 3003/56)'
            },
            {
                numero: 'VI',
                nombre: 'PUBLICACIÓN DE EDICTOS (Decreto-Ley 16.005/57)'
            },
            {
                numero: 'VII',
                nombre: 'ARCHIVOS JUDICIALES DE LA CAPITAL FEDERAL (Decreto-Ley N° 6848/63)'
            },
            {
                numero: 'VIII',
                nombre: 'LEY DE DEPÓSITOS JUDICIALES DE LOS TRIBUNALES NACIONALES Y FEDERALES EN EL BANCO DE LA NACIÓN ARGENTINA. (Ley N° 26.764)'
            },
            {
                numero: 'IX',
                nombre: 'REGISTRO DE LA PROPIEDAD INMUEBLE'
            },
            {
                numero: 'X',
                nombre: 'TRASPASO DE LA JUSTICIA NACIONAL'
            },
            {
                numero: 'XI',
                nombre: 'INSPECCIÓN GENERAL DE JUSTICIA'
            },
            {
                numero: 'XII',
                nombre: 'PROCESOS SUCESORIOS NO CONTENCIOSOS'
            },
            {
                numero: 'XIII',
                nombre: 'JUICIO POR JURADOS'
            }
            ]
        }
        //COMPLETAR

    ]

    var contador = 0;

    const titulos = ['Titulo I', 'Titulo II', 'Titulo III', 'Titulo IV', 'Titulo V', 'Titulo VI', 'Titulo VII', 'Titulo VIII', 'Titulo IX', 'Titulo X']


    //la pestaña seleccionada, seteara en sus respectivos useState los siguientes elementos
    const seleccionCapitulo = index => {
        //creo la constante que contendra el una lista de un solo objeto, el cual sera el que coincida su id con el index de la pestaña seleccionada
        const tituloObjeto = titulosLista.filter(element => { return element.id == index });
        //seteo el titulo con ayuda de la constante de arriba. Siendo que el metodo filter devuelve un listado
        //es pertinente declarar el [0] en el index de la constante "tituloObjeto"
        setTituloH2(tituloObjeto[0].titulo);
        setSubtituloH3(tituloObjeto[0].subtitulo);
        setCaptiulosListado(tituloObjeto[0].capitulos);
    }


    return (
        <>
            <section className='indice-container'>

                <div className="ul-container">
                    <ul className='titulos-container'>
                        {
                            // intercalo los colores de las pestañas generadas a partir de mapear la lista "titulos[]"
                            titulos.map((element, index) => {
                                if ((index % 2) == 0) { 
                                    return (<li className='pestana oscura' >
                                        <button className='pestana oscura' value={index} onClick={(e) => seleccionCapitulo(e.target.value)}>
                                            {element}
                                        </button>
                                    </li>)
                                } else {
                                    return (<li className='pestana clara' >
                                        <button className='pestana clara' value={index} onClick={(e) => seleccionCapitulo(e.target.value)}>
                                            {element}
                                        </button>
                                    </li>)
                                }
                            }
                            )
                        }
                    </ul>
                    <div className="titulo-seleecionado">
                        <h2>{tituloH2}</h2>
                        <h3>{subtituloH3}</h3>
                    </div>
                    <ul className='capitulos-container'>
                        {
                            //aca utilizo la lista de objetos seteada en el state "capitulosListado", para generar un map de divs
                            // a su vez, hago uso de la variable "contador" para que en un bucle de 3, vaya intercalando el color del div
                            capitulosListado.map((element) => {
                                if (contador == 0) {
                                    contador++;
                                    return (
                                        <div className="capitulo-li">
                                            <li className='capitulos-style1'>{element.numero}</li>
                                            <span>{element.nombre}</span>
                                        </div>
                                    )
                                }
                                else if (contador == 1) {
                                    contador++;
                                    return (
                                        <div className="capitulo-li">
                                            <li className='capitulos-style2'>{element.numero}</li>
                                            <span>{element.nombre}</span>
                                        </div>
                                    )
                                } else {
                                    contador = 0;
                                    return (
                                        <div className="capitulo-li">
                                            <li className='capitulos-style3'>{element.numero}</li>
                                            <span>{element.nombre}</span>
                                        </div>
                                    )
                                }
                            }
                            )
                        }
                    </ul>
                </div>

            </section>
        </>
    )
}

export { CapitulosContainer }