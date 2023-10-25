import React from 'react'
import './Card.scss'


const Card = ({ producto }) => {
    // console.log(producto)

    const handleClick = (producto) => {
        console.log(producto)
    }

    return (
        <>


            <a href="#" className="card"> {/* <!-- card --> */}
                <article className="card__article">
                    <div className="card__image-container">
                        <img src={producto.foto} alt={producto.nombre} className="card__image" />
                    </div>
                    <div className="card__content">
                        <h2 className="card__heading">{producto.nombre}</h2>
                        <div className="card__description">
                            <p>{producto.detalles}</p>
                        </div>
                        <button onClick={() => handleClick(producto)} className='boton-agregar'>Agregar</button>
                    </div>
                </article>
            </a> {/* <!-- card -->
*/}
        </>


    )
}

export default Card