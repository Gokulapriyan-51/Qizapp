import express from 'express';
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { Userrouter } from './user/user.route';
// import { AuthRouter } from './routes/auth.route';

const app = express();

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())
console.log(Userrouter,'user function');

// app.use('/api/auth', AuthRouter);
app.use(Userrouter)

const PORT = 2026
app.listen(PORT ,() =>{
    console.log('our server was started ', PORT)
})