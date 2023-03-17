import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateEventDto } from 'src/create-event.dto';
import { UpdateEventDto } from 'src/update-event.dto';

@Controller('events')
export class EventsController {
    @Get()
    findAll(){}

    @Get(':id')
    findOne(@Param('id') id){
        return id;
    }

    @Post()
    create(@Body() input:CreateEventDto){
        return input;
    }

    @Patch(":id")
    update(@Param('id') id , @Body() input:UpdateEventDto){}

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id){}
}
