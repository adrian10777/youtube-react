import axios from 'axios';

const KEY = 'AIzaSyAzg3CV7mLMiykShPUM5bw2F8_nN47N3ms;'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});