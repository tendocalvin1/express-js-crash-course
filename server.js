
const express = require('express')

const app = express();

app.get('/', (req, res)=>{
    res.send('<h2>Hello World</h2>');
});

app.get('/about', (req, res)=>{
    res.send('<h>About Route</h2>');
});
app.listen(8000, ()=> console.log(`Server is running on port 8000`));

