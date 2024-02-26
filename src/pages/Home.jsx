import React from 'react';
import MainCover from '../components/maincover/MainCover';
import '../styles/Home.css';
import '../animations/Home.css';
import SearchBar from '../components/searchbar/SearchBar';
import CardList from '../components/cards/CardList';
import States from '../components/states/States';

const Home = () => {

  return (
    <section className='home'>
      <div className="upper__section">
          <MainCover/>
      </div>
      <div className="lower__section">
        <div className="search__bar">
          <SearchBar/>
        </div>
        <div className="card__section">
          <CardList/>
        </div>
        <div className="states__section">
          <States/>
        </div>
        <div className="newletter">
          
        </div>
      </div>
    </section>
  );
};

export default Home;
