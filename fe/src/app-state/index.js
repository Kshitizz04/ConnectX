import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  mode:'light',
  user:{firstName:"fake",lastName:"user"},
  token:null,
  posts: [],
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode(state){
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setLogin(state, action){
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout(state){
            state.user = null;
            state.token = null;
        },
        setFriends(state, action){
            if(state.user){
                state.user.friends = action.payload.friends;
            }
            else{
                console.error("user friends non existent");
            }
        },
        setPosts(state, action){
            state.posts = action.payload.posts;
        },
        setPost(state, action){
            const updatedPosts = state.payload.map((post)=>{
                if(post._id === action.payload.post_id){
                    return action.payload.post;
                }
                return post;
            })
            state.posts = updatedPosts;
        }
    }
})

export const { setFriends, setLogin, setLogout, setMode, setPost, setPosts } = authSlice.actions;

export default authSlice.reducer;