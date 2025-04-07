const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [];

app.get('/' , (req , res)=>{
    res.send('Welcome to the notes api')
})

app.get('/notes' , (req , res)=>{
    res.json(notes);
});

//POST Create a new note 

app.post('/notes' , (req , res)=>{
    const note = req.body
    notes.push(note);
    res.status(201).json({message : 'note added' , note})
})

//PUT Update Existing
app.put('/notes/:id' , (req , res)=>{
    const id = parseInt(req.params.id);
    if(notes[id]){
        notes[id] = req.body;
        res.json({message : 'note updates ' , note : notes[id]})
    }else {
        res.status(404).json({message : 'note not found'})
    }
})

// DELETE note by ID
app.delete('/notes/:id' , (req , res)=>{
    const id = parseInt(req.params.id);
    if(notes[id]){
        notes.splice( id  ,1)
        res.json({message : 'note deleted'})
    }else{
        res.status(404).json({message : 'note not found'})
    }
})


app.listen(PORT, ()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
})