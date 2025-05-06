// export default function CommentForm({ blogTitle }) {
//     return (
//       <div className="comment-container">
//         <h2>Leave a Comment on this post</h2>
//         <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
//           <input type="hidden" name="Blog Title" value={blogTitle} />
//           <input type="text" name="firstName" placeholder="First Name" required />
//           <input type="text" name="lastName" placeholder="Last Name" />
//           <input type="email" name="email" placeholder="Email Address" required />
//           <textarea name="comment" placeholder="Your Comment" rows="4" required />
//           <button type="submit">Submit your Comment</button>
//         </form>
//       </div>
//     );
//   }
  
import React, { useState } from 'react';
import styles from './CommentForm.module.css';

const CommentForm = ({ pageId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('/api/submit-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, comment, pageId }),
      });

      if (response.ok) {
        setStatus('Comment submitted successfully!');
        setName('');
        setEmail('');
        setComment('');
      } else {
        setStatus('Failed to submit comment.');
      }
    } catch (error) {
      setStatus('Error submitting comment.');
    }
  };

  return (
    <div className={styles.commentForm}>
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default CommentForm;