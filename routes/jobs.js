const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');



// form da rota de envio
router.get('/add', (rec,res) => {
  res.render('add')
})



// detalhe da vaga
router.get('/view/:id', (req, res) => Job.findOne({
  where: {id: req.params.id}
}).then(job => {

  res.render('view', {
    job
  });

}).catch(err => console.log(err)));

// add job via post
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