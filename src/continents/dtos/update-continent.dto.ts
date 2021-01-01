import { Field, InputType } from '@nestjs/graphql'
import { IsNumber, IsOptional, IsString } from 'class-validator'

@InputType()
export class UpdateContinentDto {
  @IsString()
  @IsOptional()
  @Field()
  name?: string

  @IsNumber()
  @IsOptional()
  @Field(() => Number)
  territorialExtension?: number

  @IsNumber()
  @IsOptional()
  @Field(() => Number)
  quantityCountries?: number

  @IsNumber()
  @IsOptional()
  @Field(() => Number)
  population?: number
}
