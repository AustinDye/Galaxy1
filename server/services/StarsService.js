import { dbContext } from '../db/DbContext.js'

class StarsService {
  async getStarById(id) {
    const star = await dbContext.Stars.findById(id)
    return star
  }

  async findStars(name = '', offset = 0) {
    const filter = new RegExp(name, 'ig')
    return await dbContext.Profiles
      .aggregate([{
        $match: { name: filter }
      }])
      .collation({ locale: 'en_US', strength: 1 })
      .skip(Number(offset))
      .limit(20)
      .exec()
  }
}

export const starsService = new StarsService()
