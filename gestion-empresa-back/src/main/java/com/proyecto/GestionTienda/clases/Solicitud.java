package com.proyecto.GestionTienda.clases;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="solicitudes")
public class Solicitud {
	 	@Id
	    @GeneratedValue(strategy=GenerationType.IDENTITY)
	    @Column(name="id")
	    private long id;

	    @ManyToOne()
	    private Empleado empleado;
	    
	    @ManyToOne()
	    private Tienda tienda;
	    
	    @ManyToOne()
	    private Producto producto;
	    
	    private int cantidad;
}
