import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import './ReferenciaContainer.css'

const ReferenciaContainer = () => {
    const [verMas, setVerMas] = useState(false)
    const btnVerMas = {
        hidden: {
            width: "0px",
            transition: {
                duration: 1,
                type: "easInOut"
            }

        },
        show: {
            width: "100%",
            transition: {
                duration: 1,
            }
        },
        exit: {
            width: "0",
            transition: {
                duration: .9,
            }
        }
    }

    const btnClass = () =>{
        if(verMas == true) {
        return "referencia-btn ver-mas"
        }
        else{
            return "referencia-btn ver-menos"
        }

    }


    const paragrafe = {
        hidden: {
            height: "0px",
            transition: {
                duration: 1,
                type: "easInOut"
            }

        },
        show: {
            height: "100%",
            transition: {
                duration: 1,
            }
        },
        exit: {
            height: "0",
            transition: {
                duration: .9,
            }
        }
    }

    return (
        <>
            <div className="referencia-container">
                <button className={btnClass()} onClick={() => verMas(setVerMas(!verMas))}>
                    Ver leyes afectadas
                </button>
                <AnimatePresence>
                {
                    verMas && 
                        <motion.p className='p-motion'
                            variants={paragrafe}
                            initial='hidden'
                            animate='show'
                            exit="exit"
                        ><p className='p-motion__contenido'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut, doloremque mollitia dicta ipsam quisquam, assumenda cum sequi fugit fugiat expedita blanditiis quam! Libero illum impedit, aliquam tenetur placeat accusamus?
                            Quaerat enim ducimus eius voluptates architecto unde, tenetur, ex id magnam totam commodi dignissimos officia quam animi at laudantium. Quisquam voluptate quas nihil exercitationem vel reprehenderit ipsam quod consectetur dolorem!
                            Voluptas perspiciatis dolores eos nulla, praesentium reprehenderit. Eius impedit ducimus aliquam provident reprehenderit, magni placeat eaque quidem cumque, sit laboriosam nobis quis. Illo, enim doloremque esse at earum blanditiis! Soluta.
                        </p>
                        </motion.p>
                }
                    </AnimatePresence>

            </div>
        </>
    )
}

export { ReferenciaContainer }