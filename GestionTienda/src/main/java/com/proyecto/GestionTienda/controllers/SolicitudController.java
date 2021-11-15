package com.proyecto.GestionTienda.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.GestionTienda.repositories.SolicitudRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SolicitudController {
	
	@Autowired
	SolicitudRepository repository;
	
}