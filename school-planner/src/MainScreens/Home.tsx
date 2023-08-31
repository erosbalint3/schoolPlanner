import React from 'react';
import './Home.css';
import MainCard from '../Main-Card/Main-Card';
import SmallCard from '../Small-Card/Small-Card';
import { CardType } from '../Enums/Small-Card-Type';
import AddButtonGroup from '../Add-Button-Group/Add-Button-Group';
import Calendar from '../Calendar/Calendar';

function Home() {
  return (
    <div id='HomeScreenDiv'>
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
            <Calendar />
          </MainCard>
        </div>
      </div>
  );
}

export default Home;
