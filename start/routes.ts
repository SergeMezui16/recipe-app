/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RecipesController = () => import('#controllers/recipes_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [RecipesController, 'index'])
