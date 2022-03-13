import {Request, Response} from "express";
import {User} from "../types/Users";
import {LoginData} from "../types/LoginData";

export const getUser = (request: Request, response: Response) => {
    let users: User[] = [
        {
            id: 1,
            first_name: "Hristiana",
            password: "1234"
        },
        {
            id: 2,
            first_name: "Toshko",
            password: "1234"
        },
    ]
    response.send(users)
}

export const login = (request: Request, response: Response) => {
    const loginData: LoginData = request.query;
    if (!loginData.username || !loginData.password) {
        return response.send({
            status: 400,
            message: "Username or Password not provided"
        })
    }

    response.send({
        status: 200,
        message: "Logged in successfully"
    })
}