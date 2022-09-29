const express = require('express');

const app = express();

app.get('/me', (request, response) => {
  console.log(request.method);
  response.status(200).json ({
    name: 'Luis Zarza',
    age: 32,
    country: 'México'
    
  })
})

app.post('/goals', (request, response) => {
  console.log(request.method);
  response.status(200).json ({
    hobbie1: 'coding',
    hobbie2: 'fronton',
    hobbie3: 'reading'

  })
})

app.patch('/goals', (request, response) => {
  console.log(request.method);
  response.status(200).json ({
    goal1: 'become a full stack developer',
    goal2: 'become a full stack developer'
  })
})

app.put('/business', (request, response) => {
  console.log(request.method);
  response.status(200).json ({
    company1: 'PLaySatation',
    company2: 'Unity technologies',
    company3: 'Salvo Software'
  })
})

app.listen(8000, () => {
  console.log('Server started port 8000');
})
