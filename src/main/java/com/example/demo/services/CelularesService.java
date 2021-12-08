package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;
import com.example.demo.models.CelularModel;
import com.example.demo.repositories.CelularesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CelularesService {

    @Autowired
    private CelularesRepository _celularesRepository;

    public ArrayList<CelularModel> findAll() {
        return (ArrayList<CelularModel>) _celularesRepository.findAll();
    }

    public Optional<CelularModel> findById(Long id) {
        return _celularesRepository.findById(id);
    }

    public CelularModel create(CelularModel celularNuevo) {
        return _celularesRepository.save(celularNuevo);
    }

    public CelularModel update(CelularModel celularNuevo) {
        return _celularesRepository.save(celularNuevo);
    }

    public boolean delete(Long id) {
        try {
            _celularesRepository.deleteById(id);
            return true;
        } catch (Exception err) {
            return false;
        }
    }

}
