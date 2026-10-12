/* eslint-disable @typescript-eslint/no-explicit-any */
//taking code from server link linkora-backend
import { JwtPayload, SignOptions } from "jsonwebtoken"
import jwt from "jsonwebtoken"
const createToken = (payload:JwtPayload, screct:string, expiresIn:SignOptions)=> {
    const token = jwt.sign(payload, screct, {
        expiresIn 
    } as SignOptions)
    return token;
}


//verify token  
const verifyToken = (token: string , screct: string) => {
   try {
     const verifedToken = jwt.verify(token, screct)
    return {
        success: true, 
        data:verifedToken
    };
   } catch (error:any) {
    console.log("Token verification failed", error)
    return {
        success: false,
        error:error.message
    }
   }
}

export const jwtUtils ={
    createToken,
    verifyToken
}