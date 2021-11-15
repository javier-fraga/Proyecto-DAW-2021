package com.proyecto.GestionTienda.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.GestionTienda.clases.Empleado;
import com.proyecto.GestionTienda.repositories.EmpleadoRepository;
import com.proyecto.GestionTienda.services.Service;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmpleadoController {
	
	@Autowired
	EmpleadoRepository repository;
	
	@Autowired
	Service service;
	
	@PostMapping("/empleado/get")
	public Empleado getEmpleado(@RequestBody String email) {
		return repository.findEmpleadoByEmail(email);
	}

	@PostMapping("/empleado")
	public Empleado nuevoEmpleado(@RequestBody Empleado empleado) {
		empleado = service.getEmpleado(empleado);
		return repository.save(empleado);
	}
	
}