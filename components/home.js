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
    .subtitle {
      font-size: 18px;
    }
    .watch-list {
      margin-top: 3rem;
      border-bottom: 1px solid gray;
    }
    .movies {
      margin-top: 3rem;
    }
`

const Home = ({
  movies,
  handleLiked,
  watchList
}) => (
  <HomeStyled>
    <div className="header">
      <h1 className="title">Pulpo-movies</h1>
      <span className="link">Watch list</span>
    </div>
    <div className="watch-list">
      <h2 className="subtitle">Watch List</h2>
      <div className="movie-list">
        {
          watchList && (
            watchList.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} handleLiked={handleLiked} />
            ))
          )
        }
      </div>
    </div>
    <div className="movies">
    <h2 className="subtitle">Movie List</h2>
      <div className="movie-list">
        {
          movies && (
            movies.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} handleLiked={handleLiked} />
            ))
          )
        }
      </div>
    </div>
    <span className="signature">By @angeloLuna</span>
  </HomeStyled>
)

export default Home