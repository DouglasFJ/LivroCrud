package com.learningspring.learning;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learningspring.learning.model.Livro;



@RestController
@RequestMapping("/api/livro")
public class Controler {
	
	@Autowired
	private LivroRepository repository;

	
	@GetMapping()
	public List<Livro> listar() {
		return (List<Livro>) repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Livro buscarLivro(@PathVariable Long id) {
		return repository.findById(id).get(); 
	}
	
	@PostMapping
	public Livro inserir(@RequestBody Livro livro) {
		
		repository.save(livro);
		
		return livro;
	}
	
	@DeleteMapping("/{id}")
	public void deletar(@PathVariable Long id) {
		repository.deleteById(id);
		
	}
	
	@PutMapping("/{id}")
	public Livro editar(@PathVariable Long id, @RequestBody Livro livro) {
		
		Livro edit = repository.findById(id).get();
		edit.setNomeAutor(livro.getNomeAutor());
		edit.setTitulo(livro.getTitulo());
		repository.save(edit);
		
		return livro;
	}
	
	@GetMapping("/titulo/{titulo}")
	public List<Livro> buscarLivroTitulo(@PathVariable String titulo) {
		List<Livro> livro = repository.findByTituloLike("%"+titulo+"%");
		return livro;
	}

}
