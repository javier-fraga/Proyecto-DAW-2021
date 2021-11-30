package com.proyecto.GestionTienda.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.GestionTienda.clases.Empleado;
import com.proyecto.GestionTienda.repositories.EmpleadoRepository;
import com.proyecto.GestionTienda.services.Servicio;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmpleadoController {
	
	@Autowired
	EmpleadoRepository repository;
	
	@Autowired
	Servicio service;
	
	@GetMapping("/empleado/get")
	public Empleado getEmpleado(@RequestParam String email) {
		return repository.findEmpleadoByEmail(email);
	}
	
	@GetMapping("/empleado")
	public List<Empleado> getEmpleado() {
		return repository.findAll();
	}

	@PostMapping("/empleado")
	public Empleado nuevoEmpleado(@RequestBody Empleado empleado) {
		empleado = service.getEmpleado(empleado);
		if(repository.findEmpleadoByEmail(empleado.getEmail()) != null) { 
			return null;
		}else
			return repository.save(empleado);
	}
	
	@PutMapping("/empleado")
	public Empleado modificarEmpleado(@RequestBody Empleado empleado) {
		empleado = service.getEmpleado(empleado);
		System.out.println(empleado);
		return repository.save(empleado);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/empleado/{id}")
	public void borrarEmpleado(@PathVariable Long id) {
		 repository.deleteById(id);
	}
}