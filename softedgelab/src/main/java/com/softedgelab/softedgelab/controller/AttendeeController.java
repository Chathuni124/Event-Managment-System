package com.softedgelab.softedgelab.controller;

import com.softedgelab.softedgelab.model.Attendee;
import com.softedgelab.softedgelab.service.AttendeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/events")
public class AttendeeController {
    @Autowired
    private AttendeeService attendeeService;

    @PostMapping("/{eventId}/attendees")
    public ResponseEntity<Object> registerAttendee(@PathVariable Long eventId, @RequestBody Attendee attendee) {
        try {
            Attendee registeredAttendee = attendeeService.registerAttendee(eventId, attendee);
            return new ResponseEntity<>(registeredAttendee, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
