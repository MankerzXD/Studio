import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import FAQ from './components/FAQ';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
       <Navbar />
      {/* ...tu contenido principal... */}
      <Hero/>
      <Servicios/>
      <FAQ/>
      <Footer />
    </div>
  );
}
export default App;
