package com.example.demo.models;
import javax.persistence.*;
@Entity
@Table(name = "producto")
public class ProductoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    
    private Long id;
    private String  nombre;
    private String descripcion;
    private String foto;
    private float precio;
    private int stock;
    private long subtipo;
    public ProductoModel() {
    }
    public ProductoModel(Long id, String nombre, String descripcion, String foto, float precio, int stock,
            long subtipo) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.foto = foto;
        this.precio = precio;
        this.stock = stock;
        this.subtipo = subtipo;
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
    public float getPrecio() {
        return precio;
    }
    public void setPrecio(float precio) {
        this.precio = precio;
    }
    public int getStock() {
        return stock;
    }
    public void setStock(int stock) {
        this.stock = stock;
    }
    public long getSubtipo() {
        return subtipo;
    }
    public void setSubtipo(long subtipo) {
        this.subtipo = subtipo;
    }

    

    
}
