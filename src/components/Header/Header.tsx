import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-center ">
      <div className="absolute top-10 z-20 w-[80%] h-[100px] flex items-center justify-center rounded-lg">
        <div className="w-full h-full flex justify-between items-center ">
          <div className="font-archivo text-2xl">EC</div>
          <div>
            <ul className="flex gap-4">
              <li className="font-archivo">Mes créations</li>
              <li className="font-archivo">Réseaux sociaux</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
