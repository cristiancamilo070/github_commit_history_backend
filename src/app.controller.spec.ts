import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  describe('getCommits', () => {
    it('should return commits from appService', async () => {
      const owner = 'someOwner';
      const repo = 'someRepo';
      const expectedResponse = ['commit1', 'commit2'];

      jest.spyOn(appService, 'getCommits').mockResolvedValue(expectedResponse);

      expect(await appController.getCommits({ owner, repo })).toEqual(expectedResponse);
    });
  });

  describe('getCommitTree', () => {
    it('should return commit tree from appService', async () => {
      const url = 'someUrl';
      const expectedResponse = { /* your expected commit tree object */ };

      jest.spyOn(appService, 'getCommitTree').mockResolvedValue(expectedResponse);

      expect(await appController.getCommitTree({ url })).toEqual(expectedResponse);
    });
  });

  describe('getCommitBlob', () => {
    it('should return commit blob from appService', async () => {
      const url = 'someUrl';
      const expectedResponse = { /* your expected commit blob object */ };

      jest.spyOn(appService, 'getCommitBlob').mockResolvedValue(expectedResponse);

      expect(await appController.getCommitBlob({ url })).toEqual(expectedResponse);
    });
  });
});
