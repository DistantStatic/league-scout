import axios from 'axios'
import data from '../secret.json'

const instance = axios.create({
    baseURL: `${data.BASE_URL}summoner/v4/summoners/`,
    headers: {
        "X-Riot-Token": data.RIOT_API_KEY
    }
})

export default instance