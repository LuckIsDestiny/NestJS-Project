import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateUserinfoDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    @Length(20, 100)
    address: string;

    @IsEmail()
    email: string;
}
