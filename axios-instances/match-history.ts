import axios from 'axios'
import data from '../secret.json'

const instance = axios.create({
    baseURL: "https://americas.api.riotgames.com/lol/",
    headers: {
        "X-Riot-Token": data.RIOT_API_KEY
    }
})

export default instance