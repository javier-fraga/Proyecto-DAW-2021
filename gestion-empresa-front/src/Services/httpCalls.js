
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

export const modificarEmpleado = ({id, nombre, apellidos, email, puesto, tienda}) => {
    let fetchParams = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
                'id': id,
                'nombre':  nombre,
                'apellidos': apellidos,
                'email': email,
                'puesto': puesto,
                'tienda': { 'id': tienda.id }
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

export const newTienda = ({ciudad, direccion, cp}) => {
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

export const modificarTienda = ({id,ciudad, direccion, cp}) => {
    let fetchParams = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
                'id': id,
                'ciudad':  ciudad,
                'direccion': direccion,
                'cp': cp,
        })
    }
    return fetch('http://localhost:8080/tienda',fetchParams)
}

export const borrarTienda = ({ id }) => {
    let fetchParams = {
        method: 'Delete',
    }
    return fetch('http://localhost:8080/tienda/' + id ,fetchParams)
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

export const newProducto = ({nombre, descripcion, precio}) => {
    let fetchParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            'nombre': nombre,
            'descripcion': descripcion,
            'precio': precio,
        })
    }
    return fetch('http://localhost:8080/producto',fetchParams)
}

export const modificarProducto = ({id, nombre, descripcion, precio}) => {
    let fetchParams = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
                'id': id,
                'nombre': nombre,
                'descripcion': descripcion,
                'precio': precio,
        })
    }
    return fetch('http://localhost:8080/producto',fetchParams)
}

export const getSolicitudes = () => {
    return fetch('http://localhost:8080/solicitud')
}

export const newSolicitud = (user,datos) => {
    let fetchParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            'empleado': { 'id': user.id},
            'tienda': { 'id': user.tienda.id},
            'producto': {'id': datos.id},
            'cantidad': datos.cantidad,
        })
    }
    return fetch('http://localhost:8080/solicitud',fetchParams)
}

export const newStocks = ( datos, producto ) => {

    datos.tienda.forEach( tienda  => {
        let fetchParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                'tienda': { 'id': tienda.id },
                'producto':{ 'id': producto.id} ,
            })
        }
        return fetch('http://localhost:8080/stock',fetchParams)
    });
}

export const newStock = (idProducto, idTienda) => {

    let fetchParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            'tienda': { 'id': idTienda },
            'producto':{ 'id': idProducto } ,
        })
    }
    return fetch('http://localhost:8080/stock',fetchParams)
    
}

export const borrarStocks = ( datos ) => {
    datos.tiendas.forEach( tienda  => {
        let fetchParams = {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                'tienda': { 'id': tienda.id },
                'producto': { 'id': datos.id} ,
            })
        }
        return fetch('http://localhost:8080/stock',fetchParams)
    });
}

export const borrarStock = ( idProducto, idTienda ) => {
    
        let fetchParams = {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                'tienda': { 'id': idTienda },
                'producto':{ 'id': idProducto } ,
            })
        }
        return fetch('http://localhost:8080/stock',fetchParams)
        
}



