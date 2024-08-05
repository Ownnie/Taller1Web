package com.taller1.taller.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        return "index";
    }

    @GetMapping("/equipo")
    public String equipo(Model model) {
        return "equipo";
    }

    @GetMapping("/proyecto")
    public String proyecto(Model model) {
        return "proyecto";
    }

    @GetMapping("/requerimientos")
    public String requerimientos(Model model) {
        return "requerimientos";
    }

    @GetMapping("/arquitectura")
    public String arquitectura(Model model) {
        return "arquitectura";
    }

    @GetMapping("/desarrollo")
    public String desarrollo(Model model) {
        return "desarrollo";
    }

    @GetMapping("/pruebas")
    public String pruebas(Model model) {
        return "pruebas";
    }

    @GetMapping("/despliegue")
    public String despliegue(Model model) {
        return "despliegue";
    }

    @GetMapping("/gracias")
    public String gracias(Model model) {
        return "gracias";
    }

}
