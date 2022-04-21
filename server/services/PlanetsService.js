import { dbContext } from '../db/DbContext'

class PlanetsService {
  async getPlanetById(id) {
    const planet = await dbContext.Planets.findById(id)
    return planet
  }
}

export const planetsService = new PlanetsService()
