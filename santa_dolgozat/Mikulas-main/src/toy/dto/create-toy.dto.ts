import { IsIn, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
export class NewToyDto {
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsString()
    @IsNotEmpty()
    @IsIn(['wood', 'metal','plastic', 'other'])
    material:string;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    weight: number;
}
