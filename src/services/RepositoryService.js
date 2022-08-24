import {API} from './api';

export const getPublicRepo = (inputText, lang) => {
  const url = `search/repositories?q=${inputText}+language:${lang}&sort=stars&order=desc`;

  return API.get(url);
};

export const deleteRepo = data => {
  const url = ``;
};
