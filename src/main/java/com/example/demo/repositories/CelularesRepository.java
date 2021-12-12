package com.example.demo.repositories;

import java.util.ArrayList;
import com.example.demo.models.CelularModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CelularesRepository extends CrudRepository<CelularModel, Long> {
    public abstract ArrayList<CelularModel> findByModelo(String modelo);
}
