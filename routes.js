const express = require('express');
const router = express.Router(); // this instatates a route

let participants = [
  {
    name: 'Anthony',
    id: 1,
  },
  {
    name: 'Olubode',
    id: 2,
  },
  {
    name: 'Oluwaseun',
    id: 3,
  },
  {
    name: 'Jude',
    id: 4,
  },
  {
    name: 'Joseph',
    id: 5,
  },
];
router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/participants', (req, res) => {
  res.send(participants);
});
// Post request adding a participant
router.post('/participants', (req, res) => {
  participants.push({ name: req.body.name, id: participants.length + 1 });
  res.status(201).send({ Message: 'Participant Added' });
});
//Update the participant: Being able to change a participant's name: PUT REQUEST
router.put('/participants/:id', (req, res) => {
  const participant = participants.find(
    (participant) => participant.id === parseInt(req.params.id)
  );
  if (participant) {
    participant.name = req.body.name;
    res.status(200).send({ Message: 'participant updated' });
  } else {
    res.status(404).send({ Message: 'Participant not found' });
  }
});
// Delete A participant
router.delete('/participants/:id', (req, res) => {
  const participant = participants.find(
    (participant) => participant.id === parseInt(req.params.id)
  );
  if (participant) {
    participants = participants.filter(
      (participant) => participant.id !== parseInt(req.params.id)
    );

    res.status(200).send({ Message: 'Participant deleted' });
  } else {
    res.status(404).send({ Message: 'Participant not found' });
  }
});

router.get('/participants/customer', (req, res) => {
  res.send('This is the Participants customer route');
});

router.get('/participants/:id', (req, res) => {
  console.log(req.params.id);
  const participant = participants.find(
    (participant) => participant.id === parseInt(req.params.id)
  );
  if (participant) {
    res.send(participant);
  } else {
    res.status(404).send('Participant not found');
  }
});

router.all('*', (req, res) => {
  res.send('We are yet to make this endpoint');
});

module.exports = router;
