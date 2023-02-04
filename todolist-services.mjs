export class todolistServices{

    todolist = ["wisnu","mwm","mwm"]

    getJSONtodolist(){
        return JSON.stringify({
            code : 200,
            status : "OK",
            data : this.todolist.map((value,index)=>{
                return {
                    id:index,
                    todo :value
                }
            })
        })
    }
    //method GET
    getTodolist(request,respon){
        const json = this.getJSONtodolist()

        respon.write(json)
        respon.end()
    }
    //method post
    createTodolist(request,respon){
        request.addListener("data",(data)=>{
            const body = JSON.parse(data.toString())
            this.todolist.push(body.todo)

            respon.write(this.getJSONtodolist())
            respon.end()
        })
    }
    //method PUT
    updateTodolist(request,respon){
        request.addListener("data",(data)=>{
            const body = JSON.parse(data.toString())
            if(this.todolist[body.id]){
                this.todolist[body.id]=body.todo
            }

            respon.write(this.getJSONtodolist())
            respon.end()
        })
    }
    //method DELETE
    deleteTodolist(request,respon){
        request.addListener("data",(data)=>{
            const body = JSON.parse(data.toString())
            if(this.todolist[body.id]){
                this.todolist.splice(body.id,1)
            }

            respon.write(this.getJSONtodolist())
            respon.end()
        })
    }
}
