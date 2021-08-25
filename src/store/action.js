export function getMovie(payload){
    return{
        type:"GETMOVIE",payload
    }
}

export function getTopRated(payload){
    return{
        type:"TOPRATED",payload
    }
}


export function fetchMovie(){
    return (dispatch)=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e0f5bb9b677943b4c17e6b3b04a28259&language=en-US&page=1`)
        .then(response=>response.json())
        .then((movie)=>{
            dispatch(getMovie(movie))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export function fetchTopRated(){
    return (dispatch)=>{
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e0f5bb9b677943b4c17e6b3b04a28259&language=en-US&page=1")
        .then(response=>response.json())
        .then((topRated)=>{
            dispatch(getTopRated(topRated))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}