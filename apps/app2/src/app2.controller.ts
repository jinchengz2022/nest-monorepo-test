import { Controller, Get, Inject } from '@nestjs/common';
import { App2Service } from './app2.service';
import { Lib1Module, Lib1Service } from '@app/lib1';

@Controller()
export class App2Controller {
  constructor(private readonly app2Service: App2Service) {}

  @Inject(Lib1Service)
  private lib: Lib1Service;

  @Get('test')
  getHello(): string {
    return '3002';
  }

  @Get('lib')
  gg() {
    return this.lib.libtest()
  }
}
