import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class NewKidDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    address: string;
    @IsBoolean()
    @IsNotEmpty()
    good: boolean = false;
}


