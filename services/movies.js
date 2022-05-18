import axios from 'axios'
import { BASE_URL } from './constants'

const fetchMovie = async () => {
    const response = await axios.get(`${BASE_URL}/?s=Batman&page=2&apikey=fdf94f87`)
    return response
}

const fetchMovieById =  async (id) => {
    const response = await axios.get(`${BASE_URL}/?i=${id}&plot=full&apikey=fdf94f87`)
    return response
}

export {
    fetchMovie,
    fetchMovieById,
}