import { React, useState, useEffect } from 'react'
import './home.scss'
import Card from '../../Components/card/Card'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar'
import Modals from '../../Components/modal/Modals'
import { fetchingData } from '../../Hooks/FetchingData'
import { Suggest } from '../../Hooks/Suggest'

let apiKey = '715289b';
let url = 'https://www.omdbapi.com?apikey=715289b&s=Batman'
let url2 = 'https://www.omdbapi.com/'

let data = {
  url: url,
  method: 'GET',
  key: apiKey
}

export default function Home() {
  const navigate = useNavigate()
  const [movie, setMovie] = useState([])
  const [search, setSearch] = useState('the god')
  const [page, setPage] = useState(1)
  const [modal, setModal] = useState(false)
  const [dataModal, setDataModal] = useState({})
  const [suggest, setSuggest] = useState([])
  let [count, setCount] = useState(0)
  let image = movie.map((x) => x.Poster)
  useEffect(() => {
    fetchingData(url2, apiKey, search, page, setMovie, movie)
  }, [page, search])

  useEffect(() => {
    Suggest(search, movie, setSuggest)
  }, [search])

  setTimeout(() => {
    setCount(count += 1)
    if (count > 5) {
      setCount(0)
    }
  }, 3000)

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      console.log('scroll');;
      setPage(page + 1)
    }
  }
  return (

    <div className='cthome'>
      <Navbar click={(e) => {
        navigate(`/details/${e}`)
        setSearch('')
      }
      }
        suggest={suggest} change={(e) => setSearch(e.target.value)} />

      <section className='headhome' style={{ backgroundImage: `url(${image[count]})` }}>
        <div className='title'>
          <h2>Title</h2>
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
        </div>

        <div className='button'>
          <p>Read More</p>
          <p>Download</p>
        </div>
      </section>


      <div className='content'>
        {movie.map((x, i) => (
          <Card
            click={(x) => navigate(`/details/${x}`)}
            key={i}
            modal={(e) => {
              setDataModal(e)
              setModal(!modal)
              console.log(dataModal)
            }}
            data={x} />
        ))}
      </div>

      {modal && <Modals close={() => setModal(false)} data={dataModal} />}

    </div>
  )
}




