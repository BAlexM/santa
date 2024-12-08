import { PartialType } from '@nestjs/mapped-types';
import { NewToyDto } from './create-toy.dto';

export class UpdateToyDto extends PartialType(NewToyDto) {}
