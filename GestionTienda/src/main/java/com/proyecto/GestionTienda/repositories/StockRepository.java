package com.proyecto.GestionTienda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.GestionTienda.clases.Stock;

public interface StockRepository extends JpaRepository<Stock, Long>{

}
