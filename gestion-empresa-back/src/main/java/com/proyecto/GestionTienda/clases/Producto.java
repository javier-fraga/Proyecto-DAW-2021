package com.proyecto.GestionTienda.clases;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="productos")
public class Producto {
		
	    @Id
	    @GeneratedValue(strategy=GenerationType.IDENTITY)
	    @Column(name="id")
	    private long id;
	    
	    @Column(name="nombre")
	    private String nombre;
	    
	    @Column(name="descripcion")
	    private String descripcion;
	    
	    @Column(name="precio")
	    private BigDecimal precio;
	    
	    @JsonManagedReference
	    @OneToMany(mappedBy="producto")
	    private List<Stock> stocks;
	    
}
