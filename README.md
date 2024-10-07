# ClassConnect

ClassConnect is a virtual classroom platform aimed at bridging the gap between educators and learners through seamless communication, resource sharing, and interactive learning.

## Features
- User Authentication with role-based access (teachers and students).
- Course management: Creation, enrollment, and dashboard views.
- Note-sharing: Upload and download course notes, organized by subject.
- Interactive classroom tools: Real-time discussions, quizzes, and polls.

## Tech Stack
- **Frontend**: React, Daisy UI, React Router DOM
- **Backend**: Appwrite (authentication, data storage, real-time communication)
- **Deployment**: Netlify (frontend), Appwrite server/cloud (backend)

## Setup Instructions

### Frontend (React with Daisy UI)
1. Install dependencies:
    ```bash
    npm install
    ```
2. Run the development server:
    ```bash
    npm run dev
    ```

### Backend (Appwrite)
1. Set up your Appwrite project and collections:
   - `Users`: Store user profiles (teachers, students).
   - `Courses`: Store course information and enrollment data.
   - `Notes`: Store uploaded notes.
   - `Discussions`: Manage live discussions and comments.
2. Configure authentication (email/password, social login).
