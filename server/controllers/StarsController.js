
import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getStars)
      .get('/:id', this.getStars)
  }

  async getStars(req, res, next) {
    try {
      const stars = await starsService.findStars(req.query.name, req.query.offset)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getStar(req, res, next) {
    try {
      const star = await starsService.getStarById(req.params.id)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
