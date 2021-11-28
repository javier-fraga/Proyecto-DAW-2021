
export const getEmpleado =  (email) => {
  return fetch('http://localhost:8080/empleado/get?email=' + email)
}

export const getEmpleados = () => {
    return fetch('http://localhost:8080/empleado')
}

export const newEmpleado = ({nombre, apellidos, email, puesto, tienda}) => {
    let fetchParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
                'nombre':  nombre,
                'apellidos': apellidos,
                'email': email,
                'puesto': puesto,
                'tienda': { 'id': tienda.id }
        })
    }
    return fetch('http://localhost:8080/empleado',fetchParams)
}

export const modificarEmpleado = ({id, nombre, apellidos, email, puesto, idTienda}) => {
    let fetchParams = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
                'id': id,
                'nombre':  nombre,
                'apellidos': apellidos,
                'email': email,
                'puesto': puesto,
                'tienda': { 'id': idTienda }
        })
    }
    return fetch('http://localhost:8080/empleado',fetchParams)
}

export const borrarEmpleado = ({ id }) => {
    let fetchParams = {
        method: 'Delete',
    }
    return fetch('http://localhost:8080/empleado/' + id ,fetchParams)
}

export const getTienda = (id) => {
    return fetch('http://localhost:8080/tienda/?idTienda=' + id)  
}

export const getTiendas = () => {
    return fetch('http://localhost:8080/tienda')  
}

export const newTienda = (ciudad, direccion, cp) => {
    let fetchParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            'ciudad': ciudad,
            'direccion': direccion,
            'cp': cp
        })
    }
    return fetch('http://localhost:8080/tienda',fetchParams)
}

export const getProductosByTienda = (id) => {
    return fetch('http://localhost:8080/producto/' + id)  
}

export const getProductos = () => {
    return fetch('http://localhost:8080/producto')
}

export const borrarProducto = ({ id }) => {
    let fetchParams = {
        method: 'Delete',
    }
    return fetch('http://localhost:8080/producto/' + id ,fetchParams)
}

export const newProducto = ({nombre, descripcion, precio, tienda}) => {
    let fetchParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            'nombre': nombre,
            'descripcion': descripcion,
            'precio': precio,
            'tienda': { 'id': tienda.id}
        })
    }
    return fetch('http://localhost:8080/producto',fetchParams)
}

export const modificarProducto = ({id, nombre, descripcion, precio, tienda}) => {
    let fetchParams = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
                'id': id,
                'nombre': nombre,
                'descripcion': descripcion,
                'precio': precio,
                'tienda': { 'id': tienda.id}
        })
    }
    return fetch('http://localhost:8080/producto',fetchParams)
}

export const getSolicitudes = () => {
    return fetch('http://localhost:8080/solicitud')
}

export const newSolicitud = () => {
    
}



