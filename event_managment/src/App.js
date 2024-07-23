import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventForm from './pages/EventForm'; // Ensure this path is correct
import EventList from './pages/EventList'; // Import the new component
import UpdateEvent from './pages/UpdateEvent';
import EventDetails from './pages/EventDetails';
import Header from './component/Header';
import AddAttendee from './pages/AddAttendee';



function App() {
  return (
    <Router>
      <div className="App">
      <Header /> 
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/add-event" element={<EventForm />} />
          <Route path="/update-event/:id" element={<UpdateEvent />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/event-details/:id/add-attendee" element={<AddAttendee />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
