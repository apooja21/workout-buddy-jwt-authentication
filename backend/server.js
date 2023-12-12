require('dotenv').config()
const express = require('express')

//express app
const app = express()
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('api/user', userRoutes)

//connect to database
mongoose
	.connect(process.env.MONG_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		//listen for requests
		app.listen(process.env.PORT, () => {
			console.log('Listening on port', process.env.PORT)
		})
	})
	.catch((error) => {
		console.log(error)
	})
