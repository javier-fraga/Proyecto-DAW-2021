package com.proyecto.GestionTienda.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.GestionTienda.clases.Stock;
import com.proyecto.GestionTienda.repositories.StockRepository;
import com.proyecto.GestionTienda.services.Servicio;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StockController {
	
	@Autowired
	StockRepository repository;
	
	@Autowired
	Servicio service;
	
	@PostMapping("/stock")
	public Stock nuevoEmpleado(@RequestBody Stock stock) {
		stock = service.getStock(stock);
		return repository.save(stock);
	}
	
	@GetMapping("/stock")
	public List<Stock> stockByTienda(@RequestParam Long idTienda){
		return repository.findProductosByTienda(idTienda);
	}
}
