'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.group(() => {
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');
  Route.get('auth/users', 'UserController.index');
  
  Route.get('rols', 'RolController.index');
  Route.post('rols', 'RolController.create');
  Route.delete('rols/:id', 'RolController.destroy');
  Route.patch('rols/:id', 'RolController.update');

<<<<<<< HEAD
  Route.get('modality', 'SurveyModalityController.index');
  Route.post('modality', 'SurveyModalityController.create');
  Route.delete('modality/:id', 'SurveyModalityController.destroy');
  Route.patch('modality/:id', 'SurveyModalityController.update');

  Route.get('question', 'QuestionController.index');
  Route.post('question', 'QuestionController.create');
  Route.delete('question/:id', 'QuestionController.destroy');
  Route.patch('question/:id', 'QuestionController.update');

  Route.get('survey', 'SurveyController.index');
  Route.post('survey', 'SurveyController.create');
  Route.delete('survey/:id', 'SurveyController.destroy');
  Route.patch('survey/:id', 'SurveyController.update');

=======
  Route.get('status', 'StatusController.index');
  Route.post('status', 'StatusController.create');
  Route.delete('status/:id', 'StatusController.destroy');
  Route.patch('status/:id', 'StatusController.update');

  Route.get('alerts', 'AlertController.index');
  Route.post('alerts', 'AlertController.create');
  Route.delete('alerts/:id', 'AlertController.destroy');
  Route.patch('alerts/:id', 'AlertController.update');

  Route.get('test_type', 'TestTypeController.index');
  Route.post('test_type', 'TestTypeController.create');
  Route.delete('test_type/:id', 'TestTypeController.destroy');
  Route.patch('test_type/:id', 'TestTypeController.update');

  Route.get('order', 'OrderController.index');
  Route.post('order', 'OrderController.create');
  Route.delete('order/:id', 'OrderController.destroy');
  Route.patch('order/:id', 'OrderController.update');

  Route.get('trazability', 'TrazabilityController.index');
  Route.post('trazability', 'TrazabilityController.create');
  Route.delete('trazability/:id', 'TrazabilityController.destroy');
  Route.patch('trazability/:id', 'TrazabilityController.update');
>>>>>>> bb5c378348650649a8393449de17553873233e80
}).
  prefix('api')