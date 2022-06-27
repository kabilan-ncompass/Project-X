import{ IsEmail, MinLength, IsNotEmpty, IsOptional} from "class-validator";
export class CreateUserDto { 
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}