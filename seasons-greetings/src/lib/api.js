import axios from 'axios'

export function getJoke() {
  return axios.get('https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
}