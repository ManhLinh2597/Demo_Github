const callback = (err, data) => {
    if (err){
        console.log(">>> callback: ", err)
    }
    if (data){
        console.log(">> callback: ", data)
    }
}

function getTodos(){
    var request = new XMLHttpRequest()
    
    request.onreadystatechange = function () {
        if (this.readyState === 4 && request.status === 200){
            const data = request.responseText
            callback(undefined, data)
        }
        if (this.readyState === 4 && request.status !== 200){
            
            callback("Something wrong", undefined)
        }
    }
    request.open("GET","https://jsonplaceholder.typicode.com/todos", true)
    request.send()
}

getTodos(callback)

