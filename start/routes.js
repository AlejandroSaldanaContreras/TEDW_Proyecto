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

}).
  prefix('api')