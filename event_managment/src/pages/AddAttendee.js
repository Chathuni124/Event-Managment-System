import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/AddAttendee.css'; 

const AddAttendee = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [attendee, setAttendee] = useState({
        name: '',
        email: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAttendee({
            ...attendee,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8080/api/events/${id}/attendees`, attendee);
            navigate(`/event-details/${id}`); 
        } catch (error) {
            setError('Error adding attendee');
        }
    };

    return (
        <div className="add-attendee-container">
            <h2>Add Attendee</h2>
            {error && <div className="message error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={attendee.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={attendee.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Add Attendee</button>
            </form>
        </div>
    );
};

export default AddAttendee;
