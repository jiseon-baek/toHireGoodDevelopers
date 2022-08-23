import axios from 'axios';

export const baseUrl = 'https://api.github.com/';

export const API = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `token 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`,
  },
});
