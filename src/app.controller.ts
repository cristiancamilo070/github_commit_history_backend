import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/')
  welcome() {
    return 'Welcome to the NestJS backend for Github Commit History ! ';
  }
  @Get('/api/commits')
  getCommits(@Query() query) {
    const { owner, repo } = query;
    return this.appService.getCommits(owner, repo);
  }

  @Get('/api/commitTree')
  getCommitTree(@Query() query) {
    const { url } = query;
    return this.appService.getCommitTree(url);
  }

  @Get('/api/commitBlob')
  getCommitBlob(@Query() query) {
    const { url } = query;
    return this.appService.getCommitBlob(url);
  }
}
