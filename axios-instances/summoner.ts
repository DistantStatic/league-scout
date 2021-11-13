import axios from 'axios'
import data from '../secret.json'

const API_KEY: string = process.env.RIOT_API_KEY || data.RIOT_API_KEY

const instance = axios.create({
    baseURL: `${data.BASE_URL}`,
    headers: {
        "X-Riot-Token": API_KEY
    }
})

export default instance