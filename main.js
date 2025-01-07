const express = require('express')
const userRouter = require('./users/user.route')
const connectToDb = require('./db/connectToDb')
const postRouter = require('./posts/post.route')
const authRouter = require('./auth/auth.route')
const isAuth = require('./middlewares/isAuth')
const app = express()

connectToDb()

app.use(express.json())

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/posts', isAuth, postRouter)


app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
})
