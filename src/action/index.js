import axios from 'axios'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/"

const getPostsAction = (posts) => {
  return {
    type: "GET_POSTS",
    payload: {
      posts,
    }
  }
};

export const getPostsDetailAction = (id) => {
  return {
    type: "GET_POSTS_DETAIL",
    payload: {
      id,
    }
  };
};

export const setCommentsAction = (post) => {
  return {
    type: "SET_COMMENTS",
    payload: {
      post,
    }
  };
};

//Get Posts
export const getPosts = () => async (dispatch) => {
  const headers = { headers: { auth: window.localStorage.getItem("token") } }
  const response = await axios.get(`${baseURL}posts`, headers)

  dispatch(getPostsAction(response.data.posts))
}

//Get Post Detail
export const getPostsDetail = (id) => async (dispatch) => {
  const headers = { headers: { auth: window.localStorage.getItem("token") } }
  const response = await axios.get(`${baseURL}posts/${id}`, headers)

  dispatch(setCommentsAction(response.data.post))
}

//Create Posts
export const createPost = (text, title) => async (dispatch) => {
  const createPostInformation = {
    text,
    title
  }
  const headers = { headers: { auth: window.localStorage.getItem("token") } }

  try {
    await axios.post(`${baseURL}posts`, createPostInformation, headers)
    dispatch(getPosts())

  } catch{
    window.alert("Erro criação")
  }
}

//Create Comment
export const createComment = (text, id) => async (dispatch) => {
  const createCommentInformation = {
    text
  }
  const headers = { headers: { auth: window.localStorage.getItem("token") } }

  try {
  await axios.post(`${baseURL}posts/${id}/comment`, createCommentInformation, headers);
  dispatch(getPostsDetail(id))

  } catch{
    window.alert("Erro criação")
  }
}

//Vote
export const vote = (id, direction) => async (dispatch) => {
  const headers = { headers: { auth: window.localStorage.getItem("token") } }
  const voteInformation = {
    "direction": direction
  }

  await axios.put(`${baseURL}posts/${id}/vote`, voteInformation, headers)
  dispatch(getPosts())
}

//Vote Comment
export const voteComment = (id, commentId, direction) => async (dispatch) => {
  const headers = { headers: { auth: window.localStorage.getItem("token") } }
  const voteCommentInformation = {
    "direction": direction
  }

  await axios.put(`${baseURL}posts/${id}/comment/${commentId}/vote`, voteCommentInformation, headers)
  dispatch(getPostsDetail(id))
}