import { Typographie } from '../Typographie';
const AboutMe = () => {
  return (
    <section className="px-10 py-16 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/3 flex flex-col gap-4">
          <div className="pb-8">
            <Typographie variant="h2" component="h2" fontChoice="font-archivo">
              ABOUT ME
            </Typographie>
          </div>
          <Typographie>
            Moi c’est Eliott. J’ai commencé à faire des vidéos sur TikTok en
            2022. Pendant plus d’un an et demi, je montais tout sur CapCut, puis
            en 2023, je suis passé à After Effects pour aller plus loin dans la
            qualité de mes montages.
          </Typographie>
          <Typographie>
            Au début, j’éditais un peu de tout, des films, des séries, puis j’ai
            découvert Star Wars: The Clone Wars Et là… coup de cœur. J’ai
            commencé à créer des edits autour de cet univers.
          </Typographie>
          <Typographie>
            En un an, j’ai réuni une communauté de plus de 10 000 abonnés. Pour
            aller plus loin, j’ai lancé la première version de mon site
            echimine.fr et créé le serveur Discord UniverseEditFR, un espace
            pour échanger et faire grandir cette passion.
          </Typographie>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/3">
          <img
            src="/images/pfp-echimine.png"
            alt="Photo de Eliott"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
