import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventForm from './pages/EventForm'; // Ensure this path is correct
import EventList from './pages/EventList'; // Import the new component
import UpdateEvent from './pages/UpdateEvent';
import EventDetails from './pages/EventDetails';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/add-event" element={<EventForm />} />
          <Route path="/update-event/:id" element={<UpdateEvent />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
