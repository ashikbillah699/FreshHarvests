import useAllUsers from "../../hooks/useAllUsers";

const AllUser = () => {
    const [users] = useAllUsers()
    const Allusers = users?.data || [];

    if (!Allusers.length) {
        return <div className="text-center py-10">Loading...<span className="loading loading-spinner loading-lg"></span></div>
    }

    return (
        <div className="overflow-x-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">All Users</h2>
            <div className="shadow-xl rounded-lg bg-white">
                <table className="table w-full">
                    <thead className="bg-base-200 text-base font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Profile</th>
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Allusers?.map((user, index) => (
                            <tr key={user.email}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img
                                                src={user.profileImage || "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="}
                                                alt="Profile" />
                                        </div>
                                    </div>
                                </td>
                                <td>{user.fullName}</td>
                                <td>{user.userName || <span className="text-gray-400 italic">N/A</span>}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`badge ${user.role === "ADMIN" ? "badge-primary" : "badge-secondary"}`}>
                                        {user.role}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;