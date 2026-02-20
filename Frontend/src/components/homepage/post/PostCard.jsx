import { useState } from "react";
import styles from "./PostCard.module.css";
import LikeDropdown from "./LikeDropdown";
import CommentSection from "./CommentSection";
import ShareModal from "./ShareModal";

const PostCard = ({ post }) => {
  const [showLikes, setShowLikes] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);

  return (
    <div className={styles.card}>
      <p>{post.description}</p>

      {post.images.map((img, i) => (
        <img key={i} src={img} alt="" className={styles.image} />
      ))}

      <div className={styles.stats}>
        <span onClick={() => setShowLikes(!showLikes)}>
          {post.likes.length} Likes
        </span>

        <span onClick={() => setShowComments(!showComments)}>
          {post.comments.length} Comments
        </span>

        <span onClick={() => setShowShare(!showShare)}>
          {post.shares.length} Shares
        </span>
      </div>

      {showLikes && <LikeDropdown users={post.likes} />}
      {showComments && <CommentSection comments={post.comments} />}
      {showShare && <ShareModal />}
    </div>
  );
};

export default PostCard;
