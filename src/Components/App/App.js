import {useState,useEffect} from 'react';
import AddMovie from "../AddMovie/AddMovie.js";
import "./app.css";
import MovieList from '../MovieList/MovieList.js';
import Filtring from '../Filtring/Filtring.js';
import Description from '../Description/Description.js';
import {Routes,Route } from "react-router-dom";

const info = [
  { title:'Reservoir Dogs', 
  trailer: 'https://www.youtube.com/embed/GLPJSmUHZvU?si=qsLA6iTdn74k88Au',
  img:'/images/1.jpg', 
  description:"When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.", 
  posterURL:"www.reservoirdogs.com", 
  rating:3.7},

  { title:'Pulp Fiction', 
  trailer: 'https://www.youtube.com/embed/s7EdQ4FqbhY?si=mbK-xKg_MXvAykFA',
  img:'/images/22.jpg', 
  description:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption",
  posterURL:"www.pulpfiction.com", 
  rating:4.3 },

  { title:'La La Land', 
  trailer: 'https://www.youtube.com/embed/0pdqf4P9MB8?si=GfRC0HihitGH2yUb',
  img:'/images/4.webp', 
  description:"While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.", 
  posterURL:"www.lalaland.com", 
  rating:3.4 },

  { title:'Guardians Of The Galaxy 2', 
  trailer:'https://www.youtube.com/embed/dW1BIid8Osg?si=XSBBWTCjgoJCwGgj',
  img:'/images/5.jpg', 
  description:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.", 
  posterURL:"www.guardiansofthegalaxy.com", 
  rating:3.8 },

  { title:"Schindler's list",
  trailer:'https://www.youtube.com/embed/mxphAlJID9U?si=m4IcKQCTnR6nqQvB', 
  img:'/images/6.jpg', 
  description:"Oskar Schindler, a German industrialist and member of the Nazi party, tries to save his Jewish employees after witnessing the persecution of Jews in Poland.", 
  posterURL:"www.schindler'slist.com", 
  rating:4.5 },

  { title:'Star Wars (Return Of The Jedi)', 
  trailer:'https://www.youtube.com/embed/7L8p7_SLzvU?si=ny3tOGKEQyg3v9yy',
  img:'/images/7.jpg', 
  description:"Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.", 
  posterURL:"www.starwars.com", 
  rating:4.5 },

  { title:'Deadpool', 
  trailer:'https://www.youtube.com/embed/Xithigfg7dA?si=Ty4O9MBDFxAm5O1l',
  img:'/images/8.jpg', 
  description:"Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.", 
  posterURL:"www.deadpool.com", 
  rating:3.8 },

  { title:'The Sound Of Music',
  trailer:'https://www.youtube.com/embed/ygyK0HStjwg?si=NSkyXhgebD5u3Sbr', 
  img:'/images/9.jpg', 
  description:"Maria, an aspiring nun, is sent as a governess to take care of seven motherless children. Soon her jovial and loving nature tames their hearts and the children become fond of her.", 
  posterURL:"www.thesoundofmusic.com", 
  rating:4.8 },
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
      <Routes>
        {/* SHOW THIS TWO COMPONENTS IF WE ARE IN THE ROOT PATH */}
        <Route path="/"  element={ <> <Filtring filter={filter}/>  <MovieList list={filtredList} /> <AddMovie adding={adding} />   </> } />
        {/*  SHOW THIS COMPONENT IF WE ARE IN : /:id  */}
        <Route path="/:id" element={ <Description list={list} /> } />
      </Routes>
    </div>
      );
}

export default App;
