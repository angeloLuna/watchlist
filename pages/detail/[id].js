import { useEffect, useState } from 'react'
import DetailLayout from '../../components/detail'
import { fetchMovieById } from '../../services/movies'
import { useRouter } from 'next/router'

const Detail = () => {
  const Router = useRouter()
  const [id, setId] = useState('')
  const [movie, setMovie] = useState({})

  useEffect(() => {
    if (id) {
      fetchMovieById(id)
        .then((response) => {
          if (response) {
            console.log({ response })
            setMovie(response.data)
          }
        })
        .catch((error) => {
          console.log({ error })
        })
    }
  }, [id])

  useEffect(() => {
    setId(Router.query.id)
  }, [Router.query])

  console.log("detail", movie)
  console.log("Router", Router)
  console.log({id})
  return <DetailLayout movie={movie} />
}

export default Detail