import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateContinentDto } from '../dtos/create-continent.dto'
import { Continent, ContinentDocument } from '../schemas/continents.schema'

@Injectable()
export class ContinentsRepository {
  constructor(@InjectModel(Continent.name) private readonly continentModel: Model<ContinentDocument>) {}

  async create(data: CreateContinentDto): Promise<Continent> {
    const continent = new this.continentModel(data)
    await continent.save()
    return continent
  }

  async findAll(): Promise<Array<Continent>> {
    return await this.continentModel.find({}, { __v: false }).exec()
  }
}
