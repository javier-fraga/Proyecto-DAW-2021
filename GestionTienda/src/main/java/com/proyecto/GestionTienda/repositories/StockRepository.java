package com.proyecto.GestionTienda.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.GestionTienda.clases.Stock;

public interface StockRepository extends JpaRepository<Stock, Long>{

	@Query("Select s from Stock s JOIN Producto p on p.id = s.producto JOIN Tienda t on t.id = s.tienda where t.id = ?1")
	public List<Stock> findProductosByTienda(Long idTienda);
	
}