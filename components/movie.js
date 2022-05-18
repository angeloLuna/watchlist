import Styled from 'styled-components'
import Image from 'next/image'

const MovieStyled = Styled.div`
    color: white;
    width: 10rem;
    height: 15rem;
    border-radius: 5px;
    overflow: hidden;
    margin: 1rem 1rem;
    position: relative;
    cursor: pointer;
    .movie-content {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0, .4)
    }
  .movie-text {
    padding: 5px;
    display: flex;
    align-items: flex-end;
    height: 100%;  
    position: relative;
  }
  .title {
      font-size: 12px;
      font-family: arial;
  }
  .play {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  }
  .like {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    cursor: pointer;
    z-index: 5;
  }
  .like:hover {
    // border: 1px solid;
  }
`

const Movie = ({
  movie,
  liked,
  handleLiked,
}) => (
  <MovieStyled>
    {
      // console.log(movie)
    }
    <Image
      src={movie.Poster}
      alt="Picture of the author"
      layout='fill'
      objectFit='contain'
    />
    <div className='movie-content'>
      <div className='movie-text'>
        <div className='like' onClick={() => handleLiked(movie.imdbID)}>
          {console.log(movie)}
          {
            movie.liked ? (
              <Image
                src="/h.png"
                alt="Picture of the author"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src="/h1.png"
                alt="Picture of the author"
                width={30}
                height={30}
              />
            )
          }

        </div>
        <div className='play'>
          <Image
            src="/play3.png"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>
        <span className='title'>{movie.Title}</span>
      </div>
    </div>
  </MovieStyled>
)

export default Movie