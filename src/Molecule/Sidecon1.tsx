import React, { useState } from 'react';
import Chat from '../assets/Chat.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faSearch, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faComments, faRepeat, faList, faBell } from '@fortawesome/free-solid-svg-icons';
import Dropdownicon from '../Atoms/Dropdownicon';
import SideCon2 from './SideCon2'; // Import SideCon2 component
import Chatbox from '../Atoms/Chatbox';
import Chatting from '../Atoms/Chatting';

const Second = Chatting; 

function Sidecon1() {
  const [showSideCon2, setShowSideCon2] = useState(true); // State to manage visibility of SideCon2

  const toggleChange = () => {
    setShowSideCon2(!showSideCon2);
  };
 
  return (
    <div className=' w-full flex h-100% gap-2'>
      <div className='w-4/12'>
        <nav className="flex items-center justify-between border-b border-gray-200 h-11% gap-10">
          <div className="flex gap-4 items-center">
            <img src={Chat} alt="img" className="w-16" />
            <p className="font-medium text-gray-500 text-xl">Chats</p>
          </div>
          <div className="flex gap-10 items-center">
            <FontAwesomeIcon icon={faRepeat} className="text-gray-400 text-opacity-66 text-xl cursor-pointer" />
            <FontAwesomeIcon icon={faComments} className="text-gray-400 text-opacity-66 text-xl cursor-pointer" />
            <FontAwesomeIcon icon={faCircleUser} className="text-gray-400 cursor-pointer text-xl" />
            <FontAwesomeIcon icon={faBell} className='text-gray-400 cursor-pointer text-xl' />
            <Dropdownicon />
          </div>
        </nav>
        <div className="flex items-center gap-6 border-b border-gray-200a h-16">
          <div className="searchBar h-6vh border border-gray-2007d rounded-lg flex items-center w-96 gap-1 ml-4">
            <FontAwesomeIcon icon={faSearch} className="pl-4 text-gray-400" />
            <input type="text" placeholder="Enter email" className="w-80 ml-0.5 h-8" />
          </div>
          <FontAwesomeIcon icon={faList} className="text-gray-400 text-18" />
        </div>
        <div className="h-14 flex items-center gap-1 border-b-2">
          <FontAwesomeIcon icon={faArchive} className="text-gray-400 text-1xl pl-6" />
          <p className="pl-6 text-gray-500 font-medium text-lg pr-6 font-500">Hidden Chats</p>
        </div>
        
        {/* Conditionally render SideCon2 based on state */}
        {/* {showSideCon2 ? ( */}
          <div className="h-96 overflow-y-scroll" onClick={toggleChange}>
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
            <Chatbox />
          </div>
        
        {/* Button to toggle visibility */}
      </div>
      {showSideCon2 ? (
      <div className='w-8/12'> 
        {showSideCon2 && <SideCon2 />}
      </div>
        ) : (
          <Second />
        )}
    </div>
  );
}

export default Sidecon1;
