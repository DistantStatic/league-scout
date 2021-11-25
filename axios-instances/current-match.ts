import axios from 'axios'

const BASE_URL:string = process.env.BASE_URL
const RIOT_API_KEY:string = process.env.RIOT_API_KEY

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Riot-Token": RIOT_API_KEY
    }
})

export default instance