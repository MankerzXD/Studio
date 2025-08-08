import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
       <Navbar />
      {/* ...tu contenido principal... */}
      <Hero/>
      <Footer />
    </div>
  );
}
export default App;
