"use client";

import Image from "next/image";
import { Comment } from "@/data/posts";

interface CommentsProps {
  comments?: Comment[];
}

// Count every comment, including nested replies.
function countComments(comments: Comment[]): number {
  return comments.reduce(
    (total, c) => total + 1 + (c.children ? countComments(c.children) : 0),
    0
  );
}

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <li className="comment">
      <div className="avatar-author">
        <Image src={comment.avatar} alt={comment.author} width={60} height={60} />
      </div>

      <div className="comment-info">
        <div className="name-author">
          <h5>{comment.author}</h5>
          <span>{comment.date}</span>
        </div>

        <div className="body-comment">
          <p>{comment.body}</p>
          <div className="reply">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <div className="btn-reveal">
                <span>Reply</span>
                <span className="reveal">Reply</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {comment.children && comment.children.length > 0 && (
        <ul className="children">
          {comment.children.map((child) => (
            <CommentItem key={child.id} comment={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

// Single post - nested comments list.
export default function Comments({ comments = [] }: CommentsProps) {
  const total = countComments(comments);

  return (
    <div id="comments">
      {total > 0 ? (
        <>
          <h3 className="comments-title">Comments ({total})</h3>
          <ol className="comment-list">
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </ol>
        </>
      ) : (
        <h3 className="comments-title">No Comments</h3>
      )}

      <div className="form-comment">
        <div className="comment-respond">
          <h3 className="comment-reply-title">Leave a Reply</h3>

          <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
            <textarea rows={3} required placeholder="Comment" />
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email" />

            <button type="submit" className="btn-link">
              <div className="btn-reveal">
                <span>Submit Comment</span>
                <span className="reveal">Submit Comment</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
