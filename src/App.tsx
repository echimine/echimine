// import AboutMe from './components/AboutMe/AboutMe';
import DataEchimine from './components/DataEchimineù/DataEchimine';
// import { GridNormal } from './components/Grid/GridMansory';
import Hero from './components/Hero';
// import { Typographie } from './components/Typographie';

import './index.css';

export default function App() {
  return (
    <main>
      <Hero />
      {/* <AboutMe /> */}
      <DataEchimine />
      {/* <GridNormal /> */}
      {/* <section>
        <Typographie>Serveur Discord UniverseEditFR</Typographie>
        <img src="/images/backround-UNIVERSEEDITFR-3.png" alt="" />
        <Typographie>
          UniverseEditFR est un serveur qui réunit ma communauté mais aussi des
          editeurs que ça soit des débutants ou des expérimenter. Le but c'est
          d'éxpérimenter, discuter, promomouvoir ses vidéos et faire en sorte
          que vous aussi vous puissiez percer la-dedans.
        </Typographie>
      </section> */}
    </main>
  );
}
