import React from 'react'
import { useRef } from 'react'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
// import { axiosPrivate } from '../Api/axios'
const Tryone = () => {
  //   const [image, setImage] = useState('')
  const fileRef = useRef()
  //   const handleSubmmit2 = (e) => {
  //     setImage(e.target.files[0])
  //   }
  const axiosprivate = UseAxiosPrivate()
  const handleSubmmit = async (e) => {
    e.preventDefault()
    let formdata = new FormData()
    formdata.append('avatar', fileRef.current.files[0])
    const jsondata = {
      name: 'Adoma',
      age: 22,
    }
    formdata.append('jsondata', JSON.stringify(jsondata))
    try {
      const response = await axiosprivate.post('/register', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

        withCredentials: true,
      })
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmmit}>
        <label htmlFor='photo'>image</label>
        <input id='photo' type='file' name='avatar' ref={fileRef} />
        <button>submmit</button>
      </form>
    </div>
  )
}

export default Tryone
