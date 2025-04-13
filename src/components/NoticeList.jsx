import React, { useEffect, useState } from "react";
import axios from "axios";

const NoticeList = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/notices")
      .then((res) => setNotices(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">📢 Public Notices</h2>
      <div className="space-y-6">
        {notices.map((notice) => (
          <div key={notice._id} className="border border-gray-300 rounded-xl p-4 shadow-md bg-white">
            <h3 className="text-xl font-semibold text-gray-800">{notice.title}</h3>
            <p className="text-gray-600 mt-2">{notice.description}</p>
            {notice.imageUrl && (
              <img
                src={notice.imageUrl}
                alt="notice"
                className="mt-4 rounded-md w-full max-w-sm object-cover"
              />
            )}
            <p className="text-sm text-gray-500 mt-2">
              Posted on {new Date(notice.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeList;
