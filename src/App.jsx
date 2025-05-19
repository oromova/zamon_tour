import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import Offers from './sections/Offers';
import Showcase from './sections/Showcase';

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Showcase/>
        <Offers/>
      </main>
      <Footer/>
    </div>
  )
}

export default App