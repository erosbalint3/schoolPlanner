import React from 'react';
import './Home.css';
import NavBar from '../Elements/Navigation-Bar';
import MainCard from '../Elements/Main-Card';
import SmallCard from '../Elements/Small-Card';
import { CardType } from '../Enums/Small-Card-Type';
import AddButtonGroup from '../Elements/Add-Button-Group';

function Home() {
  return (
    <div id='HomeScreenDiv'>
      <div id='centeredNavBarSpan'>
        <NavBar></NavBar>
        <div id='mainCardsDiv'>
          <MainCard>
            <SmallCard text='Weighted Average:' value={5} type={CardType.AVERAGE}></SmallCard>
            <SmallCard text='Credit index:' value={5} type={CardType.AVERAGE}></SmallCard>
          </MainCard>
          <MainCard>
            <AddButtonGroup></AddButtonGroup>
          </MainCard>
          <MainCard>
            <SmallCard text='Homeworks left:' value={5} type={CardType.TASKS}></SmallCard>
            <SmallCard text='Exams left:' value={5} type={CardType.TASKS}></SmallCard>
          </MainCard>
          <MainCard>
            <h1>Szia uram</h1>
          </MainCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
