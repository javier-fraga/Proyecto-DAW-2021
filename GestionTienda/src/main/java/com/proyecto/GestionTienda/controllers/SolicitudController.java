package com.proyecto.GestionTienda.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.GestionTienda.clases.Solicitud;
import com.proyecto.GestionTienda.repositories.SolicitudRepository;
import com.proyecto.GestionTienda.services.Servicio;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SolicitudController {
	
	@Autowired
	SolicitudRepository repository;
	
	@Autowired
	Servicio service;
	
	@PostMapping("/solicitud")
	public Solicitud newSolicitud(@RequestBody Solicitud solicitud) {
		solicitud = service.getSolicitud(solicitud);
		return solicitud;
	}
	
}