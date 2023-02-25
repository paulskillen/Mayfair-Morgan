/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export interface IHomePageProps {
    [key: string]: any;
}

const HomePage: React.FC<IHomePageProps> = ({ id }) => {
    return (
        <main className="home-page_container w-screen h-screen bg-black text-white overflow-y-scroll">
            <img
                className="w-screen h-screen"
                alt="logo"
                src="/images/placeholder/background.jpeg"
            />
        </main>
    );
};

export default HomePage;