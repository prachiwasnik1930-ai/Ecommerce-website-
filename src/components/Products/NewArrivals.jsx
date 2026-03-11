import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    { _id: 1, name: "Stylish Jacket", price: 1200, images: [{ url: "https://picsum.photos/500/500?random=1" }] },
    { _id: 2, name: "Stylish Jacket", price: 1200, images: [{ url: "https://picsum.photos/500/500?random=2" }] },
    { _id: 3, name: "Stylish Jacket", price: 1200, images: [{ url: "https://picsum.photos/500/500?random=3" }] },
    { _id: 4, name: "Stylish Jacket", price: 1200, images: [{ url: "https://picsum.photos/500/500?random=4" }] },
    { _id: 5, name: "Stylish Jacket", price: 1200, images: [{ url: "https://picsum.photos/500/500?random=5" }] },
    { _id: 6, name: "Stylish Jacket", price: 1200, images: [{ url: "https://picsum.photos/500/500?random=6" }] },
    { _id: 7, name: "Stylish Jacket", price: 1200, images: [{ url: "https://picsum.photos/500/500?random=7" }] },
    { _id: 8, name: "Stylish Jacket", price: 1200, images: [{ url: "https://picsum.photos/500/500?random=8" }] },
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <section className="py-16">
      {/* heading */}
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight out of the runway.
        </p>

        {/* arrows */}
        <div className="absolute right-0 bottom-0 flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 bg-white shadow ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 bg-white shadow ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scrollable row */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-auto scrollbar-hide"
      >
        <div className="flex space-x-6 pb-4">
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="relative min-w-[280px] h-[380px] flex-shrink-0"
            >
              <img
                src={product.images[0]?.url}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                <Link to={`/product/${product._id}`}>
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">₹{product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
