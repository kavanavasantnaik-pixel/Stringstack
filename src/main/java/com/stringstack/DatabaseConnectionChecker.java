package com.stringstack;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class DatabaseConnectionChecker implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DatabaseConnectionChecker.class);

    private final JdbcTemplate jdbcTemplate;

    public DatabaseConnectionChecker(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void run(String... args) {
        Integer one = jdbcTemplate.queryForObject("SELECT 1", Integer.class);
        log.info("MySQL connection successful - SELECT 1 returned {}", one);
    }
}