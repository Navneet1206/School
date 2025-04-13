import React, { useEffect, useState } from "react";
import axios from "axios";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notices")
      .then((res) => setNotices(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        📢 Public Notices
      </h2>
      <div className="space-y-12">
        {notices.map((notice, index) => (
          <div
            key={notice._id}
            className="flex flex-col md:flex-row items-center border border-gray-300 rounded-xl p-6 shadow-lg bg-white"
          >
            {/* Image Container */}
            <div
              className={`md:w-1/2 ${
                index % 2 !== 0 ? "order-2 md:order-1" : "order-1"
              }`}
            >
              {notice.imageUrl && (
                <img
                  src={notice.imageUrl}
                  alt="notice"
                  className="w-full h-64 object-cover rounded-md"
                />
              )}
            </div>

            {/* Text Container */}
            <div
              className={`md:w-1/2 p-4 ${
                index % 2 !== 0 ? "order-1 md:order-2" : "order-2"
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                {notice.title}
              </h3>
              <p className="text-gray-600 mt-4">{notice.description}</p>
              <p className="text-sm text-gray-500 mt-4">
                Posted on {new Date(notice.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
