import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {

  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/pet/list`)
    console.log(response.data);
    if(response.data.success) {
      setList(response.data.data);
    } 
    else{
      toast.error("Error")
    }
  }

  const removePet = async (petId) => {
    const response = await axios.post(`${url}/api/pet/remove`, {id:petId})
    await fetchList();
    if(response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className='list add flex-col'>
      <p>All Pates List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Type</b>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index)=>{
          return (
            <div key={index} className='list-table-format'>
              <p>{item.type}</p>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <button onClick={()=>removePet(item._id)} className='cursor'>Remove</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List