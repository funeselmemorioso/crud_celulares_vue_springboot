package com.example.demo.repositories;

import com.example.demo.models.MarcaModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarcasRepository extends CrudRepository<MarcaModel, Long> {

}
