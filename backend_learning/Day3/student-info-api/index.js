const express = require('express');
const app = express();

const students = [
    {id : 1 , name : 'abdul' , age : 22},
    {id:  2 , name : 'mohammed' , age : 21},
    {id : 3 , name : 'Rahman' , age : 23}
];

//home route

app.get('/home' , (req , res)=>{
    res.send('Welcome to Student Info API');
})

app.get('/students' , (req , res)=>{
    res.json(students);
})

app.get('/students/:id' , (req , res)=>{
    const id= parseInt(req.params.id);
    const student = students.find(std => std.id === id);

    if(student){
        res.json(student);
    }else{
        res.send('enter a valid student name')
    }
})

app.listen(3000 , () => {
    console.log('Server running at http://localhost:3000');
})