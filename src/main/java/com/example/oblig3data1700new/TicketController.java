package com.example.oblig3data1700new;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketController {

    @Autowired
    private TickitRepository tickitRepository;

    @PostMapping("/save")
    public void savebtickit(Tickets t){
        tickitRepository.saveBillett(t);
    }

    @GetMapping("/hentAlleData")

    public List<Tickets> hentAlleData(){
        return tickitRepository.hentAlletickets();
    }

    @GetMapping("/fjernaData")
    public void slettAlle(){
        tickitRepository.deleteAllTickets();
    }


}
