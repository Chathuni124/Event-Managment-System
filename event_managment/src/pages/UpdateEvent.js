import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEvent = () => {
    const { id } = useParams(); // Get the event ID from URL parameters
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        name: '',
        description: '',
        date: '',
        location: ''
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/events/${id}`);
                setEvent(response.data);
            } catch (error) {
                setError('Error fetching event details');
            }
        };

        fetchEvent();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/events/${id}`, event);
            setSuccessMessage('Event updated successfully!'); // Set the success message
            setTimeout(() => {
                navigate('/'); // Redirect to the event list page after update
            }, 2000); // Delay redirect to show success message
        } catch (error) {
            setError('Error updating event');
        }
    };

    return (
        <div className="update-event-container">
            <h2>Update Event</h2>
            {error && <div className="message error">{error}</div>}
            {successMessage && <div className="message success">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={event.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={event.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Update Event</button>
            </form>
        </div>
    );
};

export default UpdateEvent;
