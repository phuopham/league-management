import React from "react";
import {
  RiArrowDownSLine,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Header = ({ whiteName, greenName }) => {
  return (
    <header>
      <div className="flex flex-wrap justify-between mb-10 uppercase tracking-[5px] font-bold relative">
        <h1 className="text-4xl text-white">{whiteName} <span className="text-primary">{greenName}</span></h1>
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
    </header>
  );
};

export default Header;
