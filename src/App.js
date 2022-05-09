import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyName from './component/me';
import Myskill from './component/myskill';
import Work from './component/work';
import Education from './component/education';
import Hobby from './component/hobby';
import Navbar from './component/navbar';

AOS.init({
  duration: 800, // values from 0 to 3000, with step 50ms
});

function App() {
  return (
    <div className='App'>
      <div className='container mx-auto text-[white]  pb-[50px]'>
      <Navbar /> 
        <MyName  />
        <Myskill />
        <Education />
        <Work />
        <Hobby />
        
      </div>
    </div>
  );
}

export default App;
