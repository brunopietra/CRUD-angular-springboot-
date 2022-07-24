package com.api.people.services;

import com.api.people.models.PeopleModel;
import com.api.people.repositories.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PeopleService {
    @Autowired //indica q o spring tera q fazer uma injecao de dependencia do PeopleRepository no service
    PeopleRepository peopleRepository;

    @Transactional //@ bem utilizado em salvamentos em cascata. Caso um save de errado, ele garante q o programa descarte esse dado quebrado
    public PeopleModel save(PeopleModel peopleModel) {
        return peopleRepository.save(peopleModel);
    }

    public List<PeopleModel> findAll() {
        return peopleRepository.findAll();
    }

    public Optional<PeopleModel> findById(UUID id) {
        return peopleRepository.findById(id);
    }
    @Transactional
    public void delete(PeopleModel peopleModel) {
        peopleRepository.delete(peopleModel);
    }
}
