import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getCommits(owner: string, repo: string) {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`);
    return response.data;
  }

  async getCommitTree(url: string) {
    const response = await axios.get(url);
    return response.data;
  }

  async getCommitBlob(url: string) {
    const response = await axios.get(url);
    return response.data;
  }
}
