import http from "http"
import { todolistServices } from "./todolist-services.mjs"


const services = new todolistServices()
const server = http.createServer((request,respon)=>{
    
    respon.setHeader("Content-Type","application/json")

    if(request.method==="GET"){
        services.getTodolist(request,respon)
    }else if(request.method==="POST"){
        services.createTodolist(request,respon)
    }else if(request.method==="PUT"){
        services.updateTodolist(request,respon)
    }else if(request.method==="DELETE"){
        services.deleteTodolist(request,respon)
    }

})
server.listen(3000)