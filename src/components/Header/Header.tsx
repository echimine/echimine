import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-center ">
      <div className="absolute top-10 z-10 w-[80%] h-[100px] flex items-center justify-center bg-white/30 rounded-lg">
        <div className="w-full h-full flex justify-around items-center">
          <div>EC</div>
          <div>
            <ul className="flex gap-4">
              <li>onglet 1</li>
              <li>onglet 2</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
