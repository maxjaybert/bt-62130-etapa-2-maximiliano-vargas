import React, { useContext, useEffect, useState } from 'react'
import ProductoContext from '../contexts/ProductoContext'

const formInicial = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    detalles: '',
    foto: '',
    envio: false,
}

const Formulario = ({ productoAEditar, setProductoAEditar }) => {


    const [form, setForm] = useState(formInicial)

    const { crearProductoContext, actualizarProductoContext } = useContext(ProductoContext)

    useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInicial)

    }, [productoAEditar, setProductoAEditar])



    const handleChange = (e) => {
        const { type, name, checked, value } = e.target
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault() //detener el comportamiento del formulario
        try {
            if (form.id === null) {
                await crearProductoContext(form)
            } else {
                await actualizarProductoContext(form)
            }
            handleReset()
        } catch (error) {
            console.error('ocurrio un error en el handleSubmit', error)
        }
    }

    const handleReset = () => {
        setForm(formInicial)
        setProductoAEditar(null)
    }

    return (
        <>
            <h3 className='form-agregar'>{productoAEditar ? 'Editando' : 'Agregando'}</h3>

            <form className='formulario-agregar' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="lbl-nombre">Nombre</label>
                    <input type="text" name="nombre" id="lbl-nombre" value={form.nombre} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-precio">Precio</label>
                    <input type="text" name="precio" id="lbl-precio" value={form.precio} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-stock">Stock</label>
                    <input type="text" name="stock" id="lbl-stock" value={form.stock} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-marca">Marca</label>
                    <input type="text" name="marca" id="lbl-marca" value={form.marca} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-categoria">Categoria</label>
                    <input type="text" name="categoria" id="lbl-categoria" value={form.categoria} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-detalles">Detalles</label>
                    <input type="text" name="detalles" id="lbl-detalles" vlue={form.detalles} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-foto">Foto</label>
                    <input type="text" name="foto" id="lbl-foto" valu={form.foto} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lbl-envio">Envio</label>
                    <input type="checkbox" name="envio" id="lbl-envio" checked={form.envio} onChange={handleChange} />
                </div>
                <div className='form-botones'>
                    <button type='submit'>Guardar</button>
                    <button type='reset' onClick={handleReset}>Limpiar</button>
                </div>
            </form>
        </>
    )
}

export default Formulario