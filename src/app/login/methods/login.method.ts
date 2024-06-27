import axios from 'axios'
import { URI } from '../../../../config'

export class LoginMethod{
    public signin=(username: string, password: string)=>{

        return new Promise((resolve)=>{
            axios.post(`${URI}/api/login`,{
                username: username,
                password: password
            }).then((res)=>{
                resolve(res)
            })
        })
    }
}