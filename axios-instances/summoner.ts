import axios from 'axios'
import data from '../secret.json'

const instance = axios.create({
    baseURL: `${data.BASE_URL}`,
    headers: {
        "X-Riot-Token": data.RIOT_API_KEY
    }
})

export default instance