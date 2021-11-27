
export const getEmpleado =  (email) => {
  return fetch('http://localhost:8080/empleado/get?email=' + email)
}

export const getEmpleados = () => {
    return fetch('http://localhost:8080/empleado')
}

export const newEmpleado = (nombre, apellidos, email, puesto, idTienda) => {
    let fetchParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
                'nombre':  nombre,
                'apellidos': apellidos,
                'email': email,
                'puesto': puesto,
                'tienda': { 'id': idTienda }
        })
    }
    return fetch('http://localhost:8080/tienda',fetchParams)
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

export const getSolicitudes = () => {
    return fetch('http://localhost:8080/solicitud')
}

export const newSolicitud = () => {
    
}



