import React from 'react'
import './Nosotros.scss'



const Nosotros = ({ extras }) => {
    return (
        <>
            <div className="nosotros">







                <div className="nosotros__image-container">
                    <img src="./public/img/aeropuerto.webp" className="nosotros__image_1" />
                    {/* <img src={extras.foto1} className="nosotros__image" /> */}
                </div>

                <div className="nosotros__text">
                    <h1>¿QUIENES SOMOS?</h1>
                    <div className='separadores'></div>

                    <p className="nosotros__text-parrafo">
                        Somos una empresa especializada en la importación y venta de tecnologia. Nos esforzamos por ofrecer una amplia cartera de los ultimos productos que salen al mercado.
                        <div className='separadores'></div>
                        Somos una empresa que fue fundada hace 5 años a partir de poder tener acceso a lo último en celulares que no ingresaban al pais. Luego ante la alta demanda de gadgets, decimos ampliar nuestra cartera de productos como fundas, vidrios templados y auriculares. Con el tiempo, hemos expandido nuestro negocio empresas para ofrecerles una amplia gama de productos para que puedan ofrecerlos en sus comercios.
                        <div className='separadores'></div>
                        Nosotros, valoramos la calidad, la sostenibilidad y el servicio al cliente. Trabajamos con proveedores locales y utilizamos un sistema de trackeo personalizado, desde que el producto llega a nuestro warehouse pasando por nuestro centro de distribución en Buenos Aires, hasta tu domicilio.
                        <div className='separadores'></div>
                        Nuestra visión es convertirnos en un referente en la venta de tecnologia a nivel nacional, ofreciendo un servicio excepcional y productos de calidad con garantia.
                        <div className='separadores'></div>
                        ¡Estamos siempre dispuestos a ayudarte! Puedes contactarnos a través de nuestro correo electrónico, teléfono o cualquiera de nuestras redes sociales.
                        <div className='separadores'></div>
                    </p>
                </div>


                <div className="nosotros__image-container">
                    <img src="/img/compras.webp" className="nosotros__image_2" />
                    {/* <img src={extras.foto1} className="nosotros__image" /> */}
                </div>

            </div>
        </ >




    )
}

export default Nosotros