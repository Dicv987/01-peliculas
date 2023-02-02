import { useParams } from "react-router-dom"
import { get } from "../data/httpclient"
import { useEffect, useState } from "react";

export function MovieDetails() {

    const { movieId } = useParams()
    console.log({ movieId })
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            setMovie(data)
            console.log(data)
        })
    },[movieId])

    return (<div>
        <img src="" alt="" />
    </div>)

}