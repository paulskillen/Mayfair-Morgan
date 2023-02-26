/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export interface IHomePageProps {
    [key: string]: any;
}

const HomePage: React.FC<IHomePageProps> = ({ id }) => {
    return (
        <main className="home-page_container w-screen h-screen text-black md:flex justify-center items-center overflow-scroll">
            <div>
                <div className="flex items-center text-center w-full justify-center mb-5 text-5xl mt-3 md:text-9xl font-semibold text-blue-800">
                    <div>Mayfair</div>
                    <span className="text-cyan-300">&</span>
                    <div>Morgan</div>
                </div>
                <div className="grid grid-cols-10 px-3 md:px-0">
                    <div className="col-span-10 md:col-span-3 md:pr-3">
                        <div className="mb-2 font-bold text-xl">
                            International Mobile Data
                        </div>
                        <img
                            className="w-full md:h-72"
                            alt="logo"
                            src="/images/logo/logo.png"
                        />
                    </div>
                    <div className="col-span-10 md:col-span-7 md:pl-3">
                        <div className="mb-2 font-bold text-xl">
                            Property Management
                        </div>
                        <img
                            className="w-full md:h-72"
                            alt="logo"
                            src="/images/placeholder/background.jpeg"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
