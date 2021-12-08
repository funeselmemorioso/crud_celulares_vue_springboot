package com.example.demo.models;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "marcas")
public class MarcaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)

    private Long id;
    private String nombre;

    @OneToMany(targetEntity = CelularModel.class)
    private List celulares;

    public MarcaModel() {

    }

    public MarcaModel(Long id, String nombre, List celulares) {
        this.id = id;
        this.nombre = nombre;
        this.celulares = celulares;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List getCelulares() {
        return celulares;
    }

    public void setCelulares(List celulares) {
        this.celulares = celulares;
    }

}
