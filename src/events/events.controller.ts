import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

@Controller('events')
export class EventsController {
    @Get()
    findAll(){}

    @Get(':id')
    findOne(@Param('id') id){
        return id;
    }

    @Post()
    create(@Body() input){
        return input;
    }

    @Patch(":id")
    update(@Param('id') id , @Body() input){}

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id){}
}
