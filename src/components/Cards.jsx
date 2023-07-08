import React, { useState, useEffect } from 'react';
import styles from '../style';
import { cards } from '../constants';
import "../index.css";
import { FaStar } from "react-icons/fa";

const Cards = () => {
  // console.log(restaurants);
  const [foods, setFoods] = useState(cards);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <section className='p-4 py-10 m-auto '>

      <div className='flex flex-col justify-between'>
        <div>
          <h2 className='res hover:bg-yellow-200'>See which restaurants people are raving about</h2>
        </div>
        <div>
          <p className='res2 hover:bg-yellow-200'>From verified diners like you</p>
        </div>
      </div>
      {/* done with res part */}
      {/* display foods */}
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div key={index} className=' shadow-2xl 
          rounded-lg hover:scale-105 duration-300'>
             <div className='flex flex-row '>
              <div className='imgdiv flex flex-row gap-3'>
                
              <img src={item.image} alt={item.name}
              className='w-[100%] h-[100%] object-cover rounded-t-lg lightgray 50%'
            />
            <div>
                <p className=''>{item.name}</p>
                <div className='flex flex-row'>
                    <p>{item.title}</p>
                    <small>{item.reviews}</small>
                </div>
            </div>
              </div>
             </div>
                <div className='mx-2 pt-1'>
              <p>{item.name}</p>
              <span className='flex pt-2'>
                {[...Array(5)].map(star => {
                  const currentRating = index + 1;
                  return (
                    <label>
                      <input
                        type='radio'
                        name='rating'
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                      />
                      <FaStar size={11}
                        className='star'
                        color={currentRating <= (hover || rating)
                          ? "#BCA78C" : "#BCA78C"}
                        onmouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>

                  );
                })}
              </span>
              <p className='tes pt-1'>{item.text}</p>
              <button className='butq mt-2 mb-2'>{item.category}</button>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}

export default Cards;
