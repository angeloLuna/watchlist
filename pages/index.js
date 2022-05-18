import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeLayout from '../components/home'
import { fetchMovie } from '../services/movies'



const Home = () => {
  const [movies, setMovies] = useState([])

    useEffect(() => {
      fetchMovie()
        .then((response) => {
          console.log({ response })
          if (response.data) {
            setMovies(response.data.Search)
          }
        })
        .catch((error) => {
          console.log({ error })
        })
      },[]
    )   
    // console.log('here', movies)
  return (
    <HomeLayout movies={movies}/>
  )
}

export default Home