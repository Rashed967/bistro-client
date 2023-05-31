import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';

const MyCart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = itemId => {
        console.log(itemId)
        fetch(`http://localhost:5000/carts/${itemId}`, {
            method : "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert("deleted successfully")

            }

        })
    }
    return (
        <div>
            <div className='flex justify-evenly uppercase items-center gap-5 mb-4'>
                <h3>total cart : {cart.length}</h3>
                <h3>Total Price : {Math.ceil(totalPrice)}</h3>
                <button className='btn btn-secondary'>Pay</button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>#</th>
                            <th>Food name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {cart.map((item, index) =>  <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                    <div>
                                      
                    
                                    </div>
                                </div>
                            </td>
                            <td>
                            <div className="font-bold">{item.name}</div>
                             
                            </td>
                            <td>{item.price}</td>
                            <th>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                            </th>
                        </tr>)}
                        {/* item 1 */}
                       

                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default MyCart;