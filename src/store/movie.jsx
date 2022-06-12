const initialState = {
    isLoading: false,
    data: []
}

const movie = (state = initialState, action) => {
    switch (action?.type) {
        case "GET_MOVIE_PENDING":
            return {...state, isLoading: true}
        case "GET_MOVIE_SUCCESS":
            return {...state, isLoading: false, data: action.payload }
        case "GET_MOVIE_ERROR":
            return {...state, isLoading: false}
        default:
          return state;
      }
}

export default movie;