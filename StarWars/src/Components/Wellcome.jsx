import "../assets/Styled-Wellcome.css";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Wellcome = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="fade"></div>
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <h1>Sprint 8</h1>
              <h1>-StarWars-</h1>
            </div>
            <p>
              Ja has programat dues aplicacions web amb React, posant en
              pràctica tots els conceptes apresos de React. Però a les webs
              fetes els hi falta un element fonamental de la majoria de webs:
              consum de dades d'un servidor utilitzant una API Rest. En aquest
              exercici les dades a consumir ja no estan hardcodeades en
              l'aplicació, sinó que seran consumides d'un servidor.
            </p>
            <p>
              Aquest lliurament està basat en una prova tècnica d'una gran
              empresa del sector e-commerce, que busca desenvolupadors/es front
              end a Barcelona. Aquest projecte és el típic d'una prova tècnica:
              consum de dades d'API, mostrant-les per pantalla en un llistat, i
              implementar el detall de cada ítem del llistat.
            </p>
            <p>
              La web que has de desenvolupar és una web d'informació sobre les
              naus de Star Wars! S'haurà de mostrar el llistat de naus amb la
              informació detallada de cada una d'elles.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Wellcome;