
# Workout Buddy

This is MERN stack project which also have JWT authentication. It consists of login, signup and homepage.

## Screenshots

![App Screenshot](https://github.com/apooja21/workout-buddy-jwt-authentication/blob/main/pngs/Screenshot%202024-02-07%20125242.png)

![App Screenshot](https://github.com/apooja21/workout-buddy-jwt-authentication/blob/main/pngs/Screenshot%202024-02-07%20125220.png)

![App Screenshot](https://github.com/apooja21/workout-buddy-jwt-authentication/blob/main/pngs/Screenshot%202024-02-07%20125152.png)





## Tech Stack

**Client:** React, useContext, TailwindCSS

**Server:** Node, Express, JWT Authentication

**Database:** MongoDB


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

The lessons I learned during building this simple project :-

- Using mongodb in Nodejs and Express,
- Creating routes with express,
- Fetching API in the frontend,
- Usage of useContext,
- Application of JWT authentication,
- Using TailwindCSS classes in the frontend.
## Features

- The user first needs to sign up with their credentials i.e, email and password,
- Each user logged in with their credentials can add their own personal workouts in their profile,
- Workouts added by the users can't be global seen by other users,
- User can add workout information like workout name, loads, repetitions and target area,


## Run Locally

- Create the database on mongodb atlas and get the connection string.
- Create the .env file in the backend folder after cloning the project and put the variables PORT, MONG_URI, SECRET.

Clone the project

```bash
  git clone https://github.com/apooja21/workout-buddy-jwt-authentication.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  cd backend
  npm run dev
```

Start the frontend

```bash
  cd frontend
  npm start
```





