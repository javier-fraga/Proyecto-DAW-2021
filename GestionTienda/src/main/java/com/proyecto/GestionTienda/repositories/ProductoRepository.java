package com.proyecto.GestionTienda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.GestionTienda.clases.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long>{
	
}