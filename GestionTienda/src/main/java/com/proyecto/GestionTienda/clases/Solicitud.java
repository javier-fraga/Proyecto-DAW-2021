package com.proyecto.GestionTienda.clases;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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

	    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	    private Empleado empleado;
	    
	    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	    private Tienda tienda;
	    
	    @OneToMany(mappedBy = "solicitud", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	    private List<ListaProds> listaProds; 
}
