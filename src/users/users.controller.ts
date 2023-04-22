import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Post('/create')
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        const user = await this.userService.createUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            statusCode: 201,
            message: 'User Succesfuly Created',
            user: user
        });
    }

    @Get('/get')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json({
            statusCode: 200,
            message: 'Users Succesfuly Listed',
            users: users
        });
    }

    @Get('/get/:userID')
    async getUser(@Res() res, @Param('userID') userID) {
        const user = await this.userService.getUser(userID);
        if (!user) throw new NotFoundException('User Does not exists');
        return res.status(HttpStatus.OK).json(user);
    }

    @Delete('/delete')
    async deleteUser(@Res() res, @Query('userID') userId) {
        const userDeleted = await this.userService.deleteUser(userId);
        if (!userDeleted) throw new NotFoundException('User Does not exists');
        return res.status(HttpStatus.OK).json({
            statusCode: 200,
            message: 'User Deleted Succesfuly',
            userDeleted: userDeleted
        });
    }

    @Put('/update')
    async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Query('userID') userID) {
        const updadteUser = await this.userService.updateUser(userID, createUserDTO);
        if (!updadteUser) throw new NotFoundException('User Does not exists');
        return res.status(HttpStatus.OK).json({
            statusCode: 201,
            message: 'Product Updated Succesfuly',
            updadteUser: updadteUser
        });
    }

}
