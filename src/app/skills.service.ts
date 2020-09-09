import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class SkillsService {
  
  private skills:Skill[] = 
  [   
    {
      link: 'engineering',
      type: 'Engineering & Design',
      class: 'engineering',
      experienceDate1:'From April 2012 to November 2019',
      experience1: 'Project Manager for Interior Lighting R&D Department',
      experienceLocation1: 'SEAT Technical Center (Martorell, Spain)',
      experienceDate2:'From May 2011 to September 2011',
      experience2: 'Freelance Designer',
      experienceLocation2: 'Zoopa (Barcelona, Spain)',
      experienceDate3:'From May 2010 to March 2011',
      experience3: 'Designer/Product Engineer Intern',
      experienceLocation3: 'Studio Roosegaarde (Rotterdam, The Netherlands)',
      experienceDate4:'From 2016 to 2019',
      experience4: 'Professor at ELTICA Postgrade (Electricity and Electronics for Automotive - Interior Lighting Module)',
      experienceLocation4: 'UPC (Barcelona, Spain)',
      education0: 'SPEOS Lighting Simulation Specific Training',
      educationDate0:'June 2019',
      educationLocation0:'SEAT (Barcelona, Spain)',
      education1:'Post-grade in Computer-Aided Engineering (CAE)',
      educationDate1:'From October 2009 to February 2010',
      educationLocation1:'Fundaciò CIM, UPC (Barcelona, Spain)',
      education2:'Master in Graphical Engineering Appliedo to Digital Communication of Products and Projects',
      educationDate2:'From October 2008 to June 2009',
      educationLocation2:'Fundaciò CIM, UPC (Barcelona, Spain)',
      education3:'Degree in Mechanical Engineering',
      educationDate3:'From September 2003 to June 2008',
      educationLocation3:'Universidade de Aveiro (Aveiro, Portugal)',
      backgroundimg: './assets/img/industrial-design.jpg'
    },
    {
      link: 'frontend',
      type: 'Front End Development',
      class: 'frontend',
      education1:'Developer Program - Front End Development - Angular + ReactJS path',
      educationDate1:'From January 2020 to August 2020',
      educationLocation1:'IT Academy (Barcelona, Spain)',
      links:[
        'https://andre4130.github.io/sidewalkbookings/',
        'https://andre4130.github.io/cohetes/'
      ],
      backgroundimg: './assets/img/coding.jpg'
    },
  
    {
      link: 'music',
      type: 'Music',
      class: 'music',
      education1:'Self-Taught Musician',
      links:[
        'https://vuelvezinc.bandcamp.com/',
        'https://unfollowers.bandcamp.com/',
        'https://mayer-sanchez.bandcamp.com/'
      ],
      backgroundimg: './assets/img/synths.jpg'
    },
    {
      link:'about',
      type: 'About',
      class: 'about',
      backgroundimg: './assets/img/about.jpg'
    },
    {
      link:'cv',
      type: 'CV',
      class: 'cv',
      backgroundimg: './assets/img/about.jpg'
    },
    {
      link:'contact',
      type: 'Contact',
      class: 'contact',
      backgroundimg: './assets/img/about1.jpg'
    }
  ]
  
  private music: Band[] = 
  [
    {
      band:'Vuelve Zinc',
      bandcamp: 'http://vuelvezinc.bandcamp.com',
      spotify: 'https://open.spotify.com/artist/25I79wsqw6YihBffyleOG6?si=y6BEMabdTFegtm5JByZ-lA',
      instagram: 'https://www.instagram.com/vuelvezinc/',
      video:['https://www.youtube.com/channel/UCu223l2aehhtgGKYBU7bqlQ','https://www.youtube.com/watch?v=OCpvUnVVjbA','https://www.youtube.com/watch?v=hTwpFtm2Zmo'],
      img:['../assets/img/vuelvezinc.jpg','../assets/img/vuelvezinc1.jpg','../assets/img/vuelvezinc2.jpg'],
      songs:["https://bandcamp.com/EmbeddedPlayer/track=1639418983/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/", "http://mayer-sanchez.bandcamp.com/track/otto"],
      bio:`Vuelve Zinc was formed in 2016 by Pol (Drums) and Chisco (Guitar/Vocals/LoopStation), who met through the internet. Chisco was looking for someone to form a band with the likes of Radiohead, John Frusciante and Portishead, and Pol immediately got interested in the ad.
      The two met and Vuelve Zinc started, initially as a duo, but soon André (Synths) and Ricky(Bass) joined in.
      After two self-recorded EP's in 2017 ("Un Mundo con Zinc" and "Un Mundo sin Zinc"), the band started to compose their first LP, "Entropia Propia". In December 2018 they joined forces with two heavy-weights of Recording and Mixing (Ferrán Resines and Cristian Pallejá) and spent two weeks recording at Caballo Grande Studios (Barcelona).
      "Entropia Propia" was released in October 2019 and formed part of "Promoción 19" of "Hoy Empieza Todo" (Radio 3), a weekly radio promotion of upcoming bands of the spanish independent scene.
      In 2020, and after being forced to cancel their record promotion tour amid the Covid-19 crisis, the band started ping-ponging ideas to each other from their own bedrooms and a scratch of their second LP started to loom, which is currently mature enough and will be recorded in December 2020.
      Also, 2020 was the year that Ricky (Bass) decided to quit the band, and Isaac (Bass/Synths) joined in.`
    },
    {
      band:'Unfollowers',
      bandcamp: 'http://unfollowers.bandcamp.com',
      spotify: 'https://open.spotify.com/artist/3iROgf3G2Iji0bdC2E17yU?si=ZIRsweyvQM6Eb2-55joB8w',
      instagram: 'https://www.instagram.com/unfollowers_unofficial/',
      video:['https://www.youtube.com/channel/UCAVo6LOnYovqpQT6cWANbIA','https://www.youtube.com/watch?v=-TlAD3ftwqA','https://www.youtube.com/watch?v=qrGzF-eUTP8'],
      img:['../assets/img/unfollowers.jpg','../assets/img/unfollowers1.jpg','../assets/img/unfollowers2.jpg'],
      songs:["https://bandcamp.com/EmbeddedPlayer/track=1639418983/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/", "http://mayer-sanchez.bandcamp.com/track/otto"],
      bio: `Unfollowers is the result of 3 skateboarders and a BMXer whose paths came across thanks to their mutual love for underground culture and DIY ethics.
      While at a concert of "Las Ruinas", Javier Menendez (guitar / vocals) asked Adri Villar (drums), why wouldn't they start a band, even though their skills for
      playing instruments was very low. Shortly after, Sergio Lopez (bass) joined in for adding some more experimentation and groove to a band that was already an experiment per se.
      Last, the most unlikely addition to the band was André Maia (synths). A portuguese transplant that, unlike the rest of the band, rides BMX instead of skateboarding,
      brought in his beloved synths to tweak the sound of the Unfollowers, giving the band the tag Punk-Synthgaze.
      On June 2020, and after postponing the appointment a couple of times, Unfollowers locked themselves for a week at Hukot Studio to record their first record, "Ese Placer Culpable".
      A collection of 10 tracks that illustrates their evolution along the learn-along-the-way-trial-and-error path.
      `
    },
    {
      band:'Mayer-Sánchez',
      bandcamp: 'http://mayer-sanchez.bandcamp.com',
      spotify: 'https://open.spotify.com/artist/2VFAJLsVWerF4bBsldJayN?si=dg_KW8nwROmL33PGmiFSzQ',
      instagram: 'https://www.instagram.com/mayer.sanchez.band/',
      video:['https://www.facebook.com/mayersanchezband/videos/445204979520535/'],
      img:['../assets/img/mayersanchez.jpg','../assets/img/mayersanchez1.jpg','../assets/img/mayersanchez2.jpg'],
      songs:["https://bandcamp.com/EmbeddedPlayer/track=1639418983/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/", "http://mayer-sanchez.bandcamp.com/track/otto"],
      bio:`Mayer-Sanchez is the personal project of Maria Pipla, Diederik Boertin and André Maia. A long time friendship well cemented by the same passion for music and matching musical tastes, paved the way to the start of this musical adventure. A couple of guitar riffs, repetitive synth melodies and simple beats, braced a well balanced contrast of the high and low pitched voices of Maria and Diederik, singing about the mundane aspects of modern life, and all the joy and anxiety triggered by living life in a fast shifting city.
      Following many nights improvising melodies and riffs on their terraces and living rooms, the band escaped the frantic city to spend 4 days isolated in god-knows-where land to self-record their first demo. A trial and error fruitful experience that lead to a 6 song cover letter.
      On October 23rd, 2019, Mayer-Sánchez released on digital format their first EP, City Life, self-recorded and self-edited. On May 27th, Mayer-Sánchez released their latest single, Otto, a song meant to be in their demo that never saw the daylight until being invited to participate in Monotemas #3, a yearly compilation of La Nada Colectiva that gathers exclusive new songs of upcoming bands of the Barcelona alternative Music scene.`
    }
  ]

  private languages:Language[] =
    [
      {
        lang: "Portuguese",
        progress: 100,
        level: "Native"
      },
      {
        lang: "Spanish",
        progress: 99,
        level: "Proficient"
      },
      {
        lang: "English",
        progress: 90,
        level: "Proficient"
      },
      {
        lang: "Catalan",
        progress: 75,
        level: "Advanced"
      },
      {
        lang: "German",
        progress: 50,
        level: "Intermediate"
      },
    ]
  
  private codes: Coding[] =

  [
    {
      type: "HTML5",
      progress: 70,
      imgsrc:"assets/svg/html5.svg"
    },
    {
      type: "CSS",
      progress: 60,
      imgsrc:"assets/svg/css.svg"
    },
    {
      type: "JavaScript",
      progress: 70,
      imgsrc:"assets/svg/javascript.svg"
    },
    {
      type: "Angular",
      progress: 45,
      imgsrc:"assets/svg/angular.svg"
    },
    {
      type: "React",
      progress: 30,
      imgsrc:"assets/svg/react.svg"
    }
  ]

  private engineering: Engineering[] =

  [
    {
      type: "CATIA",
      progress: 90,
      imgsrc:"assets/svg/catia.svg"
    },
    {
      type: "Blender",
      progress: 60,
      imgsrc:"assets/svg/blender.svg"
    },
    {
      type: "SPEOS",
      progress: 50,
      imgsrc:"assets/svg/speos.svg"
    },
    {
      type: "Adobe Photoshop",
      progress: 50,
      imgsrc:"assets/svg/photoshop.svg"
    },
    {
      type: "Adobe Illustrator",
      progress: 45,
      imgsrc:"assets/svg/illustrator.svg"
    },
  ]

  private images:Images[] = [
    {
      type: 'engineering',
      img: ["assets/img/seat1.jpg","assets/img/seat2.jpg", "assets/img/audi1.jpg"]
    },
    {
      type: 'design',
      img: ["assets/img/seat1.jpg"],
    }
  ]  
 
  private feProjects: Frontend[] = [
    {
      name:"Gimme Venue App",
      img: "assets/img/gimmevenue.jpg",
      description:"Gimme Venue is my personal experimental lab in ReactJS using MapboxGL. The main goal of this App is to get Music venues and Artists in contact for an easier communication and booking. Work in Progress.",
      link: "https://andre4130.github.io/gimmevenue/"
    },
    {
      name:"Sidewalk Bookings Agency Website",
      img: "assets/img/sidewalk.jpg",
      description:"Sidewalk Bookings is one of the finest Music Booking agencies in Barcelona. Started in 2010, they have organized some of the nicest gigs in town, as well as organizing Tours for different artists all over Europe. This is their website.",
      link: "https://andre4130.github.io/sidewalkbookings/"
    },
    {
      name:"Rocket Racer",
      img: "assets/img/rockets.jpg",
      description:"The space race has already started! Set your propellers and be the first one to reach the outer space. Rocket Racer is a vanilla JavaScript exercise for learning about Classes and Constructors",
      link: "https://andre4130.github.io/cohetes/"
    },
    {
      name:"Drumkit",
      img: "assets/img/drumkit.jpg",
      description:"Can't play drums? Just check the amazing Drumkit. Vanilla JavaScript exercise that generates a drum machine by pressing keys on your keyboard",
      link: "https://andre4130.github.io/DrumKit/"
    },
    {
      name:"Random Jokes",
      img: "assets/img/randomjokes.jpg",
      description:"How hard is to make Chuck Norris Laugh? Just press the button and see what happens. AJAX and jQuery exercise for learning how to make a request to a remote API.",
      link: "https://andre4130.github.io/RandomJokes/"
    },
    {
      name:"Vuelve Zinc",
      img: "assets/img/zinc.jpg",
      description:"SASS animation for the band Vuelve Zinc",
      link: "https://andre4130.github.io/VuelveZinc/"
    },
  ]
   

  constructor() { }


  getSkills():Skill[]{
  return this.skills;
  }

  getLanguages():Language[]{
    return this.languages;
    }

  getCoding(): Coding[] {
    return this.codes
  }

  getEngineering(): Engineering[] {
    return this.engineering
  }

  getImages() : Images[] {
    return this.images;
  }

  getProjects() : Frontend[] {
    return this.feProjects;
  }

  goToSkill(idx:string){
    return this.skills[idx];
  }

  getBands():Band[]{
    return this.music;
  }

  goToBand(idx:string){
    return this.music[idx];
  }
}


export interface Skill{
  link?:string,
  type:string,
  class:string,
  experienceDate1?:string,
  experience1?:string,
  experienceLocation1?:string,
  experienceDate2?:string,
  experience2?:string,
  experienceLocation2?:string,
  experienceDate3?:string,
  experience3?:string,
  experienceLocation3?:string,
  experienceDate4?:string,
  experience4?:string,
  experienceLocation4?:string,
  education0?:string,
  educationDate0?:string,
  educationLocation0?:string,
  education1?:string,
  educationDate1?:string,
  educationLocation1?:string,
  education2?:string,
  educationDate2?:string,
  educationLocation2?:string,
  education3?:string,
  educationDate3?:string,
  educationLocation3?:string,
  backgroundimg?:string,
  links?:string[]
}

export interface Band {
  band:string,
  bandcamp: string,
  spotify: string,
  instagram: string,
  video?: string[],
  img: string[],
  bio:string,
  songs?: string[]
}

export interface Language {
    lang: string,
    progress: number,
    level?: string,
}

export interface Coding {
  type: string,
  progress: number,
  imgsrc: string,
  level?: string,
}

export interface Engineering {
  type: string,
  progress: number,
  imgsrc: string,
  level?: string,
}

export interface Images {
  type: string,
  img:string [],
}

export interface Frontend {
  name: string,
  img: string,
  description: string,
  link: string,
}