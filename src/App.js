import logo from './logo.svg';
import './App.css';
import { React,useEffect, useState } from 'react';

function App() {
const [total,setTotal] = useState()
const [subTotal,setSubTotal] = useState()
 
const getData = async () => {
  await fetch('https://spe-academy.spesolution.net/api/recruitment',{
    Method: 'GET',
    Headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + 'o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y'
    },
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}
useEffect(() => {
  getData()
},[])
  return (
      <div className="w-full mx-auto ">
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

        <div className=' w-full '>
          <table className='table-auto mx-auto w-3/4 '>
          <thead className='bg-hitam text-cream'>
            <tr>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
         </thead>

         <tbody>
            <tr className='border-b-2 m-10'>
              <td>
                <div className='flex justify-center gap-4 items-center'>
                  {/* Gambar */}
                  <div className=' border-2 bg-cover flex justify-center items-center w-56 h-56'>
                    <img className='bg-cover' src='https://akcdn.detik.net.id/visual/2018/08/09/74d69c6a-18a4-4c16-8565-1c98f9f4388e_169.jpeg?w=650'/>
                  </div>
                  {/* Caption */}
                  <div className='flex flex-col'>
                    <p className=' text-biru font-bold text-sm'>Code</p>
                    <p className=' text-hitam font-bold text-lg'>NAMA MOBIL</p>
                    <p>IDR, 3000.000</p>
                    <p>0 IN STOCK</p>
                  </div>

                </div>
              </td>
              <td><input className='input border-2 w-8 h-8 rounded-lg' placeholder='0' type='number' /></td>
              <td>3000000</td>
            </tr>


    
    </tbody>

    {/* Total */}
          <div className=' mt-4 bg-hitam text-cream flex gap-8 font-bold justify-end items-center h-10 px-8 ' >
            <p>Total: </p>
            <p> 80.000.000</p>
          </div>

          </table>

        </div>



    </div>
  );
}

export default App;
