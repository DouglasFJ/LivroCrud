package com.learningspring.learning;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.learningspring.learning.model.Livro;

@Repository	
public interface LivroRepository extends CrudRepository<Livro, Long>{
	List<Livro> findByTituloLike(String titulo);
}

