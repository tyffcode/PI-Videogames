import { 
    GET_VIDEO_GAMES, 
    GET_VIDEO_DETAIL
} from "./actions";

const initialState = {
    videoGames: [],
    genres: [],
    gameDetail: [],
    copiaVideoGames: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEO_GAMES:
            return {
            ...state,
            videoGames: action.payload,
            copiaVideoGames: action.payload,
            };
        case GET_VIDEO_DETAIL:
            return {
                ...state,
                gameDetail: action.payload,
            };


        default:
            return { ...state };
    }
};

export default reducer;