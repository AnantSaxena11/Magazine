import './App.css';
import Collage from './Components/Collage/Collage';
import Footer from './Components/Footer/Footer';
import LowerNavBar from './Components/LowerNavBar/LowerNavBar';
import Page1 from './Components/Page1/Page1';
import Signup from './Components/Signup/Signup';
import TrendingNow from './Components/Trending_banner/TrendingNow';
import UpperNavBar from './Components/UpperNavBar/UpperNavBar';
import Video from './Components/Video/Video';
import Imagegallery from './Components/imagegallery/Imagegallery';
function App() {
  return (
    <>
      <UpperNavBar />
      <LowerNavBar />
      <TrendingNow />
      <Collage />
      <Page1 />
      <Video />
      <Signup />
      <Imagegallery />
      <Footer />
    </>
  );
}

export default App;
