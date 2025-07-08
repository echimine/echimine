import Hero from './components/Hero';

import './index.css';

import DataEchimine from './components/DataEchimineù/DataEchimine';
import { MotionTypographie } from './components/MotionTypographie';
import { Typographie } from './components/Typographie';

export default function App() {
  return (
    <main>
      <Hero />

      <DataEchimine />
      <div className="md:pt-20">
        <MotionTypographie
          variant="h2"
          component="h2"
          className="px-6 py-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Echimine c'est aussi UniverseEditFR
        </MotionTypographie>
      </div>
      <section>
        <div className="flex flex-wrap gap-4 md:flex-nowrap items-center justify-center">
          <img
            src="/images/logo/logo-universeeditfr.png"
            alt=""
            className="w-[72px]"
          />
          <Typographie variant="h1" component="h1">
            X
          </Typographie>
          <img
            src="/images/logo/logo-discord.png"
            alt=""
            className="w-[72px] pr-2"
          />
        </div>
      </section>
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
