import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import '../css/EventDetails.css'; // Import the external CSS file

const EventDetails = () => {
    const { id } = useParams(); // Get the event ID from URL parameters
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/events/${id}`);
                setEvent(response.data);
            } catch (error) {
                setError('Error fetching event details');
            }
        };

        fetchEventDetails();
    }, [id]);

    if (error) return <div className="message error">{error}</div>;
    if (!event) return <p>Loading event details...</p>;

    return (
        <div className="event-details-container">
            <h2>Event Details</h2>
            <p><strong>Name:</strong> {event.name}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <h3>Attendees</h3>
            {event.attendees && event.attendees.length > 0 ? (
                <ul>
                    {event.attendees.map(attendee => (
                        <li key={attendee.id}>{attendee.name} - {attendee.email}</li>
                    ))}
                </ul>
            ) : (
                <p>No attendees listed</p>
            )}
        </div>
    );
};

export default EventDetails;
