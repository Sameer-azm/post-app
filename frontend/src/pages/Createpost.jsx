import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const Createpost = () => {
  const navigate = useNavigate() //fornavigating the user  to feed
 const handlesubmit=async(e)=>{
  e.preventDefault() 
  const formData = new FormData(e.target)
 axios.post(`${import.meta.env.VITE_API_URL}/Createpost`, formData)
  .then((res) => {
 
 navigate("/feed")
 
  })
  .catch((err) => {
console.log(err)
  alert("Error creating post")
})
 

 }
  return (
    <section className='create-post-section'>
        <h1>Create post</h1>
        <form onSubmit={handlesubmit}>
            <input type="file" name='Image' accept='image/*' />
            <input type="text" name='caption' required placeholder='Enter Caption'/>
            <button>Submit</button>
        </form>
    </section>
  )
}

export default Createpost