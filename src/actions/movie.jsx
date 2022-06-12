import axios from "axios"

export const fetchData = (search) => {
    return async (dispatch) => {
        dispatch({type: "GET_MOVIE_PENDING"})
        await axios.create({
          baseURL: "https://www.omdbapi.com/?apikey=4db957b3&s="
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