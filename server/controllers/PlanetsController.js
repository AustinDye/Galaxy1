import { planetsService } from '../services/PlanetsService'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('/:id', this.getPlanet)
  }

  async getPlanet(req, res, next) {
    try {
      const planet = await planetsService.getPlanetById(req.params.id)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}
