# BuildBoard

BuildBoard is a full stack project management and collaboration platform built to practice modern software engineering.

The application allows teams to organize work using projects and tasks, track progress through task statuses, and collaborate through comments.

This project is being developed step by step as a learning journey into full stack development using modern tools and best practices.

---

# Project Goals

The goal of BuildBoard is to learn and implement:

- Full stack web development
- Frontend architecture with React
- Backend API design with Node.js
- Database design using PostgreSQL
- Authentication and authorization
- REST API design
- Docker based development environment
- Clean code structure used in real software teams

---

# Tech Stack

## Frontend
- React
- TypeScript
- Tailwind CSS
- React Router

## Backend
- Node.js
- Express
- TypeScript
- REST APIs

## Database
- PostgreSQL

## Development Tools
- Docker
- Git
- GitHub
- Postman
- VS Code

---

# Architecture Overview

The application follows a typical full stack architecture.
Browser
↓
React Frontend
↓
Node.js Backend API
↓
PostgreSQL Database


The frontend communicates with the backend through HTTP APIs, and the backend interacts with the PostgreSQL database to store and retrieve data.

---

# Core Features (Version 1)

### Authentication
- User signup
- User login
- Session management

### Workspace Management
- Create workspace
- View workspace dashboard

### Project Management
- Create projects
- View project list
- Open project boards

### Task Management
- Create tasks
- Edit tasks
- Assign tasks
- Set priority
- Set due dates
- Update task status

### Collaboration
- Add comments to tasks
- View discussion history

### Dashboard
- Overview of projects
- Task statistics
- Tasks grouped by status

---

# Application Pages

## Public Pages
- Landing Page
- Signup Page
- Login Page

## Protected Pages
- Dashboard
- Projects Page
- Project Board
- Task Details
- Settings

---

# Data Models

The main entities in the system are:

- User
- Workspace
- WorkspaceMember
- Project
- Task
- Comment

### Relationships

- A user can belong to multiple workspaces
- A workspace can contain multiple projects
- A project can contain multiple tasks
- A task can contain multiple comments
- Tasks can be assigned to users

---

# Database Overview

Example entities:

### User
Stores account information.

### Workspace
Represents a team or organization.

### Project
Groups related tasks.

### Task
Represents a unit of work within a project.

### Comment
Allows collaboration on tasks.

---

# Development Setup

## Prerequisites

Install the following tools:

- Node.js
- Docker
- Git
- PostgreSQL client (psql)
- VS Code

---

## Clone the repository

git clone https://github.com/Ayush-Som/buildboard.git
cd buildboard

---

## Start the database

The PostgreSQL database runs inside Docker.

docker compose up -d

This starts the database container.

Database connection details
Host: localhost
Port: 55432
Database: buildboard
User: buildboard
Password: buildboard
Project Structure
buildboard
│
├── client        # Frontend application (React)
│
├── server        # Backend API (Node.js + Express)
│
├── docker-compose.yml
│
├── README.md
│
└── .gitignore

## Development Roadmap

The project is being developed in phases.

Phase 1

Project setup and environment configuration.

Phase 2

Frontend basics using HTML, CSS, JavaScript, and TypeScript.

Phase 3

Backend API development.

Phase 4

Database integration with PostgreSQL.

Phase 5

Authentication and authorization.

Phase 6

Full task management features.

Phase 7

UI improvements and testing.

Phase 8

Deployment and production readiness.

## Learning Objectives

This project is intended to develop practical experience with:

Building scalable web applications

Designing relational database schemas

Writing clean backend APIs

Managing application state

Containerized development with Docker

Version control and collaboration with Git

Future Improvements

Possible future enhancements include:

Real time task updates

Email notifications

Team invitations

Activity feeds

File attachments

Advanced analytics

AI assisted task summaries

Author

Ayush Kumar Som
Software Engineering (Honours) Graduate
Melbourne, Australia

GitHub: https://github.com/Ayush-Som