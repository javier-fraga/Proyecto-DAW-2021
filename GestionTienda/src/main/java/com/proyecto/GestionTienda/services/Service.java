package com.proyecto.GestionTienda.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.proyecto.GestionTienda.clases.*;
import com.proyecto.GestionTienda.repositories.EmpleadoRepository;
import com.proyecto.GestionTienda.repositories.ProductoRepository;
import com.proyecto.GestionTienda.repositories.SolicitudRepository;
import com.proyecto.GestionTienda.repositories.TiendaRepository;

public class Service {

	@Autowired
	TiendaRepository tiendaRepository;
	
	@Autowired
	ProductoRepository productoRepository;
	
	@Autowired
	EmpleadoRepository empleadoRepository;
	
	@Autowired
	SolicitudRepository solicitudRepository;
	
	public Empleado getEmpleado(Empleado empleado) {
		empleado.setTienda(tiendaRepository.getById(empleado.getTienda().getId()));
		return empleado; 
	}
}
