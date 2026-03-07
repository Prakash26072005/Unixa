import { useState, useRef, useEffect } from "react";
import styles from "./PostCard.module.css";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from '@mui/icons-material/Send';
import { currentUser } from "../../data/posts";

const MAX_LENGTH = 220;

const PostCard = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showLikes, setShowLikes] = useState(false);
const [newComment, setNewComment] = useState("");
const [activeMenu, setActiveMenu] = useState(null);
const [showShareModal, setShowShareModal] = useState(false);



const [commentsData, setCommentsData] = useState(post.comments);


const [selectedUsers, setSelectedUsers] = useState([]);
const [message, setMessage] = useState("");
  const dropdownRef = useRef(null);
const menuRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
    };
    
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isLiked = likes.some((user) => user.id === currentUser.id);

const handleCommentLike = (commentId) => {
  setCommentsData((prev) =>
    prev.map((comment) => {
      if (comment.id === commentId) {
        const isLiked = comment.likes?.includes(currentUser.id);

        return {
          ...comment,
          likes: isLiked
            ? comment.likes.filter((id) => id !== currentUser.id)
            : [...(comment.likes || []), currentUser.id],
        };
      }
      return comment;
    })
  );
};


const handleReplyLike = (commentId, replyId) => {
  setCommentsData((prev) =>
    prev.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: comment.replies.map((reply) => {
            if (reply.id === replyId) {
              const isLiked = reply.likes?.includes(currentUser.id);

              return {
                ...reply,
                likes: isLiked
                  ? reply.likes.filter((id) => id !== currentUser.id)
                  : [...(reply.likes || []), currentUser.id],
              };
            }
            return reply;
          }),
        };
      }
      return comment;
    })
  );
};

  const toggleLike = (e) => {
    e.stopPropagation();
    if (isLiked) {
      setLikes(likes.filter((u) => u.id !== currentUser.id));
    } else {
      setLikes([...likes, currentUser]);
    }
  };

  const isLongText = post.description.length > MAX_LENGTH;
  const displayedText = expanded
    ? post.description
    : post.description.slice(0, MAX_LENGTH);

  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <div className={styles.userInfo}>
          <img src={post.author.avatar} alt="avatar" />
          <div>
            <div className={styles.nameRow}>
              <h3 className={styles.name}>
                {post.author.name}
                {post.author.verified && (
                  <VerifiedIcon className={styles.verified} />
                )}
              </h3>
              <span className={styles.dot}>•</span>
              <span className={styles.time}>{post.post_time}</span>
            </div>
            <p className={styles.role}>{post.author.role}</p>
          </div>
        </div>

        <div className={styles.menu} ref={dropdownRef}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <MoreHorizIcon />
          </button>

          {menuOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownItem}>Save</div>
              <div className={styles.dropdownItem}>Copy link</div>
              <div className={styles.dropdownItem}>Embed this post</div>
              <div className={styles.dropdownItem}>Unfollow</div>
              <div className={styles.dropdownItem}>Not interested</div>
              <div className={`${styles.dropdownItem} ${styles.danger}`}>
                Report post
              </div>
            </div>
          )}
        </div>
      </div>

   
      <div className={styles.description}>
        {displayedText}
        {isLongText && !expanded && "... "}
        {isLongText && (
          <span
            className={styles.more}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? " show less" : "more"}
          </span>
        )}
      </div>

      <img src={post.image} alt="post" className={styles.postImage} />

      <div className={styles.actions}>
  
        <div className={styles.actionItem}>
          <span
            className={`${styles.iconWrapper} ${
              isLiked ? styles.active : ""
            }`}
            onClick={toggleLike}
          >
            {isLiked ? (
              <ThumbUpIcon className={styles.icon} />
            ) : (
              <ThumbUpOutlinedIcon className={styles.icon} />
            )}
          </span>

          <span
            className={styles.count}
            onClick={() => setShowLikes(true)}
          >
            {likes.length} <span className={styles.label}>Likes</span>
          </span>

          
        </div>

        {/* COMMENT */}
        <div
          className={styles.actionItem}
          onClick={() => setShowComments(!showComments)}
        >
          <CommentIcon className={`${styles.icon} ${styles.blue}`} />
          <span className={styles.count}>
             {commentsData.length} <span className={styles.label}>Comments</span>
          </span>
          
        </div>

        <div
  className={styles.actionItem}
  onClick={() => setShowShareModal(true)}
>
          <ShareIcon className={`${styles.icon} ${styles.blue}`} />
          <span className={styles.count}>
            {post.shares.length}
          </span>
          <span className={styles.label}>Share</span>
        </div>
      </div>

      {showLikes && (
        <div
          className={styles.likeModal}
          onClick={() => setShowLikes(false)}
        >
          <div
            className={styles.likeBox}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h4>People who liked this</h4>
              <button
                className={styles.closeBtn}
                onClick={() => setShowLikes(false)}
              >
                <CloseIcon />
              </button>
            </div>

            {likes.map((user) => (
              <div key={user.id} className={styles.likeUser}>
                <img src={user.avatar} alt="" />
                <div>
                  <h5>{user.name}</h5>
                  <p>{user.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

{showShareModal && (
  <div
    className={styles.shareModal}
    onClick={() => setShowShareModal(false)}
  >
    <div
      className={styles.shareBox}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.shareHeader}>
        <h4>Send {post.author.name}</h4>
        <button
          className={styles.closeBtn}
          onClick={() => setShowShareModal(false)}
        >
          <CloseIcon />
        </button>
      </div>

      <input
        type="text"
        placeholder="Type a name"
        className={styles.shareSearch}
      />

      <div className={styles.shareList}>
        {post.likes.map((user) => (
          <div key={user.id} className={styles.shareUser}>
            <div className={styles.shareUserInfo}>
              <img src={user.avatar} alt="" />
              <div>
                <h5>{user.name}</h5>
                <p>{user.role}</p>
              </div>
            </div>
            {/* <input type="checkbox" /> */}
            <input
  type="checkbox"
  checked={selectedUsers.includes(user.id)}
  onChange={() => {
    if (selectedUsers.includes(user.id)) {
      setSelectedUsers(selectedUsers.filter(id => id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user.id]);
    }
  }}
/>
          </div>
        ))}
      </div>
      {selectedUsers.length > 0 && (
  <div className={styles.messageSection}>
    <textarea
      placeholder="Write a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className={styles.messageInput}
    />

    <button
      className={styles.sendButton}
      onClick={() => {
        console.log("Send to:", selectedUsers);
        console.log("Message:", message);

      
        setSelectedUsers([]);
        setMessage("");
        setShowShareModal(false);
      }}
   
    >
      Send
    </button>
  </div>
)}
    </div>
  </div>
)}

{showComments && (
  <div className={styles.commentsSection}>
    {/* {post.comments.map((comment) => ( */}
     {commentsData.map((comment) => (
      <div key={comment.id} className={styles.commentWrapper}>
        
        <div className={styles.commentRow}>
          <img
            src={comment.user.avatar}
            alt=""
            className={styles.commentAvatar}
          />

          <div className={styles.commentContent}>
            <div className={styles.commentTop}>
              <div className={styles.commentUserInfo}>
                <span className={styles.commentName}>
                  {comment.user.name}
                   {comment.user.verified && (
                  <VerifiedIcon className={styles.commentVerified} />
                )}
                </span>

                <span className={styles.commentRole}>
                  {comment.user.role}
                </span>
              </div>

              <div className={styles.commentRight}>
                <span className={styles.commentTime}>
                  {comment.time}
                </span>
               
            <div className={styles.commentMenuWrapper}
  ref={
    activeMenu?.type === "comment" &&
    activeMenu?.id === comment.id
      ? menuRef
      : null
  }
>
  <MoreHorizIcon
    className={styles.commentMenu}
    onClick={(e) => {
      e.stopPropagation();
      setActiveMenu(
        activeMenu?.type === "comment" &&
        activeMenu?.id === comment.id
          ? null
          : { type: "comment", id: comment.id }
      );
    }}
  />

  {activeMenu?.type === "comment" &&
    activeMenu?.id === comment.id && (
      <div
        className={styles.commentDropdown}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.commentDropdownItem}>Block</div>
        <div className={`${styles.commentDropdownItem} ${styles.danger}`}>
          Report
        </div>
      </div>
    )}
</div>
              </div>
            </div>

            <p className={styles.commentText}>
              {comment.text}
            </p>

            <div className={styles.commentActions}>
              {/* <span>Like</span> */}
{/* <span
  className={
    comment.likes?.includes(currentUser.id)
      ? styles.likedText
      : ""
  }
  onClick={() => handleCommentLike(comment.id)}
>
 👍 {comment.likes?.length || 0} Like
</span> */}

<span
  className={styles.commentLikeBtn}
  onClick={() => handleCommentLike(comment.id)}
>
  {comment.likes?.includes(currentUser.id) ?(
   <ThumbUpIcon className={styles.commentLikedIcon}  />
  ): (
    <ThumbUpOutlinedIcon className={styles.commentLikeIcon} />
  )}

  <span
    className={
      comment.likes?.includes(currentUser.id)
        ? styles.likedText
        : ""
    }
  >
    {comment.likes?.length || 0} Like
  </span>
</span>

 <span>•</span>
 <span>Reply</span>
{comment.replies?.length > 0 && (
   <>
                  <span>•</span>
                  <span>{comment.replies.length} reply</span>
                </>
              )}
            </div>
          </div>
        </div>


        {comment.replies?.length > 0 && (
          <div className={styles.replySection}>
            {comment.replies.map((reply) => (
              <div key={reply.id} className={styles.replyRow}>
                <img
                  src={reply.user.avatar}
                  alt=""
                  className={styles.replyAvatar}
                />

                <div className={styles.replyContent}>
                  <div className={styles.replyTop}>
                    <span className={styles.replyName}>
                      {reply.user.name}
                        {reply.user.verified && (
                      <VerifiedIcon className={styles.commentVerified} />
                    )}
                    </span>
                  
                       <div className={styles.commentRight}>
                <span className={styles.commentTime}>
                  {/* {comment.time} */}
                  {reply.time}
                </span>
            
                <div
  className={styles.commentMenuWrapper}
  ref={
    activeMenu?.type === "reply" &&
    activeMenu?.id === reply.id
      ? menuRef
      : null
  }
>
  <MoreHorizIcon
    className={styles.commentMenu}
    onClick={(e) => {
      e.stopPropagation();
      setActiveMenu(
        activeMenu?.type === "reply" &&
        activeMenu?.id === reply.id
          ? null
          : { type: "reply", id: reply.id }
      );
    }}
  />

  {activeMenu?.type === "reply" &&
    activeMenu?.id === reply.id && (
      <div
        className={styles.commentDropdown}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.commentDropdownItem}>Block</div>
        <div className={`${styles.commentDropdownItem} ${styles.danger}`}>
          Report
        </div>
      </div>
    )}
</div>
              </div>
             
                  </div>

                  <p className={styles.replyText}>
                    {reply.text}
                  </p>

                  <div className={styles.commentActions}>
<span
  className={styles.commentLikeBtn}
  onClick={() =>
    handleReplyLike(comment.id, reply.id)
  }
>
  {reply.likes?.includes(currentUser.id) ? (
    <ThumbUpIcon className={styles.commentLikedIcon} />
  ) : (
    <ThumbUpOutlinedIcon className={styles.commentLikeIcon} />
  )}

  <span
    className={
      reply.likes?.includes(currentUser.id)
        ? styles.likedText
        : ""
    }
  >
    {reply.likes?.length || 0} Like
  </span>
</span>
                    <span>•</span>
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
    
  </div>
)}


<div className={styles.commentInputWrapper}>
  <img
    src={currentUser.avatar}
    alt="user"
    className={styles.commentInputAvatar}
  />

  <div className={styles.commentInputBox}>
    <input
      type="text"
      placeholder="Write a comment..."
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      className={styles.commentInput}
    />

    <div className={styles.commentInputActions}>
      <span className={styles.emojiIcon}>😊</span>
      <span className={styles.gifBtn}>GIF</span>
    </div>
  </div>

  <button
    className={styles.sendCommentBtn}
    disabled={newComment.trim() === ""}
    onClick={() => {
      console.log("New Comment:", newComment);
      setNewComment("");
    }}
  >
   <SendIcon/>
  </button>
</div>

    </div>
    
  );
};

export default PostCard;