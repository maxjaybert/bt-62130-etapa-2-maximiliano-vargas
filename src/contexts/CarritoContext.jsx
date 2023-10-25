import React, { createContext, useEffect, useState } from 'react'
import { del, get, post, put } from '../utils/http'
import ProductoContext from './ProductoContext'


/* Creando CONTEXTO */
/* 1er -> Creación del contexto */
const CarritoContext = createContext()

/* 2do -> El armado del Provider */
const CarritoProvider = ({ children }) => {

    const agregarCarritoContext = (product) => {

    }

    const eliminarCarritoContext = (id) => {

    }

    const data = {}

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export { ProductoProvider }

export default ProductoContext