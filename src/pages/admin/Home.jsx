import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import ScoreCard from "../../components/ScoreCard";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">Good morning, <span className="text-primary">Admin</span>!</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-3">
        <ScoreCard 
        team1="Team1" score1='5'
        team2="Team2" score2='3'/>
        <ScoreCard
        team1="Team3" score1='2'
        team2="Team2" score2='3' />
        <ScoreCard 
        team1="Team1" score1='5'
        team2="Team2" score2='3'/>
        <ScoreCard 
        team1="Team1" score1='5'
        team2="Team2" score2='3'/>
        <ScoreCard 
        team1="Team1" score1='5'
        team2="Team2" score2='3'/>
        <ScoreCard 
        team1="Team1" score1='5'
        team2="Team2" score2='3'/>
      </div>
    </div>
  );
};

export default Home;
