import React, { useContext, useState } from 'react';
import { ItemContext } from './ItemContext';
import { useNavigate } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";
function Home() {
  const { items, setItems } = useContext(ItemContext);
  const navigate = useNavigate();

  // Trạng thái chỉnh sửa
  const [editItem, setEditItem] = useState(null); // Lưu thông tin item đang chỉnh sửa
  const [isEditing, setIsEditing] = useState(null); // Lưu chỉ mục (index) của item đang chỉnh sửa
  const colors = [
    'bg-zinc-500',
    'bg-gray-500',
    'bg-zinc-500',
    'bg-gray-500',
    'bg-zinc-500',
    'bg-gray-500',

  ];


  // Xử lý xóa
  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    console.log('Deleted Index:', index);
  };

  // Bắt đầu chỉnh sửa
  const handleEdit = (index) => {
    setEditItem({ ...items[index] });
    setIsEditing(index);
    console.log('items[index]:', items[index]);
    console.log('isEditing:', items);
  };

  // Xử lý thay đổi trong form chỉnh sửa
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('name:', name);
    console.log('value:', value);
    setEditItem((prev) => ({ ...prev, [name]: value }));
  };

  // Lưu chỉnh sửa
  const handleSave = () => {
    const updatedItems = [...items];
    updatedItems[isEditing] = editItem; // Cập nhật item đã chỉnh sửa
    setItems(updatedItems);
    setEditItem(null); // Reset trạng thái chỉnh sửa
    setIsEditing(null);
  };

  // Hủy chỉnh sửa
  const handleCancel = () => {
    setEditItem(null);
    setIsEditing(null);
  };

  return (
    <>

      <div className="text-2xl  font-bold text-center my-4 flex items-center flex justify-center">
        <input className="mr-2" />  {/* Thêm khoảng cách bên phải */}
        <RiSearchLine />
      </div>


      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <li
            key={item.name}
            className={`${colors[index % colors.length]} text-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4 flex flex-col items-center text-center`}
          >
            {isEditing === index ? (
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={editItem.name}
                  onChange={handleChange}
                  className="w-full mb-2 p-2 border rounded text-black"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="email"
                  value={editItem.email}
                  onChange={handleChange}
                  className="w-full mb-2 p-2 border rounded text-black"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  value={editItem.phone}
                  onChange={handleChange}
                  className="w-full mb-2 p-2 border rounded text-black"
                  placeholder="Phone"
                />
                <div className="mt-4 flex space-x-4">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // Hiển thị thông tin tĩnh
              <>
                <img
                  src={item.image}
                  alt="error"
                  className="w-24 text-white h-24 rounded-full mb-4 object-cover"
                />
                <p className="text-lg text-white font-semibold">{item.name}</p>
                <p className="text-sm text-white">{item.email}</p>
                <p className="text-sm text-white">{item.phone}</p>
                <div className="mt-4 flex space-x-4">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
