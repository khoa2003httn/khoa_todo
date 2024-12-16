import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from './ItemContext';
function Additem() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);


    const navigate = useNavigate();

    const { items, setItems } = React.useContext(ItemContext);
    console.log('>>>items',items);
    console.log('>>>setItems',setItems);
    const inputTextHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'phone') setPhone(value);
    };

    const fileHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const submitHandler = () => {
        if (name.trim() && email.trim() && phone.trim()) {
            // console.log({ name, email, phone, image });
            setItems([...items  ,{ name, email, phone, image }]);

                navigate('/', );
        } else {
            console.log('Please fill in all fields');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-orange-500 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-white text-center">Add Item</h2>
                <label className="text-gray-700">Name</label>
                <input
                    onChange={inputTextHandler}
                    name="name" // Thêm thuộc tính name
                    type="text"
                    value={name}
                    className="text-gray-700 border border-gray-300 rounded-lg w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                />
                <label className="text-gray-700">Email</label>
                <input
                    onChange={inputTextHandler}
                    name="email" // Thêm thuộc tính name
                    type="text"
                    value={email}
                    className="text-gray-700 border border-gray-300 rounded-lg w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                />
                <label className="text-gray-700">Phone</label>
                <input
                    onChange={inputTextHandler}
                    name="phone" // Thêm thuộc tính name
                    type="text"
                    value={phone}
                    className="text-gray-700 border border-gray-300 rounded-lg w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                />
                <label className="text-gray-700">Image</label>
                <input
                    type="file"
                    onChange={fileHandler}
                    className="
                        block w-full text-sm text-gray-700
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-orange-500 file:text-white
                        hover:file:bg-orange-600 hover:file:text-white
                    "
                />
                <button
                    className="text-center border border-gray-300 rounded-full w-full text-white py-2 px-4 bg-stone-600"
                    onClick={submitHandler}
                >
                    ADD
                </button>
                {/* khoang trang */}
             
            </div>
        </div>
    );
}

export default Additem;
                    