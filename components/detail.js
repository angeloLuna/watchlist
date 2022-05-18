import Styled from 'styled-components'
import Image from 'next/image'

const DetailStyled = Styled.div`
    background: #222423;
    color: white;
    padding: 4rem;
    .image {
      width: 20rem;
      margin: 2rem 0;
      border-radius: 5px;
    }
  .detail-text {
    display: flex;
    flex-direction: column;
  }
  .detail-text__text {
    margin: 10px 0;
  }
  .label {
    border: 1px solid white;
    margin-right: 5px;
    border-radius: 20px;
    padding: 5px;
    font-size: 12px;
    background: white;
    color: black;
  }
  .labels__container {
    margin: 1rem 0;
  }
  .mini {
    font-size: 12px;
  }
`

const Labels = ({
  genres
}) => {
  let arr = []
  if (genres) {
    arr = genres.split(",")
  }
  return (
    <div>
      {
        arr && arr.map((item) => (
          <span className='label'>{item}</span>
        ))
      }
    </div>
  )
}

const DetailLayout = ({
  movie
}) => (
  <DetailStyled>
    {
      console.log({ movie })
    }
    <h1>{movie.Title}</h1>
    <div className='image'>
      {
        movie.Poster && (
          <Image
            src={movie.Poster}
            alt="Picture of the author"
            width="100%" height="100%" layout="responsive" objectFit="contain"
          />
        )
      }
    </div>
    <div className='detail-text'>
      <div className='labels__container'>
        <Labels genres={movie.Genre} />
      </div>
      <span className='detail-text__text mini'>{`${movie.Released}, ${movie.Runtime}`}</span>
      <span className='detail-text__text'>{`Director: ${movie.Director}`}</span>
      <span className='detail-text__text'>{`Actors: ${movie.Actors}`}</span>
      <span className='detail-text__text'>{`Description: ${movie.Plot}`}</span>
    </div>
  </DetailStyled>
)

export default DetailLayout