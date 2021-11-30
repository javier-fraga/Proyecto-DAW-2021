package com.proyecto.GestionTienda.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.proyecto.GestionTienda.clases.*;
import com.proyecto.GestionTienda.repositories.EmpleadoRepository;
import com.proyecto.GestionTienda.repositories.ProductoRepository;
import com.proyecto.GestionTienda.repositories.SolicitudRepository;
import com.proyecto.GestionTienda.repositories.StockRepository;
import com.proyecto.GestionTienda.repositories.TiendaRepository;

import org.springframework.stereotype.Service;

@Service()
public class Servicio {

	@Autowired
	TiendaRepository tiendaRepository;
	
	@Autowired
	ProductoRepository productoRepository;
	
	@Autowired
	EmpleadoRepository empleadoRepository;
	
	@Autowired
	SolicitudRepository solicitudRepository;
	
	@Autowired
	StockRepository stockRepository;

	
	public Empleado getEmpleado(Empleado empleado) {
		empleado.setTienda(tiendaRepository.findById(empleado.getTienda().getId()).get());
		return empleado; 
	}
	
	public Stock getStock(Stock stock) {
		stock.setTienda(tiendaRepository.findById(stock.getTienda().getId()).get());
		stock.setProducto(productoRepository.findById(stock.getProducto().getId()).get());
		return stock; 
	}
	
	public Solicitud getSolicitud(Solicitud solicitud) {
		solicitud.setTienda(tiendaRepository.findById(solicitud.getTienda().getId()).get());
		solicitud.setProducto(productoRepository.findById(solicitud.getProducto().getId()).get());
		solicitud.setEmpleado(empleadoRepository.findById(solicitud.getEmpleado().getId()).get());
		return solicitud; 
	}
	
}
