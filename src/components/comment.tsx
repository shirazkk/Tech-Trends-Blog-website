"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: string;
  content: string;
  createdAt: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]); // State for comments
  const [content, setContent] = useState<string>(""); // State for the input content
  const [loading, setLoading] = useState<boolean>(false); // State for the loading status

  // Fetch comments on load
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comments");
        if (!res.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data: Comment[] = await res.json();
        setComments(data); // Set fetched comments
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, []);

  // Handle comment submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (res.ok) {
        const newComment: Comment = await res.json();
        setComments([newComment, ...comments]); // Add the new comment to the list
        setContent(""); // Clear the input field
      } else {
        alert("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle comment deletion
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/comments?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Filter out the deleted comment
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== id)
        );
      } else {
        alert("Failed to delete comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8 comment-section">
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Add a comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </form>

      {/* Comments List */}

      <div className="w-full">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex justify-between items-center mb-4 border p-2 rounded"
          >
            <div>
              <p>{comment.content}</p>
              <small className="text-gray-500">
                {new Date(comment.createdAt).toLocaleString()}
              </small>
            </div>
            <div>
              <button
                type="button"
                className="text-red-500  w-full"
                onClick={() => handleDelete(comment.id)}
                disabled={!comment.id}
              >
                Delete Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
