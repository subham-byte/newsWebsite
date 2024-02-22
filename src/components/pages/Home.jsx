/* eslint-disable no-unused-vars */
import React from "react";
import webImage from "../../images/image-web-3-desktop.jpg";
import Cards from "../Cards";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";

const Home = () => {
  return (
    <div className="container mx-auto mt-10 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-3/4 lg:mr-10">
          <img src={webImage} alt="web3image" className="w-full" />
          <div className="mt-7">
            <h1 className="text-3xl lg:text-5xl font-bold tracking-wider">
              The Bright Future of Web 3.0?
            </h1>
            <div className="mt-4 lg:mt-7">
              <p className="text-base lg:text-xl text-gray-500">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="mt-5 lg:mt-7 px-5 py-3 bg-red-500 rounded-md shadow-md text-white">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 w-full lg:w-1/4">
          <div className="p-4 shadow-md rounded-md bg-gray-800">
            <h1 className="text-2xl lg:text-4xl font-bold text-yellow-500">
              New
            </h1>
            <div className="text-white mt-4">
              <div className="my-4">
                <h3 className="text-xl lg:text-2xl font-bold">
                  Hydrogen VS Electric Cars
                </h3>
                <p className="mt-2">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </div>
              <hr className="border-gray-600" />
              <div className="my-4">
                <h3 className="text-xl lg:text-2xl font-bold">
                  The Downsides of AI Artistry
                </h3>
                <p className="mt-2">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <hr className="border-gray-600" />
              <div className="my-4">
                <h3 className="text-xl lg:text-2xl font-bold">
                  Is VC Funding Drying Up?
                </h3>
                <p className="mt-2">
                  Private funding by VC firms is down 50% YOY. We take a look
                  at what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20">
        <Cards
          card={{
            srNum: "01",
            image: image1,
            title: "Reviving Retro PCs",
            description: "What happens when old PCs are given modern upgrades?",
          }}
          className="mb-10 lg:mb-0 lg:mr-5"
        />
        <Cards
          card={{
            srNum: "02",
            image: image2,
            title: "Top 10 Laptops of 2022",
            description: "Our best picks for various needs and budgets.",
          }}
          className="mb-10 lg:mb-0 lg:mx-5"
        />
        <Cards
          card={{
            srNum: "03",
            image: image3,
            title: "The Growth of Gaming",
            description:
              "How the pandemic has sparked fresh opportunities.",
          }}
          className="lg:ml-5"
        />
      </div>
    </div>
  );
};

export default Home;
