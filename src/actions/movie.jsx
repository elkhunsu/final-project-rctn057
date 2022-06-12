import axios from "axios"
import ENV from "../env"

export const fetchData = (search) => {
    return async (dispatch) => {
        dispatch({type: "GET_MOVIE_PENDING"})
        await axios.create({
          baseURL: `https://www.omdbapi.com/?apikey=${ENV.apiKey}&s=`
        })
        .get(search)
        .then(res => res.data.Search)
        .then(data => 
          dispatch({
            type: "GET_MOVIE_SUCCESS", 
            payload : data
          })
        )
    }
}