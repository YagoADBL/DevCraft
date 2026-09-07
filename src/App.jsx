import Header from './components/header';
import Hero from './components/hero';
import QuemSomos from './components/quemsomos'
import OQueFazemos from './components/oquefazemos';
import ComoFazemos from './components/comofazemos';
import ComOQueFazemos from './components/comoquefazemos';
import Contato from './components/contato';
import Footer from './components/footer';
import './components/styles/global.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="quem-somos">
          <QuemSomos />
        </section>
        <section id="o-que-fazemos">
          <OQueFazemos />
        </section>
        <section id="como-fazemos">
          <ComoFazemos />
        </section>
        <section id="com-o-que-fazemos">
          <ComOQueFazemos />
        </section>
        <section id="contato">
          <Contato />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;