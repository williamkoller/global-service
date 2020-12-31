import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

@InputType()
export class CreateContinentDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @Field()
  name: string

  @IsNumber()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @Field()
  territorialExtension: number

  @IsNumber()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @Field()
  quantityCountries: number

  @IsNumber()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  @Field()
  population: number
}
