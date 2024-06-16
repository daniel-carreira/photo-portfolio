import React from 'react';

import MeImg from '../img/home/me.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return <section className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center'>
        <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>Day & Night <br /> Photographer</h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
            Leiria, Portugal
          </p>
          <Link to={'/portfolio'} className='btn mb-[30px]'>View my Work</Link>
        </div>
        <div className='flex justify-end mx-h-96 lg:mx-h-max'>
          <div className='relative lg:-right-40'>
            <img className='lg:h-screen' src={MeImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Home;
