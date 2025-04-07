import { IsEmail, IsInt, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserinfoDto {
    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    @Length(20, 100)
    address: string;

    @IsEmail()
    email: string;
}
