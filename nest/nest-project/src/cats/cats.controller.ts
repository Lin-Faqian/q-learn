import { Controller, Get, HttpCode, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    // console.log(request)
    return "通过nest cli创建的"
  }
  @Get(':id/:random')
  findOne(@Param() param): string {
    console.log(param)
    return "实时" + param.id + param.random
  }
  @Post()
  find(@Req() req: Request, @Res() res: Response) {
    console.log(req)
    return res.status(HttpStatus.OK).send({
      msg: 'ok'
    })
  }
}
