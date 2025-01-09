import React, { useState } from "react";
import { FaThumbsUp, FaTrash, FaComment } from "react-icons/fa";

const initialThreads = [
  {
    id: 1,
    title: "Tips for Home Safety",
    content: "What are some effective ways to make a home safer for seniors?",
    image: "https://via.placeholder.com/150",
    comments: ["Use grab bars in bathrooms", "Install non-slip mats"],
    likes: 5,
  },
];

const SupportForum = () => {
  const [threads, setThreads] = useState(initialThreads);
  const [newThread, setNewThread] = useState({ title: "", content: "", image: "" });

  const addThread = () => {
    if (newThread.title && newThread.content && newThread.image) {
      setThreads([
        ...threads,
        {
          id: threads.length + 1,
          ...newThread,
          comments: [],
          likes: 0,
        },
      ]);
      setNewThread({ title: "", content: "", image: "" });
    }
  };

  const addComment = (id, comment) => {
    setThreads(
      threads.map((thread) =>
        thread.id === id
          ? { ...thread, comments: [...thread.comments, comment] }
          : thread
      )
    );
  };

  const likeThread = (id) => {
    setThreads(
      threads.map((thread) =>
        thread.id === id ? { ...thread, likes: thread.likes + 1 } : thread
      )
    );
  };

  const deleteThread = (id) => {
    setThreads(threads.filter((thread) => thread.id !== id));
  };

  const deleteComment = (threadId, commentIndex) => {
    setThreads(
      threads.map((thread) =>
        thread.id === threadId
          ? {
              ...thread,
              comments: thread.comments.filter((_, index) => index !== commentIndex),
            }
          : thread
      )
    );
  };

  return (
    <div className="p-4  min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Forum Threads</h2>
      <div className="mb-6 bg-white p-4 rounded-lg shadow dark:bg-primary">
        <input
          type="text"
          placeholder="Thread Title"
          value={newThread.title}
          onChange={(e) =>
            setNewThread((prev) => ({ ...prev, title: e.target.value }))
          }
          className="p-2 border rounded-lg w-full mb-2"
        />
        <textarea
          placeholder="Thread Content"
          value={newThread.content}
          onChange={(e) =>
            setNewThread((prev) => ({ ...prev, content: e.target.value }))
          }
          className="p-2 border rounded-lg w-full mb-2"
        />
        <input
          type="file"
          placeholder="Image URL"
          value={newThread.image}
          onChange={(e) =>
            setNewThread((prev) => ({ ...prev, image: e.target.value }))
          }
          className="p-2 border rounded-lg w-full mb-2"
        />
        <button
          onClick={addThread}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Thread
        </button>
      </div>
      {threads.map((thread) => (
        <div key={thread.id} className="mb-4 p-4  bg-primary dark:bg-darkPrimary text-background dark:text-darkText rounded-lg shadow">
          <img
            src={thread.image}
            alt="Thread"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">{thread.title}</h3>
          <p className="mb-2">{thread.content}</p>
          <div className="flex items-center space-x-4 mb-2">
            <button
              onClick={() => likeThread(thread.id)}
              className="flex items-center text-green-500 hover:text-green-400"
            >
              <FaThumbsUp className="mr-1" /> Like ({thread.likes})
            </button>
            <button
              onClick={() => deleteThread(thread.id)}
              className="flex items-center text-red-500 hover:text-red-600"
            >
              <FaTrash className="mr-1" /> Delete Thread
            </button>
          </div>
          <div>
            <h4 className="font-semibold">Comments</h4>
            {thread.comments.map((comment, index) => (
              <div key={index} className="flex items-center ml-4">
                <p className="mr-2">- {comment}</p>
                <button
                  onClick={() => deleteComment(thread.id, index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <div className="mt-2">
              <input
                type="text"
                placeholder="Add a comment"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value) {
                    addComment(thread.id, e.target.value);
                    e.target.value = "";
                  }
                }}
                className="p-2 border rounded-lg w-full text-text dark:text-primary"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportForum;
