import axios from 'axios'
import {ref} from 'vue'

const getVideoList = async ()=>{
    try {
        const result = await axios.get('http://localhost:8080/videos')
        return result.data
    } catch (error) {
        return {
            mess: 'clinet error',
            error
        }    
    }
}

const useVideo = ()=>{
    const videoList = ref([])
    // get All video from server 

    async function fetchVideos(){
        videoList.value= await getVideoList()
    }

    return{
        videoList, fetchVideos
    }
}

export default useVideo
