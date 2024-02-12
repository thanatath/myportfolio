import { useState } from 'react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyName from './component/me';
import Myskill from './component/myskill';
import Experience from './component/experience';
import Education from './component/education';
import Award from './component/award';
import Navbar from './component/navbar';
import Modal from './component/Modal';
import Works from './component/works';
import Blogs  from './component/blogs';
AOS.init({
  duration: 800,
  once: true,  
});



function App() {
  const [showModal,setModal] = useState(false);
  const [modalContent,setModalContent] = useState(false);
  return (
    <div className='App'>
      <div className='container-fluid mx-auto text-[white]  pb-[50px]'>
      <Navbar /> 
        <MyName  />
        <Education />
        <Works />
        <Myskill onModalContent={(modalcontent)=>{setModalContent(modalcontent);setModal(true)}} />
        <Experience />
        <Blogs />
        <Award />
        <Modal onclose={()=>{setModal(false)}} modal={showModal} modalContent={modalContent} />
        
      </div>
       
      
      
    </div>
  );
  
}



export default App;
