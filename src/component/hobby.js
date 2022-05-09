import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { hobby } from './data.js';

class Hobby extends Component {
  render() {
    const hobby_render = hobby.map((id) => hobby_box(id));

    return (
      <div
        data-aos='fade-up'
        className='px-[18px] mt-[50px] md:mt-[120px] md:px-[120px] '
        id='hobby'
      >
        <div className='bg-slate-100/90 rounded-[45px] px-[35px] pt-[28px] pb-[45px]'>
          <div className='bg-slate-100 relative top-[-45px] h-[40px] mb-[-35px] text-[black] pt-1 mx-auto rounded-[25px] w-[280px] text-center shadow-md'>
            <h1 className='align-middle font-bold text-[20px]'>
              HOBBY & GALLERRY
            </h1> 
          </div>

<div className='md:flex gap-3 justify-center '>

          {hobby_render}
          </div>

        </div>
      </div>
    );

    function hobby_box(data) {
      return <div key={data.label}>
          

          <div data-aos='fade-up' className='bg-[white] mt-[25px] mx-auto w-full md:w-[300px] pb-[20px] rounded-[25px] shadow-lg overflow-hidden '>

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

export default Hobby;
