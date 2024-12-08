import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ToyService } from './toy.service';
import { NewToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';

@Controller('toys')
export class ToyController {
  constructor(private readonly toyService: ToyService) {}

  @Post()
  create(@Body() newToyDto: NewToyDto) {
    return this.toyService.create(newToyDto);
  }

  @Get()
  findAll() {
    return this.toyService.findAll();
  }
  @Put('/:toyid(\\d+)/children/:kidid(\\d+)')
  async addToytoKid(@Param('toyid') toyid: string, @Param('kidid') kidid: string) {
    return await this.toyService.addToytoKid(+kidid,+toyid);
  }

  @Delete('/:toyid(\\d+)/children/:kidid(\\d+)')
  async removeToytoKid(@Param('toyid') toyid: string, @Param('kidid') kidid: string) {
    return await this.toyService.removeToytoKid(+kidid,+toyid);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToyDto: UpdateToyDto) {
    return this.toyService.update(+id, updateToyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toyService.remove(+id);
  }
}
