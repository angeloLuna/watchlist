import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeLayout from '../components/home'
import { fetchMovie } from '../services/movies'



const Home = () => {

  const [movies, setMovies] = useState([])
  const [likedIds, setLikedIds] = useState([])
  const [watchList, setWatchlist] = useState([])

  const handleLiked = (id) => {
    const arr = likedIds.slice()
    if (!arr.includes(id)) {
      // ✅ only runs if value not in array
      arr.push(id);
    } else {
      const index = arr.indexOf(id);
      if (index > -1) {
        arr.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    setLikedIds(arr)
  }

  const handleFillWatchList = () => {
    const arr = movies.slice()
    const list = arr.filter((item) => likedIds.includes(item.imdbID))
    setWatchlist(list)
  }
  const handleChangeIcon = () => {
    const arr = movies.slice()
    const liked = arr.map((item) => {
      likedIds.includes(item.imdbID) ? item.liked = true : item.liked = false
      return item
    })
    setMovies(liked)
  }

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
  }, []
  )

  useEffect(() => {
    handleFillWatchList()
    handleChangeIcon()
  }, [likedIds])

  return (
    <HomeLayout
      movies={movies}
      handleLiked={handleLiked}
      watchList={watchList}
    />
  )
}

export default Home