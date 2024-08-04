package com.taller1.taller.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taller1.taller.models.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}