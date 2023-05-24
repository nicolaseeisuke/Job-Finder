const express = require('express');
const router = express.Router();
const job     = require('../models/job');

// adiconar job via job

router.post('/add', (req,res) => {

  let {title, salary, company, description,email, new_job} = req.body;

  // inserir

  job.create({
    title,
    salary,
    company,
    description,
    email,
    new_job,
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err))

})

module.exports = router