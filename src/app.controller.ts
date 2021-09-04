import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import path from 'path/posix';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id/code/:user_code')
  getHello(
    @Param('id') user_id: number,
    @Param('user_code') code:string
    ): any {
      console.log('El Parametro Id es => ', user_id);
      console.log('El Parametro user code es => ', code);
      return this.appService.getHello();
  }

  @Post(':id')
  postData(@Param('id')id: number, @Body() data: any): string {
    console.log('Por el Body se esta enviando', data);
    return data;
  }

}
