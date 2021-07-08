import { Controller, Get } from '@nestjs/common';

@Controller('testing')
export class TestingController {
  @Get()
  testConnection(){
    return 'testing'
  }
}
