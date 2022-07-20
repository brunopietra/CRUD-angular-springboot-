package com.api.people.controllers;

import com.api.people.Dtos.PeopleDto;
import com.api.people.models.PeopleModel;
import com.api.people.services.PeopleService;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/people")
public class PeopleController {
    final PeopleService peopleService;

    public PeopleController(PeopleService peopleService) { //esse construtor faz o mesmo papel q o @Autowired

        this.peopleService = peopleService;
    }


    @PostMapping
    public ResponseEntity<Object> savePeople(@RequestBody @Valid PeopleDto peopleDto){


        var peopleModel = new PeopleModel(); //var eh uma novidade do java 11
        BeanUtils.copyProperties(peopleDto, peopleModel);//esse metodo fara o Dto se converter em Model


        return ResponseEntity.status(HttpStatus.CREATED).body(peopleService.save(peopleModel));

    }
    //@RequestBody serve para fazer o metodo receber dados JSON
    //@Valid faz as anotacoes do Dto serem efetuadas de fato, fazendo o metodo n ser efetuado caso uma das condicoes n seja atendida


    @GetMapping
    public ResponseEntity<List<PeopleModel>> getAllPeople(){
        return ResponseEntity.status(HttpStatus.OK).body(peopleService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOnePeople(@PathVariable(value = "id") UUID id ){
        Optional<PeopleModel> peopleModelOptional = peopleService.findById(id);
        if(!peopleModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Parking Spot not found!");
        }

        return ResponseEntity.status(HttpStatus.OK).body(peopleModelOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePeople(@PathVariable(value = "id") UUID id ){
        Optional<PeopleModel> peopleModelOptional = peopleService.findById(id);
        if(!peopleModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Parking Spot not found!");
        }
        peopleService.delete(peopleModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Parking Spot deleted succesfully.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updatePeople(@PathVariable(value = "id") UUID id, @RequestBody @Valid PeopleDto peopleDto){
        Optional<PeopleModel> peopleModelOptional = peopleService.findById(id);
        if(!peopleModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Parking Spot not found!");
        }
        PeopleModel peopleModel = peopleModelOptional.get();
        peopleModel.setName(peopleDto.getName());
        peopleModel.setAge(peopleDto.getAge());

        return ResponseEntity.status(HttpStatus.OK).body(peopleService.save(peopleModel));
    }
}
