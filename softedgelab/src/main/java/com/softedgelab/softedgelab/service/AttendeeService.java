package com.softedgelab.softedgelab.service;

import com.softedgelab.softedgelab.model.Attendee;
import com.softedgelab.softedgelab.model.Event;
import com.softedgelab.softedgelab.repository.AttendeeRepository;
import com.softedgelab.softedgelab.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class AttendeeService {

    @Autowired
    private AttendeeRepository attendeeRepository;

    @Autowired
    private EventRepository eventRepository;

    public Attendee registerAttendee(Long eventId, Attendee attendee) {
        Optional<Event> eventOptional = eventRepository.findById(eventId);
        if (eventOptional.isPresent()) {
            Event event = eventOptional.get();
            attendee.setEvent(event);
            Attendee savedAttendee = attendeeRepository.save(attendee);

            if (event.getAttendees() == null) {
                event.setAttendees(new ArrayList<>());
            }
            event.getAttendees().add(savedAttendee);
            eventRepository.save(event);
            return savedAttendee;
        } else {
            throw new RuntimeException("Event not found with ID: " + eventId);
        }
    }
}



