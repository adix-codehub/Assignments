import React from "react";
import avatar from './assets/avatar.png';

const UserCard = ({ name, email }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md border border-black/30 shadow-lg rounded-2xl p-6 max-w-xs text-center transition-transform transform hover:scale-105 h-[300px] flex flex-col justify-evenly">
            <div className="w-32 h-32 mx-auto">
                <img src={avatar} alt="" className="w-32 h-32 mx-auto rounded-full object-cover" />
            </div>
        <div>
            <h2 className="text-2xl font-bold text-black mt-4">{name}</h2>
            <p className="text-black-300">{email}</p> 
        </div>
      
    </div>
  );
};

export default UserCard;
