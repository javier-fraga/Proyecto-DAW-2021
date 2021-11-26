package com.proyecto.GestionTienda.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.GestionTienda.clases.Tienda;
import com.proyecto.GestionTienda.repositories.TiendaRepository;
import com.proyecto.GestionTienda.services.Servicio;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tienda")
public class TiendaController {
	
	@Autowired
	TiendaRepository repository;
	
	@Autowired
	Servicio servicio;
	
	@PostMapping()
	public Tienda nuevaTienda(@RequestBody Tienda tienda) {
		return repository.save(tienda);
	}
	 
	@GetMapping("/{id}")
	public Tienda getTiendaById(@PathVariable Long id) {
		return repository.getById(id);
	}
	
}
