import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/EventList.css'; 
import { useNavigate } from 'react-router-dom'; 

const EventList = () => {
    const [events,setEvents] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [successMessage,setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async() => {
            try {
                const response = await axios.get('http://localhost:8080/api/events');
                setEvents(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching events');
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const handleUpdate = (eventId) => {
        navigate(`/update-event/${eventId}`); 
    };

    const handleDelete = async (eventId) => {
        try {
            await axios.delete(`http://localhost:8080/api/events/${eventId}`);
            setEvents(events.filter(event => event.id !== eventId)); 
            setSuccessMessage('Event deleted successfully!'); 
            setTimeout(() => {
                setSuccessMessage(null);
            }, 3000); 
        } catch (error) {
            setError('Error deleting event');
        }
    };

    const handleViewDetails = (eventId) => {
        navigate(`/event-details/${eventId}`); 
    };

    if (loading) return <p>Loading events...</p>;
    if (error) return <div className="message error">{error}</div>;

    return (
        <div className="event-list-container">
            <h2>Event List</h2>
            {successMessage && <div className="message success">{successMessage}</div>}
            {events.length === 0 ? (
                <p>No events found</p>
            ) : (
                <div>
                    {events.map((event) => (
                        <div className="event-card" key={event.id}>
                            <h3>{event.name}</h3>
                            <div className="event-buttons">
                                <button onClick={() => handleViewDetails(event.id)}>View Details</button>
                                <button onClick={() => handleUpdate(event.id)}>Update</button>
                                <button onClick={() => handleDelete(event.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EventList;
