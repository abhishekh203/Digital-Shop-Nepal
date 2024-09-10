import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Category array
const category = [
    { image: '../img/computer.png', name: 'ott', color: 'bg-green-500' },
    { image: '../img/video-player.png', name: 'movies', color: 'bg-yellow-500' },
    { image: '../img/spotify.png', name: 'music', color: 'bg-red-500' },
    { image: '../img/netflix.png', name: 'netflix', color: 'bg-black' },
    { image: '../img/streaming-tv-app.png', name: 'streaming', color: 'bg-teal-500' },
    { image: 'https://cdn-icons-png.flaticon.com/256/1382/1382954.png', name: 'useful-tools', color: 'bg-purple-500' },
    { image: 'https://cdn-icons-png.flaticon.com/256/1855/1855827.png', name: 'bundle', color: 'bg-orange-500' },
    { image: '../img/online-course.png', name: 'education', color: 'bg-blue-500' },
    { image: '../img/vpn.png', name: 'vpn', color: 'bg-gray-500' },
    { image: 'https://cdn-icons-png.flaticon.com/256/1034/1034131.png', name: 'games', color: 'bg-pink-500' },
    { image: 'https://cdn-icons-png.flaticon.com/256/2751/2751397.png', name: 'smm panel', color: 'bg-green-600' },
    { image: 'https://cdn-icons-png.flaticon.com/256/2879/2879689.png', name: 'special offer', color: 'bg-yellow-600' },
    { image: 'https://cdn-icons-png.flaticon.com/256/1086/1086741.png', name: 'antivirus', color: 'bg-red-600' },
    { image: 'https://cdn-icons-png.flaticon.com/256/2331/2331942.png', name: 'gift card', color: 'bg-blue-600' },
];

const Category = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

    // Handle navigation when category is clicked
    const handleNavigation = (item) => {
        navigate(`/category/${item.name}`);
    };

    // Handle manual scroll
    const scrollLeft = () => {
        containerRef.current.scrollBy({
            left: -200,
            behavior: "smooth",
        });
        setIsAutoScrollPaused(true); // Pause auto-scroll on manual interaction
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({
            left: 200,
            behavior: "smooth",
        });
        setIsAutoScrollPaused(true); // Pause auto-scroll on manual interaction
    };

    // Auto-scrolling effect with infinite loop
    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = 0;
        const scrollSpeed = 1.5; // Adjust the scrolling speed
        const resetPoint = container.scrollWidth / 2; // Halfway point (since we duplicate the categories)

        const autoScroll = () => {
            if (isAutoScrollPaused) return; // Skip auto-scroll if manually paused

            scrollAmount += scrollSpeed;
            if (scrollAmount >= resetPoint) {
                scrollAmount = 0; // Reset to the beginning when reaching the duplicated halfway point
                container.scrollLeft = 0; // Instant reset without animation
            } else {
                container.scrollTo({
                    left: scrollAmount,
                    behavior: "smooth",
                });
            }
        };

        const interval = setInterval(autoScroll, 30); // Fast interval for smooth scrolling

        return () => clearInterval(interval);
    }, [isAutoScrollPaused]); // Watch the pause state

    return (
        <div className="mt-8 px-4 lg:px-0">
            <div className="relative">
                {/* Previous Button */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 rounded-full p-2 z-10"
                >
                    &#8249; {/* Left arrow */}
                </button>

                {/* Categories Container */}
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto hide-scroll-bar space-x-6 lg:space-x-12 lg:justify-center"
                    style={{ scrollBehavior: "smooth" }}
                    onMouseEnter={() => setIsAutoScrollPaused(true)} // Pause auto-scroll on hover
                    onMouseLeave={() => setIsAutoScrollPaused(false)} // Resume auto-scroll on leave
                >
                    {/* Original + Duplicated Categories for Infinite Scrolling */}
                    {[...category, ...category].map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2 min-w-[120px]">
                            {/* Image Container */}
                            <div
                                onClick={() => handleNavigation(item)}
                                className={`w-20 h-20 lg:w-24 lg:h-24 rounded-full ${item.color} transition-transform hover:scale-110 hover:shadow-xl cursor-pointer flex justify-center items-center`}
                            >
                                <img src={item.image} alt={item.name} className="w-3/4 h-3/4 object-contain" />
                            </div>

                            {/* Category Name */}
                            <h1 className="text-sm lg:text-md text-center font-semibold capitalize text-gray-700 hover:text-pink-500 transition-colors">
                                {item.name}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 rounded-full p-2 z-10"
                >
                    &#8250; {/* Right arrow */}
                </button>
            </div>

            {/* Custom Scrollbar Styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                .hide-scroll-bar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </div>
    );
};

export default Category;
