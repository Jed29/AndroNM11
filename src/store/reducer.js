const initialState={
    movies =[],
    topRated=[]
}

export default function reducer(state = initialState,action){
    const {type,payload} = action
    if(type== "GETMOVIES"){
        return{...state,movies:payload}
    }
    else if(type==="TOPRATED"){
        return{...state,topRated:payload}
    }
    return state
}