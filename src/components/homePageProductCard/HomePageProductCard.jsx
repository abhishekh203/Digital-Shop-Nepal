import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from cart");
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="mt-10">
            {/* Heading */}
            <div className="">
                <h1 className="text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* Main section */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productImageUrl } = item;
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4 sm:w-1/2">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-100 hover:shadow-xl cursor-pointer bg-gradient-to-br from-pink-300 via-red-300 to-yellow-300">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-72 h-80 w-full object-cover transition-transform transform hover:scale-105"
                                            src={productImageUrl}
                                            alt={title}
                                        />
                                        <div className="p-4">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                Premium Shop Nepal
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center">
                                                {cartItems.some((p) => p.id === item.id) 
                                                    ?
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className="bg-red-500 hover:bg-red-600 w-full text-white py-2 rounded-lg font-bold transition duration-300"
                                                    >
                                                        Remove from Cart
                                                    </button>
                                                    : 
                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className="bg-blue-500 hover:bg-blue-600 w-full text-white py-2 rounded-lg font-bold transition duration-300"
                                                    >
                                                        Add to Cart
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;
