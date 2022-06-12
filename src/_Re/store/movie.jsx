export const GET_MOVIE_PENDING = 'GET_MOVIE_PENDING'
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS'
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR'

const initialState = { 
  isLoading: false,
  data: [],
}

const movie = (state = initialState, action, payload) => {
  window.console.log(action);
  switch (action?.type) {
    case "GET_MOVIE_PENDING":
        return {...state, isLoading: true}
    case "GET_MOVIE_SUCCESS":
        return {...state, isLoading: false}
    case "GET_MOVIE_ERROR":
        return {...state, data: payload}
    default:
      return state;
  }
}

export default movie;
