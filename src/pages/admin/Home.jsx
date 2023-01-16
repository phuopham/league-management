import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import ScoreCard from "../../components/ScoreCard";
import RankingTable from "../../components/RankingTable";

const Home = () => {

  return (
    <div>
      <div className="flex items-center justify-between mb-10 uppercase tracking-[5px] font-bold">
        <h1 className="text-4xl text-white">League <span className="text-primary">Dashboard</span></h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-3">
        <ScoreCard
          team1="Team1" score1='5'
          team2="Team2" score2='3'
          type='Play-off' time='11/01/2023' />
        <ScoreCard
          team1="Team3" score1='2'
          team2="Team2" score2='3'
          type='Play-off' time='11/01/2023' />
        <ScoreCard
          team1="Team1" score1='3'
          team2="Team2" score2='4'
          type='Play-off' time='11/01/2023' />
        <ScoreCard
          team1="Team1" score1='0'
          team2="Team2" score2='3'
          type='Play-off' time='11/01/2023' />
        <ScoreCard
          team1="Team1" score1='2'
          team2="Team2" score2='0'
          type='Semi-final' time='11/01/2023' />
        <ScoreCard
          team1="Team1" score1='1'
          team2="Team2" score2='1'
          type='Final' time='11/01/2023' />
      </div>
      <RankingTable
        name='Group01'
      />
      <RankingTable
        name='Group02'
      />
      <RankingTable
        name='Final'
      />
    </div>
  );
};

export default Home;
