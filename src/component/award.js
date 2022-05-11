import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { award } from './data.js';

class Award extends Component {
  render() {
    const award_render = award.map((id) => award_box(id));

    return (
      <div
        data-aos='fade-up'
        className='px-[18px] mt-[50px] md:mt-[120px] md:px-[120px] '
        id='award'
      >
        <div className='bg-slate-100/90 rounded-[45px] px-[35px] pt-[28px] pb-[45px]'>
          <div className='bg-slate-100 relative top-[-45px] h-[40px] mb-[-35px] text-[black] pt-1 mx-auto rounded-[25px] w-[280px] text-center shadow-md'>
            <h1 className='align-middle font-bold text-[20px]'>
              Award
            </h1> 
          </div>

<div className='md:flex gap-3 justify-center '>

          {award_render}
          </div>

        </div>
      </div>
    );

    function award_box(data) {
      return <div key={data.label}>
          

          <div data-aos='fade-up' className='bg-[white] md:h-[350px] mt-[25px] mx-auto w-full md:w-[450px] pb-[20px] rounded-[25px] shadow-lg overflow-hidden '>

              <div>
                <img  src={'img/'+data.pic} />
   
              </div>

              <div className='bg-[#272C38] w-[180px] rounded-[25px] mx-auto relative top-[-10px]'>
                <h2 className='text-[white]  text-[15px] text-center'>{data.label}</h2>
              </div>

              <div className='px-4 text-[15px]'>
                 <span className='text-[#40908B]'>DETAIL:</span> <span className='text-black'>  {data.detail}</span>
              </div>




          </div>


      </div>;
    }
  }
}

export default Award;
