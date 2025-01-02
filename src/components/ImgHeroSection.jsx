import React from 'react';
import me from '../assets/imgs/me.png';

const ImgHeroSection = () => {
    return (
			<div className="flex justify-center items-center ">
				<img src={me} alt="Profile" className="rounded-full object-cover border-4 border-gray-500 w-40 h-auto sm:w-48 sm:h-auto md:w-64 md:h-auto lg:w-72 lg:h-auto xl:w-80 xl:h-auto" />
			</div>
		);
};

export default ImgHeroSection;
