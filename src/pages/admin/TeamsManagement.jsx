import React from "react";
import { RiAddLine, RiArrowDownSLine, RiArrowLeftSLine, RiArrowRightSLine, RiLogoutCircleRLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import TeamCard from "../../components/TeamCard";
import NewTeamBox from "../../components/NewTeamBox";
import Header from "../../components/Header";

const TeamManagement = () => {
  const teamList = ['Ba Dao', 'Khung Bo', 'An choi']

  return (
    <div>
      <Header whiteName='Team' greenName='management' />
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-3">
        {teamList.map(it => {
          return (
            <TeamCard name={it} />
          )

        })}
        <div className="flex items-center justify-center">
          <button className="bg-primary rounded-full p-5 text-5xl text-gray-900 font-bold opacity-20 hover:opacity-90">
            <RiAddLine />
          </button>
        </div>
        <NewTeamBox />
      </div>

      {/* <div className="mb-[25rem]"></div>
      <NewPlayerCard type='edit' /> */}


    </div>
  );
};

export default TeamManagement;
