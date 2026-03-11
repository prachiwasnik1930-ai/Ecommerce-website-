import React from "react";
import { Link } from "react-router-dom";
import womensCollectionImage from "../../assets/womens-collection.webp";
import mensCollectionImage from "../../assets/mens-collection.webp";

const GenderCollectionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">

        {/* WOMEN */}
        <div className="relative flex-1 h-[700px]">
          <img
            src={womensCollectionImage}
            alt="Women's collection"
            className="w-full h-full object-cover"
          />

          {/* small box bottom-center */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="bg-white bg-opacity-90 px-6 py-4 text-center shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900">
                Women's collection
              </h2>
              <Link
                to="/collection/all?gender=women"
                className="text-sm text-gray-700 underline"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>

        {/* MEN */}
        <div className="relative flex-1 h-[700px]">
          <img
            src={mensCollectionImage}
            alt="Men's collection"
            className="w-full h-full object-cover"
          />

          {/* small box bottom-center */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="bg-white bg-opacity-90 px-6 py-4 text-center shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900">
                Men's collection
              </h2>
              <Link
                to="/collection/all?gender=men"
                className="text-sm text-gray-700 underline"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GenderCollectionSection;
