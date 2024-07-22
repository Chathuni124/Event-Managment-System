import React, { useState } from 'react';
import axios from 'axios';
import '../css/EventForm.css'; 

const EventForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newEvent = {
            name,
            description,
            date,
            location
        };
        try {
            const response = await axios.post('http://localhost:8080/api/events', newEvent);
            console.log('Event created:', response.data);
            // Set success message and reset form
            setMessage('Event created successfully!');
            setMessageType('success');
            setName('');
            setDescription('');
            setDate('');
            setLocation('');
        } catch (error) {
            console.error('There was an error creating the event!', error);
            // Set error message
            setMessage('There was an error creating the event. Please try again.');
            setMessageType('error');
        }
    };

    return (
        <div className="event-form-container">
            <h2>Add Event</h2>
            {message && (
                <div className={`message ${messageType}`}>
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default EventForm;
