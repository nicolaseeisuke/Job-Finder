const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

// adiconar job via job

router.get('/add', (rec,res) => {
  res.render('add')
})

router.post('/add', (req,res) => {

  let {title, salary, company, description,email, new_job} = req.body;

  // inserir

  Job.create({
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