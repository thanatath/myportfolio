
import JSONPretty from 'react-json-pretty';
const Modal = (props) => {

 


    if(props.modal === false){
        return null;
    }

    return(
      <div data-aos='fade-up' id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed hidden md:block m-auto  top-0 right-0 left-0  h-[450px] w-[850px] z-50  md:inset-0 ">
          <div className='bg-[#1e1e1e]  h-full w-full shadow-xl rounded-[45px]'>
              
<div className='flex justify-center bg-[#f5bb12] text-[black] rounded-t-[45px] h-[45px] relative'><span className='text-[20px] my-auto'>{props.modalContent.title}</span></div>

<div className='p-[15px] overflow-auto h-[340px]'>{props.modalContent.type === 'code' ? <JSONPretty data={props.modalContent.text} /> : <div className='flex flex-col justify-center'>{props.modalContent.text}</div>}
 </div>
<div className='w-full flex justify-center'> <button className='bg-[black]  mb-[5px] rounded-[45px] w-[120px] h-[45px] absolute bottom-[5px]' onClick={props.onclose}>Close</button></div></div>

          
 
  </div>
    )
  }

  export default Modal;