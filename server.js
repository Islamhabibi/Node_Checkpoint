const expess =require('express')
const port= 3000
const app = expess()

app.listen(port,()=>{
    console.log('<h1>Hello Node!!!!</h1>\n' +port);
})