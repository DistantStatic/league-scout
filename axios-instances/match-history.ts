import axios from 'axios'

const RIOT_API_KEY = process.env.RIOT_API_KEY

const instance = axios.create({
    baseURL: "https://americas.api.riotgames.com/lol/",
    headers: {
        "X-Riot-Token": RIOT_API_KEY
    }
})

export default instance