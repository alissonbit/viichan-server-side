import { Controller, Get } from '@nestjs/common';

@Controller('testing')
export class TestingController {
  @Get()
  test(): any{
    return true;
  }
}
