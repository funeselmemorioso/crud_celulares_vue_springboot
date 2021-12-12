package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "celulares")
public class CelularModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)

    private Long id;
    private String modelo;
    private String descripcion;
    private String foto;
    private int memoria;

    @ManyToOne
    private MarcaModel marca;

    public CelularModel() {

    }

    public CelularModel(Long id, String modelo, String descripcion, String foto, int memoria, MarcaModel marca) {
        this.id = id;
        this.modelo = modelo;
        this.descripcion = descripcion;
        this.foto = foto;
        this.memoria = memoria;
        this.marca = marca;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public int getMemoria() {
        return memoria;
    }

    public void setMemoria(int memoria) {
        this.memoria = memoria;
    }

    public MarcaModel getMarca() {
        return marca;
    }

    public void setMarca(MarcaModel marca) {
        this.marca = marca;
    }

}
