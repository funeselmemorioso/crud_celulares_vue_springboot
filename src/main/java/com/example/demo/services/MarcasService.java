package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import com.example.demo.models.MarcaModel;
import com.example.demo.repositories.MarcasRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarcasService {

    @Autowired
    private MarcasRepository _marcasRepository;

    public ArrayList<MarcaModel> findAll() {
        return (ArrayList<MarcaModel>) _marcasRepository.findAll();
    }

    public Optional<MarcaModel> findById(Long id) {
        return _marcasRepository.findById(id);
    }

    public MarcaModel create(MarcaModel marcaNueva) {
        return _marcasRepository.save(marcaNueva);
    }

    public MarcaModel update(MarcaModel marcaActualizar) {
        return _marcasRepository.save(marcaActualizar);
    }

    public boolean delete(Long id) {
        try {
            _marcasRepository.deleteById(id);
            return true;
        } catch (Exception err) {
            return false;
        }
    }

}
