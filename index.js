const express =require('express');
const app = express();

app.listen(80, ()=>{
    console.log('Server is listening on port 80');
});

let jobs = [
    {
        id: 1, 
        title: 'Web Developer',
        description: 'Code websites',
        salary: 80000
    },
    {
        id: 2, 
        title: 'Web Designer',
        description: 'Design websites',
        salary: 90000
    },{
        id: 3, 
        title: 'Senior Web Developer - Web Developer - Web Manager',
        description: 'Oversee Build websites',
        salary: 120000
    }
];

app.get('/jobs', (req, res)=>{
    res.send(jobs);
});

app.get('/', (req, res)=>{
    res.send('Hello JobiJobber. Welcome here!');
});