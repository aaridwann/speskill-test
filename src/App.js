import './App.css';
import { React,useEffect, useState } from 'react';

function App() {
const [date,setDate] = useState()
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
  .then((data) => {
    setData(data.map((x) => x.product))
  })
}

const changeHandle = (e,x) => {
  let value = e.target.value
  let code = x.x.code
  let price = x.x.price
  let ex = data.map((x) => x)
  ex.find((x) => x.code==code).subTotal= price*value
  // Masih Bugs
  ex.find((x) => x.code==code).stock-=value
  setData(ex)
  let total = ex.map((x) => x.subTotal).filter((x) => x !== undefined)
  setSubTotal(total.reduce((x,y) => x+y))
}
useEffect(() => {
  getData()
  setInterval(() => {
    setDate(new Date().toLocaleString())
  },1000)
  
},[])


  return (
      <div className="w-full mx-auto pb-4 bg-slate-200 ">
          {/* Section 1 */}
          <div className='sm:w-5/6 mx-auto h-96 sm:h-80 bg-gradient-to-r from-biru to-pink overflow-hidden'>
            {/* TimeStamps */}
              <div className=' border-b-20 border-slate-100 sm:border-20 shadow-xl sm:rounded-3xl w-full h-40 sm:w-screen sm:relative sm:-rotate-30 sm:h-screen sm:-mt-96 sm:-top-60 flex flex-col justify-center sm:justify-end p-4 bg-hitam mx-auto mb-8'>
                <p className=' ml-20 text-hijau text-lg sm:text-3xl font-Orbitron'>{'<'} SPE / FRONTEND{' >'} </p>
                <p className=' text-hijau text-lg rotate-0 sm:rotate-90 sm:bottom-28 font-Raleway sm:-left-20 mx-auto sm:absolute '> {date}</p>
                

              </div>
          </div>

        {/* Shop */}

        <div className='sm:w-5/6 overflow-y-scroll mx-auto flex flex-col gap-8 bg-white justify-around items-center'>
         {/* Head */}
          <div className=' px-2 sm:px-0 w-full flex justify-around  text-cream bg-hitam h-12 items-center gap-20'>
            <p className=' w-72'>Product</p>
            <p className=' ml-12'>Quantity</p>
            <p className=" hidden sm:block">SubTotal</p>
          </div>
            
      
      
          {/* Content */}
          {data ? data.map((x) => (
            <div key={x.code} className=' w-full flex flex-row justify-between px-4 items-center gap-8 border-b-2 border-zinc-300 pb-4 mt-4'>
              
              <div className='flex gap-2 items-center'>
              <img className='border p-2 shadow-lg rounded-lg border-zinc-300 w-36 sm:w-52' width='250' src={x.media_url}/>
              <div className='flex flex-col flex-wrap w-60 gap-1 items-start justify-start'>
              <p className='text-biru font-bold text-xs sm:text-sm'>{x.code}</p>
              <p className=' text-lg sm:text-xl font-bold '>{x.name}</p>
              <p className=' text-sm sm:text-md font-bold'>{ "Rp. " + (Math.round(x.price * 100) / 100).toLocaleString()}</p>
              <p className=' font-bold text-red-400 text-sm'>{x.stock} in Stock</p>
              
              <div className='sm:hidden flex gap-8 justify-center items-center'>
                <p className=" text-slate-800 text-xl  block sm:hidden">Total</p>
                <p className=' font-bold text-lg text-slate-600'>{ x.subTotal ? "Rp. " + (Math.round(x.subTotal * 100) / 100).toLocaleString() :'Rp. '+ 0}</p>
              </div>
              
              </div>
              </div>
              <input onChange={(e) => changeHandle(e,{x})} type='number' className=' shadow-md rounded-xl text-center input-group input border w-8 h-8 '/>
              {/* <p className=' mr-16'>{x.product.price}</p> */}
              <p className=' sm:block hidden mr-16'>{ x.subTotal ? "Rp. " + (Math.round(x.subTotal * 100) / 100).toLocaleString() :'Rp. '+ 0}</p>

              
            </div>
            )) : 'Loading ...'}


        {/* Bottom */}
        <div className=' w-full px-8 bg-hitam text-cream flex gap-4 justify-end items-center h-12'>
        <p className=' font-bold text-sm'>Subtotal</p>
        <p className=' font-bold text-xl'>{ subTotal ?  "Rp. " + (Math.round(subTotal * 100) / 100).toLocaleString() : 'Rp.'+0}</p>
        </div>


        </div>



    </div>
  );
}

export default App;
