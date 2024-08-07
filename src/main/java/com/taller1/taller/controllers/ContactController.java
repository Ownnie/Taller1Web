package com.taller1.taller.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.taller1.taller.models.Contact;
import com.taller1.taller.repositories.ContactRepository;

import jakarta.validation.Valid;

@Controller
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/formulario")
    public String showContactForm(Model model) {
        model.addAttribute("contact", new Contact());
        return "formulario";
    }

    @PostMapping("/formulario")
    public String submitForm(@Valid Contact contact, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            return "formulario";
        } 
            contactRepository.save(contact);
            return "redirect:/gracias";
        
    }

}
