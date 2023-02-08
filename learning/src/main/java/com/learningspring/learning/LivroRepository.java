package com.learningspring.learning;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.learningspring.learning.model.Livro;

@Repository	
public interface LivroRepository extends CrudRepository<Livro, Long>{}

