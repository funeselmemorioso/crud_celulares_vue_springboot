package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.example.demo.models.MarcaModel;
import com.example.demo.services.MarcasService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/marcas")
public class MarcasController {
    @Autowired
    MarcasService _marcasService;

    @CrossOrigin
    @GetMapping()
    public ArrayList<MarcaModel> traerTodas() {
        return _marcasService.findAll();
    }

    @CrossOrigin
    @GetMapping(path = "/{id}")
    public Optional<MarcaModel> traerPorId(@PathVariable("id") Long id) {
        return _marcasService.findById(id);
    }

    @CrossOrigin
    @PostMapping()
    public MarcaModel crear(@RequestBody MarcaModel celularNuevo) {
        return this._marcasService.create(celularNuevo);
    }

    @CrossOrigin
    @PutMapping()
    public MarcaModel actualizar(@RequestBody MarcaModel celular) {
        return this._marcasService.update(celular);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminar(@PathVariable("id") Long id) {
        boolean ok = this._marcasService.delete(id);
        return ok ? "eliminada ok" : "fallo";
    }

}
