package com.proyecto.GestionTienda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.GestionTienda.clases.Tienda;

public interface TiendaRepository extends JpaRepository<Tienda, Long>{

}