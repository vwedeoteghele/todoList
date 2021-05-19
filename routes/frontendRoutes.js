const router = require('express').Router();
const frontendController = require('../controllers/frontendController');

router.get('/', (request, response) => {
    frontendController.createTodo(request,response)
})

router.get('/process', (request, response) => {
    frontendController.processTodo(request, response)
})

router.get('/all', (req, res) => {
    frontendController.getAll(req, res)
})

router.get('/view/:uniqueId', (req, res) => {
    frontendController.getOne(req, res)
})

router.get('/update/:uniqueId', (req, res) => {
    frontendController.updateTodo(req, res)
})

router.post('/updateTodo/:uniqueId', (req, res) => {
    frontendController.processUpdateTodo(req, res)
})

router.get('/delete/:uniqueId', (req, res) => {
    frontendController.deleteOne(req, res)
})

router.post('/delete/:uniqueId', (req, res) => {
    frontendController.processDelete(req, res)
})

router.get('/done/:uniqueId', (req, res) => {
    frontendController.complete(req, res)
})

router.post('/done/:uniqueId', (req, res) => {
    frontendController.processComplete(req, res)
})

router.get('/completedtodos', (req, res) => {
    frontendController.getAllCompleted(req, res)
})

router.get('/viewcompleted/:uniqueId', (req, res) => {
    frontendController.getOneCompleted(req, res)
})
module.exports = router
