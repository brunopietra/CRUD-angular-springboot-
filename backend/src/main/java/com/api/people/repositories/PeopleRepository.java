package com.api.people.repositories;

import com.api.people.models.PeopleModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository //comando n necessario, pois a extensao ja inclui o @Repository
public interface PeopleRepository extends JpaRepository<PeopleModel, UUID> { //o JPA possui comandos basicos de um CRUD

}
