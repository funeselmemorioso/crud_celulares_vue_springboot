package com.example.demo.controllers;
import java.util.ArrayList;
import java.util.Optional;
import com.example.demo.models.ProductoModel;
import com.example.demo.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/producto")

public class ProductoController {
    @Autowired
    ProductoService productoService;
    @CrossOrigin   // para solucionar error cors
    @GetMapping()
    public ArrayList<ProductoModel> obtenerProductos(){
        return productoService.obtenerProductos();
    }
    @CrossOrigin 
    @PostMapping()
    public ProductoModel guardarProducto(@RequestBody ProductoModel producto){
        return this.productoService.guardarProducto(producto);
    }
    @CrossOrigin
    @GetMapping( path = "/{id}")
    public Optional<ProductoModel> obtenerProductoPorId(@PathVariable("id") Long id) {
        return this.productoService.obtenerPorId(id);
    }
    @CrossOrigin
    @GetMapping("/query")
    public ArrayList<ProductoModel> obtenerProductoPorPrioridad(@RequestParam("subtipo") Integer subtipo){
        return this.productoService.obtenerPorSubtipo(subtipo);
    }
    @CrossOrigin
    @DeleteMapping( path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.productoService.eliminarProducto(id);
        if (ok){
            return "Se eliminó el producto con id " + id;
        }else{
            return "No pudo eliminar el producto con id" + id;
        }
    }
}
