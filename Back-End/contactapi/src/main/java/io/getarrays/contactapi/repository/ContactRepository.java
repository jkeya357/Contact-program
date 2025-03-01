package io.getarrays.contactapi.repository;

import io.getarrays.contactapi.domain.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContactRepository extends JpaRepository<Contact, String> {

    @Override
    Optional<Contact> findById(String id);
}
