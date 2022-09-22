import React from 'react'
import {FaHeart , FaRegHeart} from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ImagesGellary({items}) {
  const [like , setLike] = React.useState(false)
  const [Id , setId] = React.useState()

  const navigate = useNavigate()
  const saveFav = async (id) => {
    await axios.post(`https://www.flickr.com/services/rest/?method=flickr.favorites.add&api_key=50a942c38c8b6d05be4a9c57e4420ef0&photo_id=${id}&format=json&tags=cats&per_page=10&nojsoncallback=1`)
    setLike(!like)
    setId(id)
  }

  return (
    <div className='grid md:grid-cols-3 gap-6 my-8'>
    {
      items?.map((item) => {
        var pic = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'
        return (
          <div className=' rounded-xl relative'>
                <p>
                    { like && item.id == Id ? <FaHeart onClick={() => saveFav(item.id)}  size={30} className=" absolute cursor-pointer top-4 left-4 text-gray-300"/> : <FaRegHeart onClick={() => saveFav(item.id)}  size={30} className=" cursor-pointer absolute top-4 left-4 text-gray-300"/>}
                </p>
            <img
              className='w-full max-h-[160px] md:max-h-[250px] rounded-xl object-cover'
              src={pic} alt="..." />
          </div>
        )
      })
    }
  </div>
  )
}
