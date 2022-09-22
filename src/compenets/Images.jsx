import React,{useState} from 'react'
import axios from 'axios'
import ImagesGellary from './ImagesGellary';
import ReactPaginate from 'react-paginate'
import Pagination from './Pagination';
import Searchbar from './Searchbar';
import {Link, useNavigate,useParams} from 'react-router-dom'




export default function Images() {

  const [items, setItems] = useState([]);
  const[page, setPage] = useState(1)
  const [input, setInput] = React.useState("")
  const [search, setSearch] = React.useState([])



  const navigate = useNavigate();

  const handleSubmit = (e) =>{
   e.preventDefault()
   navigate("/searched/" + input)
  }

  const getItems = async (name) => {
    const res =  await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=50a942c38c8b6d05be4a9c57e4420ef0&text=${name}&format=json&tags=cats&per_page=10&page=${page}&nojsoncallback=1`)
    setItems(res.data.photos?.photo);
    setSearch(res.data.photos?.photo);
  }


  React.useEffect(() => {
    getItems(input)
  }, [input,page]);

  return (
    <>
     <Searchbar handleSubmit = {handleSubmit} setInput = {setInput} input ={input}/>
    <div className='w-[100%] mx-auto px-4 py-12 bg-gray-400'>

      <ImagesGellary items={search} />
      <Pagination setPage = {setPage} page = {page}/>
    </div>
     
    </>
  );
}
