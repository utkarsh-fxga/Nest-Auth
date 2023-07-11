import { Controller, Get, Post } from "@nestjs/common";


@Controller('user')
export class UserController {

    @Get()
    findAllUser() : string {
        return 'This api will find all users'
    }

    @Post()
    addUser() : string {
        return 'This api will add the users'
    }
}