package com.proyecto.GestionTienda.clases;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name="tiendas")
public class Tienda {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
 	
    @Column(name="ciudad")
    private String ciudad;
    
    @Column(name="direccion")
    private String direccion;
    
    @Column(name="cp")
    private int cp;
    
    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Solicitud solicitud; 
    
}
