import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ContinentDocument = Continent & Document

@Schema({ _id: true, timestamps: true })
@ObjectType()
export class Continent {
  @Field(() => ID)
  _id: string

  @Prop()
  @Field()
  name: string

  @Prop({ maxlength: 20 })
  @Field(() => Number)
  territorialExtension: number

  @Prop()
  @Field()
  quantityCountries: number

  @Prop({ maxlength: 20 })
  @Field(() => Number)
  population: number
}

export const ContinentSchema = SchemaFactory.createForClass(Continent)
