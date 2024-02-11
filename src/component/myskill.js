import React, { Component, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { adventure_time } from 'react-json-pretty/themes/adventure_time.css';
import { me_info,skilldatas,education,work,award } from './data.js';
import JSONPretty from 'react-json-pretty';

function combindJsonData(){
  return {"Section":"All about me","Data":{me_info,skilldatas,education,work,award}}
}
 
class Myskill extends Component {



  constructor (props) {
    super(props);
    this.state = {
      code_props:JSON.stringify(skilldatas),
 
      modalContent:{
        title:'More Data',
        text:(combindJsonData()),
        type:'code'
      }
    };
  }
  render() {

    

    return (
      <div className='flex  md:mt-[-60px] mt-[65px] md:flex-row justify-center'>
        <div
          data-aos='slide-right'
          id='myskill'
          className='px-[18px] w-full md:w-2/4 md:mt-[150px] '
        >
          <div className='bg-slate-100 relative top-[20px] h-[40px] text-[black] pt-1 mx-auto rounded-[25px] w-[150px] text-center shadow-md'>
              <h1 className='align-middle font-bold text-[20px]'>
                STACK SKILL
              </h1>
            </div>
          <div className='md:pt-[0px] py-[30px] md:py-[0px] px-4 md:px-[25px] w-full overflow-hidden bg-slate-100/90 rounded-[50px] shadow-xl '>
            
            <div className=''>{render_skill(skilldatas)}</div>
          </div>
        </div>
        <div
          data-aos='slide-left'
          id='myskill'
          className='mt-[190px] md:w-1/4 hidden md:block '
        >
          <div className='pb-[40px] pt-[75px] px-[25px] w-full bg-[#1e1e1e] rounded-[45px] shadow-xl '>
            {CodeComponent(this.state)}

            <div className='flex justify-center'>
              <button
                className='rounded-[45px] mt-[35px] text-black hover:text-[white] bg-[#f5bb12] h-[45px] w-[120px]'
                data-modal-toggle='morecode_madal'
                data-bs-toggle="modal"
                onClick={() => {this.props.onModalContent(this.state.modalContent)}}
               
              >
                More Data
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}



function img_skill(data) {
  return data.split(',').map((data) => {
    return (
      <div
        key={data}
        className='h-[60px] md:h-[80px] m-auto my-[10px] md:my-[1px] py-3'
      >
        <img
          className='h-[40px] md:hover:scale-125 duration-300 ease-in-out md:h-[50px] mx-auto'
          src={`img/${data}.webp`}
        />
        <span className='font-softbold'>{data}</span>
      </div>
    );
  });
}

function render_skill(skilldatas) {
  return skilldatas.map((skilldatas) => {
    return (
      <div key={skilldatas.label} className='md:flex '>
        <div className='md:w-[200px] w-[200px] md:rounded-none rounded-lg md:py-20 mx-auto md:left-[-25px] z-50 relative md:flex bg-white '>
          <div className='text-[black] bg-white rounded-[45px] md:my-auto md:ml-[25px] mt-8 md:pt-[50px] md:bg-transparent font-semibold text-center  md:text-[20px]'>
            {skilldatas.label}
          </div>
        </div>
        <div className='w-full mx-auto md:py-4 md:border-y-2 '>
          <div className='text-[black]  grid md:grid-cols-5 grid-cols-4 justify-center md:justify-start text-center mt-2'>
          {img_skill(skilldatas.data)}
          </div>
        </div>
      </div>
    );
  });
}

function CodeComponent(props) {
  return <JSONPretty data={props.code_props}></JSONPretty>;
}

export default Myskill;
