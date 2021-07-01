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
  Route.post('/user', 'UserController.get_user');
  
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
  Route.get("surveyDT", "SurveyController.dataTableSurvey");

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

  Route.get('medicine', 'MedicineController.index');
  Route.post('medicine', 'MedicineController.create');
  Route.delete('medicine/:id', 'MedicineController.destroy');
  Route.patch('medicine/:id', 'MedicineController.update');

  Route.get('multimedia','MultimediaController.index');
  Route.post('multimedia','MultimediaController.create');
  Route.delete('multimedia/:id','MultimediaController.destroy');
  Route.patch('multimedia/:id','MultimediaController.update');

  Route.get('multimediaConsultation','MultimediaConsultationController.index');
  Route.post('multimediaConsultation','MultimediaConsultationController.create');
  Route.delete('multimediaConsultation/:id','MultimediaConsultationController.destroy');
  Route.patch('multimediaConsultation/:id','MultimediaConsultationController.update');
  
  Route.get('private_consultation','PrivateConsultationController.index');
  Route.post('private_consultation','PrivateConsultationController.create');
  Route.delete('private_consultation','PrivateConsultationController.destroy');
  Route.patch('private_consultation','PrivateConsultationController.update');
  Route.get('private_consultation/:id','PrivateConsultationController.selectByUser');
  
  Route.get('recipe','RecipeController.index');
  Route.post('recipe','RecipeController.create');
  Route.delete('recipe','RecipeController.destroy');
  Route.patch('recipe','RecipeController.update');
  
  Route.get('type_consultation','TypeConsultationController.index');
  Route.post('type_consultation','TypeConsultationController.create');
  Route.delete('type_consultation','TypeConsultationController.destroy');
  Route.patch('type_consultation','TypeConsultationController.update');
  


}).
  prefix('api')