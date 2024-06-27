import axios from 'axios'
import { URI } from '../../../../config'

export class RegisterMethod{
    public signup=(username: string, password: string)=>{
        return new Promise((resolve)=>{
            axios.post(`${URI}/api/register`,{
                username: username,
                password: password
            }).then((res)=>{
                resolve(res)
            })
        })
    }
}