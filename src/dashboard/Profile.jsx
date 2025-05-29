import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import useAllUsers from '../hooks/useAllUsers';
import { Link } from 'react-router-dom';

const Profile = () => {
    const user = useSelector(state => state.auth.user);
    const [users] = useAllUsers()

    if (!user || !users?.data) {
        return <div className="text-center py-10">Loading...<span className="loading loading-spinner loading-lg"></span></div>;
    }
    const mainRole = users?.data.find(u => u.email === user.email);



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative bg-green-500 h-28">
                    <Link to={`/dashboard/update/${mainRole.id}`}>
                        <button className='badge mt-2 ml-2'>Update</button>
                    </Link>
                    <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
                        <img
                            src={mainRole.photoURL}
                            alt="User Image"
                            className="w-28 h-28 rounded-full border-4 border-white shadow-md"
                        />
                    </div>
                </div>
                <div className="mt-16 px-6 pb-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">{mainRole.fullName}</h2>
                    <p className="text-sm text-gray-500">{mainRole.role}</p>
                    <div className="grid grid-cols-2 gap-4 mt-6 text-left">
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-orange-500" />
                            <div>
                                <p className="text-gray-500 text-sm">Phone:</p>
                                <p className="font-medium text-gray-700">Phone Number</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-orange-500" />
                            <div>
                                <p className="text-gray-500 text-sm">Email:</p>
                                <p className="font-medium text-gray-700">{mainRole.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;