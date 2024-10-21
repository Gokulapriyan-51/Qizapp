/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import express, { Router } from 'express';
import { getUsers, createUser} from "./user.service"; 
import { ResponseHandler } from '../event-handlers/respone.handlers';
import { Console } from 'console';
const router = express.Router();

console.log('hi');
router.get('/users', async(req, res)=>{
    
console.log('hi00');
    try{
        console.log(req,'req');

        const users = await getUsers()
        // console.log('hi00', users);
        ResponseHandler(res,200, users)
        return users
    }catch{
        ResponseHandler(res, 500, { error: 'Internal Server Error' })
    }
})

router.post('/user', async(req, res)=>{
    try{
        console.log('inside post')
        const { id, username, email, password, role } = req.body
        const userData = {  id,username, email, password, role }
        const newUser = await createUser(userData)
        ResponseHandler(res,201, newUser)
    }catch(err){
        if (err instanceof Error) {
            ResponseHandler(res, 400, { error: err.message })
        } else {
            ResponseHandler(res, 500, { error: 'Internal Server Error' })
        }
    }
})
export const Userrouter = router;

