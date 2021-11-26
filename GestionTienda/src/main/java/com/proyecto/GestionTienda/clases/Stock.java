package com.proyecto.GestionTienda.clases;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="stock")
public class Stock {
	
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    
    @ManyToOne()
    private Tienda tienda;
    
    @ManyToOne()
    @JsonBackReference
    @JoinColumn(name="producto_id")
    private Producto producto;
    
    @Column(name="cantidad")
    private int cantidad;
    
}


