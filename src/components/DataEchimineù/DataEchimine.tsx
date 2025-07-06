import {
  Bookmark,
  Eye,
  Heart,
  MessageCircleMore,
  User,
  Video,
} from 'lucide-react';
import { Typographie } from '../Typographie';

const DataEchimine = () => {
  return (
    <section className="px-10 relative py-16 w-full h-full">
      <div className="flex flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-3/4">
          <div className="flex flex-col gap-4">
            <Typographie variant="h1" component="span">
              ECHIMINE c'est qui et quoi ?
            </Typographie>
            <Typographie variant="h6" className="text-justify">
              Moi c’est Eliott. J’ai commencé à faire des vidéos sur TikTok en
              2022. Pendant plus d’un an et demi, je montais tout sur CapCut,
              puis en 2023, je suis passé à After Effects pour aller plus loin
              dans la qualité de mes montages.
            </Typographie>
            <Typographie variant="h6" className="text-justify">
              Au début, j’éditais un peu de tout, des films, des séries, puis
              j’ai découvert Star Wars: The Clone Wars Et là… coup de cœur. J’ai
              commencé à créer des edits autour de cet univers.
            </Typographie>
            <Typographie variant="h6" className="text-justify">
              En un an, j’ai réuni une communauté de plus de 10 000 abonnés.
              Pour aller plus loin, j’ai lancé la première version de mon site
              echimine.fr et créé le serveur Discord UniverseEditFR, un espace
              pour échanger et faire grandir cette passion.
            </Typographie>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-30">
            <div className="flex items-center gap-2">
              <User color="#fcd309" />
              <Typographie variant="h1" component="span">
                20K Abonnés
              </Typographie>
            </div>

            <div className="flex items-center gap-2">
              <Heart color="#fcd309" />
              <Typographie variant="h1" component="span">
                1.9M de likes
              </Typographie>
            </div>
            <div className="flex items-center gap-2">
              <Eye color="#fcd309" />
              <Typographie variant="h1" component="span">
                1.4M de vue sur une vidéo
              </Typographie>
            </div>
            <div className="flex items-center gap-2">
              <Video color="#fcd309" />
              <Typographie variant="h1" component="span">
                + de 300 vidéos
              </Typographie>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <video
            controls
            loop
            muted
            className="w-full object-cover rounded-2xl"
            id="video"
          >
            <source src="/video/edit_padme_fini.mp4" type="video/mp4" />
          </video>
          <div className="flex flex-col gap-4 w-full pt-4">
            <div>
              <Typographie variant="h4">
                Edit sur Padme Amidala dans Starwars l'attaque des clones.
              </Typographie>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="flex gap-2">
                <Eye color="#fcd309" />
                <Typographie>1.4M de vues</Typographie>
              </div>
              <div className="flex gap-2">
                <Heart color="#fcd309" />
                <Typographie>176k likes</Typographie>
              </div>
              <div className="flex gap-2">
                <MessageCircleMore color="#fcd309" />
                <Typographie>720 commentaires</Typographie>
              </div>
              <div className="flex gap-2">
                <Bookmark color="#fcd309" />
                <Typographie>37k enregistrements</Typographie>
              </div>
            </div>
            <div>
              <Typographie component="a" href="/">
                Voir la vidéo sur tiktok
              </Typographie>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEchimine;
