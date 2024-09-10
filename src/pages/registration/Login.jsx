/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    /**========================================================================
     *                          User Login Function 
    *========================================================================**/

    const userLoginFunction = async () => {
        // validation 
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            // console.log(users.user)

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user));
                    setUserLogin({
                        email: "",
                        password: ""
                    });
                    toast.success("Login Successfully");
                    setLoading(false);
                    if (user.role === "user") {
                        navigate('/user-dashboard');
                    } else {
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-white px-8 py-6 border border-gray-200 rounded-xl shadow-lg w-full max-w-md">

                {/* Top Heading  */}
                <div className="mb-6">
                    <h2 className='text-center text-3xl font-extrabold text-gray-800'>
                        Login
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                        className='bg-gray-50 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                        className='bg-gray-50 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    />
                </div>

                {/* Login Button  */}
                <div className="mb-6">
                    <button
                        type='button'
                        onClick={userLoginFunction}
                        className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white w-full py-2 font-bold rounded-md shadow-md transition-transform transform hover:scale-105'
                    >
                        Login
                    </button>
                </div>

                <div className="text-center">
                    <h2 className='text-gray-600'>Don't Have an account? <Link className='text-purple-600 font-semibold hover:underline' to={'/signup'}>Signup</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;
