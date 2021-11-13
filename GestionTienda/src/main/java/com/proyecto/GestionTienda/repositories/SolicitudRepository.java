package com.proyecto.GestionTienda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.GestionTienda.clases.Solicitud;


public interface SolicitudRepository extends JpaRepository<Solicitud, Long>{

}
