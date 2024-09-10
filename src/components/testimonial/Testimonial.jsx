import React from "react";
import Slider from "react-slick";
import { FaUserCircle } from "react-icons/fa"; // Importing from react-icons

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,                // Enables auto sliding
        autoplaySpeed: 1500,           // Slide every 1 second
        arrows: false,                 // Hide arrows for cleaner design
    };

    return (
        <section className="text-gray-700 body-font mb-10 bg-gradient-to-r from-red-100 to-pink-100 py-10">
            {/* Main Section */}
            <div className="container px-5 py-10 mx-auto">
                {/* Heading */}
               

                {/* Subheading */}
                <h2 className="text-center text-2xl font-semibold mb-8">
                    What our <span className="text-orange-500">customers</span> are saying
                </h2>

                {/* Testimonials Slider */}
                <Slider {...settings}>
                    {/* Testimonial 1 */}
                    <div className="p-4">
                        <div className="h-full text-center shadow-lg rounded-lg p-6 bg-gradient-to-r from-yellow-200 to-yellow-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                            <FaUserCircle className="text-6xl mx-auto mb-4 text-orange-500" />
                            <p className="leading-relaxed text-gray-700 mb-4">
                                "यो साइटबाट मैले केही प्रीमियम खाता किनेको छु, एकदमै राम्रो सेवा।"
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-orange-600 mt-4 mb-2"></span>
                            <h2 className="text-gray-800 font-medium text-lg uppercase">
                                Kamal Sharma
                            </h2>
                            <p className="text-gray-500">VIP ग्राहक</p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="p-4">
                        <div className="h-full text-center shadow-lg rounded-lg p-6 bg-gradient-to-r from-blue-200 to-blue-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                            <FaUserCircle className="text-6xl mx-auto mb-4 text-orange-500" />
                            <p className="leading-relaxed text-gray-700 mb-4">
                                "मैले पहिलो पटक किनेको, अनुभव राम्रो थियो। काम गरिरहेको छ।"
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-orange-600 mt-4 mb-2"></span>
                            <h2 className="text-gray-800 font-medium text-lg uppercase">
                                Sita Basnet
                            </h2>
                            <p className="text-gray-500">ग्राहक</p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="p-4">
                        <div className="h-full text-center shadow-lg rounded-lg p-6 bg-gradient-to-r from-green-200 to-green-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                            <FaUserCircle className="text-6xl mx-auto mb-4 text-orange-500" />
                            <p className="leading-relaxed text-gray-700 mb-4">
                                "द्रुत सेवा र एकदम राम्रो मूल्यमा प्रीमियम खाता पाएको छु।"
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-orange-600 mt-4 mb-2"></span>
                            <h2 className="text-gray-800 font-medium text-lg uppercase">
                                Prakash Thapa
                            </h2>
                            <p className="text-gray-500">ग्राहक</p>
                        </div>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="p-4">
                        <div className="h-full text-center shadow-lg rounded-lg p-6 bg-gradient-to-r from-purple-200 to-purple-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                            <FaUserCircle className="text-6xl mx-auto mb-4 text-orange-500" />
                            <p className="leading-relaxed text-gray-700 mb-4">
                                "समयमै खाता पाएको छु। वेबसाइटलाई म धेरै सुझाव दिन्छु।"
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-orange-600 mt-4 mb-2"></span>
                            <h2 className="text-gray-800 font-medium text-lg uppercase">
                                Bishal Rai
                            </h2>
                            <p className="text-gray-500">ग्राहक</p>
                        </div>
                    </div>

                    {/* Testimonial 5 */}
                    <div className="p-4">
                        <div className="h-full text-center shadow-lg rounded-lg p-6 bg-gradient-to-r from-pink-200 to-pink-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                            <FaUserCircle className="text-6xl mx-auto mb-4 text-orange-500" />
                            <p className="leading-relaxed text-gray-700 mb-4">
                                "म एकदम सन्तुष्ट छु। उच्च स्तरको सेवा र छिटो डेलिभरी।"
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-orange-600 mt-4 mb-2"></span>
                            <h2 className="text-gray-800 font-medium text-lg uppercase">
                                Aayush Khatri
                            </h2>
                            <p className="text-gray-500">VIP ग्राहक</p>
                        </div>
                    </div>

                    {/* Testimonial 6 */}
                    <div className="p-4">
                        <div className="h-full text-center shadow-lg rounded-lg p-6 bg-gradient-to-r from-indigo-200 to-indigo-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                            <FaUserCircle className="text-6xl mx-auto mb-4 text-orange-500" />
                            <p className="leading-relaxed text-gray-700 mb-4">
                                "अर्को पटक फेरि यहाँबाट नै किन्न चाहन्छु, एकदम सस्तो।"
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-orange-600 mt-4 mb-2"></span>
                            <h2 className="text-gray-800 font-medium text-lg uppercase">
                                Shreya Maharjan
                            </h2>
                            <p className="text-gray-500">ग्राहक</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;
