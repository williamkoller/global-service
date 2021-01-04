import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { Country } from 'src/contries/schemas/contries.schema'

export type ContinentDocument = Continent & Document

@Schema({ _id: true, timestamps: true })
@ObjectType()
export class Continent {
  @Field(() => ID)
  _id: string

  @Prop()
  @Field()
  name: string

  @Prop()
  @Field()
  area: {
    kilometers: number
    percentage: number
  }

  @Prop()
  @Field()
  population: {
    approximate: number
    percentage: number
  }

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Country' }] })
  @Field()
  countries: Array<Country>

  @Prop()
  @Field(() => Number)
  totalCountries: number
}

export const ContinentSchema = SchemaFactory.createForClass(Continent)
