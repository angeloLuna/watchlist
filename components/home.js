import Styled from "styled-components"
import Movie from "./movie"
import Link from 'next/Link'

const HomeStyled = Styled.div`
    padding: 4rem;
    background: #222423;
    color: white;
    .movie-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;    
    }
    .title {
      font-size: arial;
    }
    .link {
      text-decoration: underline;
      cursor: pointer;
    }
    .signature {
      position: absolute;
      color: white;
      bottom: 3rem;
      left: 4rem;
    }
`

const Home = ({
  movies,
}) => (
  <HomeStyled>
    <div className="header">
      <h1 className="title">Pulpo-movies</h1>
      <span className="link">Watch list</span>
    </div>
    <div className="movie-list">
      {
        movies && (
          movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))
        )
      }
    </div>
    <span className="signature">By @angeloLuna</span>
  </HomeStyled>
)

export default Home