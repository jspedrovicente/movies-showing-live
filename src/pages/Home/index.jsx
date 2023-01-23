import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css'
import Svg from "../../assets/loading";
function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: '96626e4b63937ee3867120965009ab29',
                    language: "pt-BR",
                    page: 1,
                }           
            })
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false);
        }

        loadFilmes();
    }, [])

    if (loading) {
        return (
            <Svg />
        )
    }
    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}

            </div>
        </div>
    )
}

export default Home;