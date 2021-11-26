package com.proyecto.GestionTienda.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.GestionTienda.clases.Producto;
import com.proyecto.GestionTienda.repositories.ProductoRepository;
import com.proyecto.GestionTienda.services.Servicio;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductoController {
	
	@Autowired
	ProductoRepository repository;
		
	@Autowired
	Servicio servicio;
	
	@GetMapping("/producto/{id}")
	public Producto getTiendaById(@PathVariable Long id) {
		
		return repository.getById(id);
	}
	
	@PostMapping("/producto")
	public Producto newProducto(@RequestBody Producto nuevoProducto) {
		return repository.save(nuevoProducto);
	}
	
	@GetMapping("/producto")
	public List<Producto> allProductos(){
		return repository.findAll();
	}
}