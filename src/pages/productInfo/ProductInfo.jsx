import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState('');

    const { id } = useParams();

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id));
            setProduct(productTemp.data());
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <Layout>
            <section className="py-8 lg:py-16 bg-gradient-to-r from-gray-100 to-gray-200 dark:bg-gray-800">
                {loading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <Loader />
                    </div>
                ) : (
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="flex flex-wrap mb-12 -mx-4">
                            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                <div className="relative">
                                    <img
                                        className="w-full h-[40vh] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                                        src={product?.productImageUrl}
                                        alt={product?.title}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-12">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                                        {product?.title}
                                    </h2>
                                    <div className="flex items-center mb-4">
                                        <div className="flex mb-4 mr-2">
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    fill="currentColor"
                                                    className={`bi bi-star ${index < 4 ? 'text-yellow-400' : 'text-gray-400'}`}
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-xl font-semibold text-gray-700 dark:text-gray-400">
                                            ₹{product?.price}
                                        </p>
                                    </div>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">
                                            Description:
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-400">{product?.description}</p>
                                    </div>
                                    <div className="mb-6">
                                        <button
                                            className="w-full px-4 py-3 text-center text-white bg-gradient-to-r from-pink-500 to-pink-700 border border-pink-600 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-pink-600 focus:outline-none"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default ProductInfo;
