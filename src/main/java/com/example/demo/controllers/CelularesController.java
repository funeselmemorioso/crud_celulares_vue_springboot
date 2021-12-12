package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.Optional;
import com.example.demo.models.CelularModel;
import com.example.demo.services.CelularesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/celulares")
public class CelularesController {

    @Autowired
    CelularesService _celularesService;

    @CrossOrigin
    @GetMapping()
    public ArrayList<CelularModel> traerTodos() {
        return _celularesService.findAll();
    }

    @CrossOrigin
    @GetMapping(path = "/{id}")
    public Optional<CelularModel> traerPorId(@PathVariable("id") Long id) {
        return _celularesService.findById(id);
    }

    @CrossOrigin
    @PostMapping()
    public CelularModel crear(@RequestBody CelularModel celularNuevo) {
        return this._celularesService.create(celularNuevo);
    }

    @CrossOrigin
    @PutMapping()
    public CelularModel actualizar(@RequestBody CelularModel celular) {
        return this._celularesService.update(celular);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminar(@PathVariable("id") Long id) {
        boolean ok = this._celularesService.delete(id);
        return ok ? "eliminado ok" : "fallo";
    }

}
