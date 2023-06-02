import { useQuery } from '@tanstack/react-query';
import { FaShieldVirus, FaTrash, FaUserShield } from 'react-icons/fa';


const AllUsers = () => {
    const { data: users = [] , refetch} = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json(users)
        
    })

    const handleDelete = user => {

    }


    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method : "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 1){
                refetch()
                alert("Added as admin")
            }
        })
    }

    return (

        <div>
            <h2>All user length : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'admin' 
                                    : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs"><FaUserShield></FaUserShield></button>
                                    }
                                </td>
                                <td>
                                    <th>
                                        <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                                    </th>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;