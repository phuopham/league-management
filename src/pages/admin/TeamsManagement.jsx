import React from "react";
import { RiAddLine, RiArrowDownSLine, RiArrowLeftSLine, RiArrowRightSLine, RiLogoutCircleRLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import ScoreCard from "../../components/ScoreCard";
import RankingTable from "../../components/RankingTable";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { Link } from "react-router-dom";
import TeamCard from "../../components/TeamCard";
import ProfileInput from "../../components/ProfileInput";
import NewPlayerCard from "../../components/NewPlayerCard";

const TeamManagement = () => {

  return (
    <div>
      <div className="flex flex-wrap justify-between mb-10 uppercase tracking-[5px] font-bold relative">
        <h1 className="text-4xl text-white">Team <span className="text-primary">Management</span></h1>
        <div>
          <Menu
            menuButton={
              <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                <span>League: <span className="text-primary uppercase">Name of the league</span></span>
                <RiArrowDownSLine />
              </MenuButton>
            }
            align="end"
            arrow
            arrowClassName="bg-secondary-100"
            transition
            menuClassName="bg-secondary-100 p-4"
          >
            <MenuItem className="p-0 hover:bg-transparent">
              <button
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-6 w-full uppercase"
              >
                <span>Name of the league</span>
                <div className="text-xs text-gray-500">DD-MM-YYYY</div>
              </button>
            </MenuItem>
            <hr className="my-4 border-gray-500" />
            <MenuItem className="p-0 hover:bg-transparent">
              <button
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-6 w-full uppercase"
              >
                <span>Super league</span>
                <div className="text-xs text-gray-500">Start date</div>
              </button>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-3">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <div className="flex items-center justify-center">
          <div className="bg-primary rounded-full p-5 text-5xl text-gray-900 font-bold opacity-20 hover:opacity-90">
            <RiAddLine />
          </div>
        </div>
      </div>

      <div className="mb-[25rem]"></div>
      <NewPlayerCard />


    </div>
  );
};

export default TeamManagement;
