const todoRoute = require('./todoRoutes');
const services = require('../services/TodoService');
const TodoService = require('../services/TodoService');
const frontendRoutes = require('./frontendRoutes');

module.exports = (app) => {
  app.use('/health', (req, res) => {
    res.send("I'm in a good working condition");
  });

  app.use('/api/v1/todos', todoRoute);

  // app.use('/todos', async (request, response) => {
  //   const todoList = await TodoService.getAllTodos();
  //   response.render('index', {todos: todoList})
  //   //response.render('createTodo');
  // })

  app.use('/todos', frontendRoutes)
  // app.get('/', (req, res) => {
  //   console.log(`I go here`);
  //   res.json({"success": 'You just Ping me !'});
  // });
};




// Route
// middleware use function with route pattern and handler
// http verb of the express function
// middleware use function with route pattern and exported router module


// User Module
// Post Module

// /users => all user
// /users/:id => particular user /users/ade

// /posts => all user
// /posts/:id => particular post
