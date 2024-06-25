package org.jsp.reservation_app.repository;

import org.jsp.reservation_app.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {

}
