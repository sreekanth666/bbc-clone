import './App.css';
import Navigation1 from './Components/Navigation1';
import Navigation2 from './Components/Navigation2';
import TopNews from './Components/TopNews'
import TopNewsTiles from './Components/TopNewsTiles'
import MustSee from './Components/MustSee'
import NewsTileMain from './Components/NewsTileMain'
import MostRead from './Components/MostRead'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navigation1 />
      <Navigation2 />
      <TopNews />
      <TopNewsTiles />
      <MustSee />
      <NewsTileMain title="Full story" colValue="3" />
      <MostRead />
      <NewsTileMain title="Around the BBC" colValue="4" />
      <Footer />
    </>
  );
}

export default App;
