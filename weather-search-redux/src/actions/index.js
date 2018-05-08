import axios from 'axios'

const API_KEY = 'c494c46b27d6b033940702e659319e48'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
} 