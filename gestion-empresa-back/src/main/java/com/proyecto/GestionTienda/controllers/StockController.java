package com.proyecto.GestionTienda.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public Stock nuevoStock(@RequestBody Stock stock) {
		stock = service.getStock(stock);
		return repository.save(stock);
	}
	
	@DeleteMapping("/stock")
	public void borrarStock(@RequestBody Stock stock){
		repository.delete(repository.findByTiendaIdAndProductoId(stock.getTienda().getId(), stock.getProducto().getId()));
		
	}
}
