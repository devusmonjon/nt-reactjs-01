import './App.css';
import {About, Blog, Contact, Experience, Footer, Header, Hero, Services, Testimonials} from './companents';
function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Experience />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
