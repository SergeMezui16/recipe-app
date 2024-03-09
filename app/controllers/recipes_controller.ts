import Recipe from '#models/recipe'
import type { HttpContext } from '@adonisjs/core/http'

export default class RecipesController {
  async index({ view }: HttpContext) {
    const recipes = await Recipe.all()

    // console.log(recipes)

    return view.render('pages/home', { recipes: recipes })
  }
}
