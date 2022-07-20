package com.api.people.Dtos;


import javax.validation.constraints.NotBlank;

public class PeopleDto {

    @NotBlank
    private String name;

    private int age;

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }


}
