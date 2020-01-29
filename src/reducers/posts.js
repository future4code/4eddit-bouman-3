const initialState = {
    allPosts:[],
    selectIdPost:"",
    selectPost:{}
}

const posts = (state = initialState, action) => {
    switch(action.type){
       case "GET_POSTS":
            return {...state, allPosts: action.payload.posts}
        case "GET_POSTS_DETAIL":
            return {...state, selectIdPost: action.payload.id}
        case "SET_COMMENTS":
            return {...state, selectPost: action.payload.post}
        default:
            return state
    }
}

export default posts;  