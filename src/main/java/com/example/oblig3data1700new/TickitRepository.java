package com.example.oblig3data1700new;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class TickitRepository {
    private JdbcTemplate db;
    @Autowired
    public TickitRepository(JdbcTemplate jdbcTemplate) {
        this.db = jdbcTemplate;
    }

    public void saveBillett(Tickets t) {
        String sql = "INSERT INTO Tickets (film, antall, fornavn, etternavn, tlf, epost) VALUES (?, ?, ?, ?, ?, ?)";
        try {
            db.update(sql, t.getFilm(), t.getAntall(), t.getFornavn(), t.getEtternavn(), t.getTlf(), t.getEpost());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public List<Tickets> hentAlletickets() {

        String sql = "SELECT * FROM Tickets";
        return db.query(sql, (rs, rowNum) -> new Tickets(
                rs.getString("film"),
                rs.getInt("antall"),
                rs.getString("fornavn"),
                rs.getString("etternavn"),
                rs.getString("tlf"),
                rs.getString("epost")
        ));
    }
    public void deleteAllTickets() {
        String sql = "DELETE FROM Tickets";
        try {db.update(sql);
        }catch (Exception e){
            System.out.println(e);
        }
    }


}
