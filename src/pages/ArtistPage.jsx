import Artiste from '../components/Artiste';
import demujaImage from '../img/demuja.png';
import kerriImage from '../img/kerri-chandler.png';
import jeffImage from '../img/jeff-mills.png';
import frankieImage from '../img/frankie-knuckles.png';
import hoodImage from '../img/robert-hood.png';
import mikeBanksImage from '../img/mike-banks.png';
import '../style.css';

export default function ArtistPage() {

  return (
    <>
        <h1>Nos artistes</h1>
          <main className="artist-container">
            <div className="artist-card">
              <Artiste 
                name="Demuja"
                presentation="DJ et producteur autrichien, DEMUJA introduit la Soul au monde du Deep Disco et de la Raw House. Influencé par des visionnaires tels que Kerri Chandler, MCDE et Glenn Underground, il se forge rapidement une réputation solide dans le monde de la musique."
                style="House"
                src={demujaImage}
                alt="Demuja photo"
                url="https://www.instagram.com/iamdemuja/"
              />
            </div>
            <div className="artist-card">
              <Artiste 
                name="Kerri Chandler"
                presentation="Kerri Camar Chandler, né le 28 septembre 1969 à East Orange, est un compositeur, disc jockey et producteur musical américain de house et garage house. Il est considéré comme l'un des fondateurs de la deep house, au côté notamment de Larry Heard."
                style="House"
                src={kerriImage}
                alt="Kerri Chandler photo"
                url="https://www.instagram.com/iamdemuja/"
              />
            </div>
            <div className="artist-card">
              <Artiste 
                name="Jeff Mills"
                presentation="Jeff Mills, né à Détroit, est un des pionniers de la musique techno et fait partie, aux côtés de Carl Craig, Mad Mike, James Pennington, Robert Hood ou Blake Baxter, de la seconde vague des artistes techno de Détroit. Il est crédité pour avoir été l'initiateur du style ghettotech."
                style="Techno"
                src={jeffImage}
                alt="Jeff Mills photo"
                url="https://www.instagram.com/iamdemuja/"
              />
            </div>
            <div className="artist-card">
              <Artiste 
                name="Frankie Knuckles"
                presentation="Frankie Warren Knuckles Jr., de son vrai nom Francis Warren Nicholls, Jr., né dans le quartier du Bronx à New York et mort le 31 mars 2014 à Chicago, est un disc jockey et compositeur américain de musique électronique. Il est surnommé le « Parrain de la house »."
                style="House"
                src={frankieImage}
                alt="Frankie Knuckles photo"
                url="https://www.instagram.com/iamdemuja/"
              />
            </div>
      
          </main>

          <main className="artist-container">
            <div className="artist-card">
              <Artiste 
                name="Robert Hood"
                presentation="Robert Hood est un producteur et DJ de musique techno originaire de Détroit. Avec Jeff Mills et Mad Mike il est l'un des fondateurs d'Underground Resistance qu'il quitte en 1992. Il fonde en 1994 le label M-Plant et sort ses premiers titres, Internal Empire, Music Data et Moveable Parts."
                style="House"
                src={hoodImage}
                alt="Robert Hood photo"
                url="https://www.instagram.com/iamdemuja/"
              />
            </div>
            <div className="artist-card">
              <Artiste 
                name="Mike Banks"
                presentation="Mad Mike, de son vrai nom Michael Anthony Banks, né en 19611, est un compositeur et producteur de techno de Détroit. Il est l'un des créateurs, avec Jeff Mills, Robert Hood et Darwin Hall, du label Underground Resistance. Sa musique est principalement influencée par le Gospel et la Funk."
                style="Techno"
                src={mikeBanksImage}
                alt="Mad Mike photo"
                url="https://www.instagram.com/iamdemuja/"
              />
            </div>
            <div className="artist-card">
              <Artiste 
                name="Jeff Mills"
                presentation="Jeff Mills, originaire de Détroit, est un des pionniers de la musique techno et fait partie, aux côtés de Carl Craig, Mad Mike, James Pennington, Robert Hood ou Blake Baxter, de la seconde vague des artistes techno de Détroit. Il est crédité pour avoir été l'initiateur du style ghettotech."
                style="Techno"
                src={jeffImage}
                alt="Jeff Mills photo"
                url="https://www.instagram.com/iamdemuja/"
              />
            </div>
            <div className="artist-card">
              <Artiste 
                name="Frankie Knuckles"
                presentation="Frankie Warren Knuckles Jr., de son vrai nom Francis Warren Nicholls, Jr., né dans le quartier du Bronx à New York et mort le 31 mars 2014 à Chicago, est un disc jockey et compositeur américain de musique électronique. Il est surnommé le « Parrain de la house »."
                style="House"
                src={frankieImage}
                alt="Frankie Knuckles photo"
                url="https://www.instagram.com/iamdemuja/"
              />
            </div>
      
          </main>
    </>
  )
}