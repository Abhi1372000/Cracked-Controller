import axios from "axios";
import { credentials } from "../config/creds"

export default axios.create({
    baseURL: credentials.BASE_URL,
    params:{
        key: credentials.API_KEY
    }
})