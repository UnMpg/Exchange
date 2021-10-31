const { json } = require('express');
const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/customers',(req,res)=>{
    const customers = [
        {id : 1, fristname: 'fendy',lastname:'asnanda'},
        {id : 2, fristname: 'erik',lastname:'eka'},
        {id : 3, fristname: 'yunus',lastname:'rahmadhani'}
    ];

    res.json(customers);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})