import logo from './logo.svg';
import './App.css';
import { React,useEffect, useState } from 'react';

function App() {
const [total,setTotal] = useState()
const [subTotal,setSubTotal] = useState()
const [data, setData] = useState([])
 
const getData = async () => {
  await fetch('https://spe-academy.spesolution.net/api/recruitment',{
    method: 'GET',
    headers:{
      'Authorization': 'Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y' ,
      'Content-Type': 'application/json'
    },
  })
  .then((res) => res.json())
  .then((data) => setData(data))
}
console.log(data.map((x) => x.product.code));


useEffect(() => {
  getData()
},[])


  return (
      <div className="w-full mx-auto pb-4 ">
          {/* Section 1 */}
          <div className=' w-4/5 mx-auto h-80  bg-gradient-to-r from-biru to-pink overflow-hidden'>
            {/* TimeStamps */}
              <div className=' border-8 border-cream rounded-3xl w-screen relative -rotate-12 h-screen -mt-96 -top-40  flex flex-col justify-end p-4  bg-hitam mx-auto mb-8'>
                <p className=' ml-20 text-hijau text-4xl '> SPE / FRONTEND </p>
                <p className=' text-hijau text-lg  rotate-90 bottom-28 -left-12 absolute '> {new Date().toDateString()}</p>
                
                {/* <p className=' text-hijau text-lg'> {time}</p> */}

              </div>
          </div>

      {/* Shop */}

        <div className=' w-5/6  mx-auto flex flex-col gap-8  justify-around items-center'>
         {/* Head */}
          <div className=' w-full flex justify-around  text-cream bg-hitam h-12 items-center gap-20'>
            <p className='w-52'>Product</p>
            <p>Quantity</p>
            <p>SubTotal</p>
          </div>
      
      
          {/* Content */}
          {data.map((x) => (

            <div className=' w-full flex flex-row justify-between px-4 items-center gap-8 border-b-2 pb-4 mt-4'>
              
              <div className='flex gap-2 items-center '>
              <img className='border p-2' width='250' src={x.product.media_url}/>
              <div className='flex flex-col flex-wrap w-60 gap-1 items-start justify-start'>
              <p className='text-biru font-bold text-sm'>{x.product.code}</p>
              <p className='text-xl font-bold '>{x.product.name}</p>
              <p className='text-md font-bold'>IDR. {x.product.price}</p>
              <p className='text-sm'>{x.product.quantity} </p>
              </div>
            </div>
            <input type='number' className=' input-group input border w-8 h-8 '/>
            <p className=' mr-16'>Sub total</p>

            </div>
            ))}



        {/* Bottom */}
        <div className=' w-full px-8 bg-hitam text-cream flex gap-4 justify-end items-center h-12'>
        <p className=' font-bold text-sm'>Subtotal</p>
        <p className=' font-bold text-xl'>80.000.000</p>
        </div>


        </div>



    </div>
  );
}

export default App;
