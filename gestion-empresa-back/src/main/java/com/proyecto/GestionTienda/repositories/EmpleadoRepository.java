package com.proyecto.GestionTienda.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.GestionTienda.clases.Empleado;


public interface EmpleadoRepository extends JpaRepository<Empleado, Long>{
	public Empleado findEmpleadoByEmail(String email);
}