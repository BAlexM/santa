import { PartialType } from '@nestjs/mapped-types';
import { NewKidDto } from './create-kid.dto';

export class UpdateKidDto extends PartialType(NewKidDto) {}
