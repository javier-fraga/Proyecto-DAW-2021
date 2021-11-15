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
@Table(name="stock")
public class Stock {
	
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    
    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Tienda tienda;
    
    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Producto producto;
    
    @Column(name="cantidad")
    private int cantidad;
    
}
