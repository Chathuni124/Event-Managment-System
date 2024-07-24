# Event-Managment-System

This repository contains a comprehensive Event Management System application built using Spring Boot for the backend and React for the frontend, with MySQL as the database. The application allows users to manage events and register attendees.

## Table of Contents
1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [API Endpoints](#api-endpoints)
6. [Frontend Structure](#frontend-structure)
7. [Backend Structure](#backend-structure)
8. [Database Schema](#database-schema)


## Features
- **Backend**:
  - Fetch all events
  - Add a new event
  - Update event details
  - Delete an event by its ID
  - Register an attendee to an event

- **Frontend**:
  - Form component to input event details
  - List component to display all events
  - Detail view for each event
  - Fetch and display the list of events
  - Add new event
  - Update event details
  - Delete an event
  - Register an attendee to an event

- **UI/UX**:
  - User-friendly interface
  - Custom styles written in CSS
  - Responsive design

## Prerequisites
- Java 17
- Node.js (npm)
- MySQL
- Git

## Installation

### Backend Setup (Spring Boot)
1. Clone the repository:
    ```
    git clone https://github.com/Chathuni124/Event-Managment-System
    cd Event-Managment-System/softedgelab
    ```

2. Create a MySQL database:
    ```sql
    CREATE DATABASE event_management;
    ```

3. Configure the database in `application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/event_management
    spring.datasource.username=root
    spring.datasource.password=your_password
    spring.jpa.hibernate.ddl-auto=update
    ```

4. Build and run the Spring Boot application:
    ```
    ./mvnw spring-boot:run
    ```

### Frontend Setup (React)
1. Navigate to the frontend directory:
    ```
    cd Event-Managment-System\event_managment
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Start the React application:
    ```
    npm start
    ```

## Running the Application
1. Start the backend server:
    ```
    ./mvnw spring-boot:run
    ```

2. Start the frontend server:
    ```
    npm start
    ```

3. Access the application at `http://localhost:3000`.


## Database Schema
The `event_management` database contains the following tables:
- `events` (id, name, description, date, location)
- `attendees` (id, name, email, event_id)


