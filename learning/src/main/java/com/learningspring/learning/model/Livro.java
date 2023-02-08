package com.learningspring.learning.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Livro {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long idLivro;
	
	private String titulo;
	private String nomeAutor;
	
	//getters and setters
	public Long getIdLivro() {
		return idLivro;
	}
	public void setIdLivro(Long idLivro) {
		this.idLivro = idLivro;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getNomeAutor() {
		return nomeAutor;
	}
	public void setNomeAutor(String nomeAutor) {
		this.nomeAutor = nomeAutor;
	}
	
	
}
