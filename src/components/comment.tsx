"use client";

import { useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleDeletleComment = (index: number) => {
    const commnetDelete = comments.filter((_, i) => i !== index);
    setComments(commnetDelete);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Comment Input Box */}
      <div className=" p-4 rounded-lg shadow-md">
        <textarea
          placeholder="Write a comment..."
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        ></textarea>

        <button
          onClick={handleCommentSubmit}
          className="mt-4 w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-all duration-300"
        >
          Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="mt-6 space-y-3">
        {comments.map((commentText, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-200 p-3 rounded-md shadow-sm"
          >
            <span className="text-gray-800">{commentText}</span>
            <button
              onClick={() => handleDeletleComment(index)}
              className="text-red-600 hover:text-red-800 font-semibold transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
