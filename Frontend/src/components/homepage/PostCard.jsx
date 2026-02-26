// import { useState ,useRef, useEffect} from "react";
// import styles from "./PostCard.module.css";

// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import CloseIcon from '@mui/icons-material/Close';
// import CommentIcon from "@mui/icons-material/Comment";
// import ShareIcon from "@mui/icons-material/Share";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { currentUser } from "../../data/posts";

// const MAX_LENGTH = 220;

// const PostCard = ({ post }) => {

//   const [showComments, setShowComments] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [expanded, setExpanded] = useState(false);
//   const [likes, setLikes] = useState(post.likes);
// const [showLikes, setShowLikes] = useState(false);

// const dropdownRef = useRef(null);

// useOutsideClick(dropdownRef, () => setMenuOpen(false));

// function useOutsideClick(ref, callback) {
//   useEffect(() => {
//     const handleClick = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         callback();
//       }
//     };

//     document.addEventListener("mousedown", handleClick);
//     return () => {
//       document.removeEventListener("mousedown", handleClick);
//     };
//   }, [ref, callback]);
// }
//   const isLiked = likes.some(
//   (user) => user.id === currentUser.id
// );

// const toggleLike = () => {
//   if (isLiked) {
    
//     setLikes(likes.filter((u) => u.id !== currentUser.id));
//   } else {
  
//     setLikes([...likes, currentUser]);
//   }
// };



//   const isLongText = post.description.length > MAX_LENGTH;
//   const displayedText = expanded
//     ? post.description
//     : post.description.slice(0, MAX_LENGTH);

//   return (
//     <div className={styles.card}>
    
//       <div className={styles.header}>
//         <div className={styles.userInfo}>
//           <img src={post.author.avatar} alt="avatar" />

//           <div className={styles.userText}>
//             <div className={styles.nameRow}>
//               <h3 className={styles.name}>
//                 {post.author.name}
//                 {post.author.verified && (
//                   <VerifiedIcon className={styles.verified} />
//                 )}
//               </h3>
//               <span className={styles.dot}>•</span>
//               <span className={styles.time}>{post.post_time}</span>
//             </div>

//             <p className={styles.role}>{post.author.role}</p>
//           </div>
//         </div>

//         <div className={styles.menu} ref={dropdownRef}>
//   <button onClick={() => setMenuOpen(!menuOpen)}>
//     <MoreHorizIcon />
//   </button>

//   {menuOpen && (
//     <div className={styles.dropdown}>
//       <div className={styles.dropdownItem}>Save</div>
//       <div className={styles.dropdownItem}>Copy link</div>
//       <div className={styles.dropdownItem}>Embed this post</div>
//       <div className={styles.dropdownItem}>Unfollow</div>
//       <div className={styles.dropdownItem}>Not interested</div>
//       <div className={`${styles.dropdownItem} ${styles.danger}`}>
//         Report post
//       </div>
//     </div>
//   )}
// </div>
//       </div>
//       <div className={styles.description}>
//         {displayedText}
//         {isLongText && !expanded && "... "}
//         {isLongText && (
//           <span
//             className={styles.more}
//             onClick={() => setExpanded(!expanded)}
//           >
//             {expanded ? " show less" : "more"}
//           </span>
//         )}
//       </div>

//       <img src={post.image} className={styles.postImage} alt="post" />

//       <div className={styles.actions}>
//         <span>
//       <span
//   className={`${styles.likeBtn} ${isLiked ? styles.liked : ""}`}
//   onClick={toggleLike}
// >
//   {isLiked ? <ThumbUpIcon className={styles.blue} /> : <ThumbUpOutlinedIcon className={styles.blue} />}
// </span>
//  <span onClick={() => setShowLikes(true)}>
//   <span className={styles.blue}>{likes.length} </span>Likes
// </span>
// </span>
// {showLikes && (
//   <div
//     className={styles.likeModal}
//     onClick={() => setShowLikes(false)}
//   >
//     <div
//       className={styles.likeBox}
//       onClick={(e) => e.stopPropagation()}
//     >
//       <div className={styles.modalHeader}>
//   <h4>People who liked this</h4>
//   <button
//     className={styles.closeBtn}
//     onClick={() => setShowLikes(false)}
//   >
//    <CloseIcon/>
//   </button>
// </div>

//       {likes.map((user) => (
//         <div key={user.id} className={styles.likeUser}>
//           <img src={user.avatar} alt="" />
//           <div>
//             <h5>{user.name}</h5>
//             <p>{user.role}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )}

//         <span onClick={() => setShowComments(!showComments)}  >
//         <span className={styles.blue}>  <CommentIcon /> {post.comments.length}k</span>Comments
//         </span>
       
       
// <span>
//         <span className={styles.blue}>
//           <ShareIcon />{post.shares.length}K 
//         </span><span>Share</span>
//         </span>
//       </div>
     

    
//       {showComments && (
//         <div className={styles.commentsSection}>
//           {post.comments.map((comment) => (
//             <div key={comment.id} className={styles.comment}>
//               <img src={comment.user.avatar} alt="" />

//               <div>
//                 <strong>{comment.user.name}</strong>
//                 <p>{comment.text}</p>

//                 <div className={styles.commentActions}>
//                   <span>Like</span>
//                   <span>Reply</span>
//                 </div>

//                 {comment.replies.map((reply) => (
//                   <div key={reply.id} className={styles.reply}>
//                     <img src={reply.user.avatar} alt="" />
//                     <div>
//                       <strong>{reply.user.name}</strong>
//                       <p>{reply.text}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostCard;


import { useState, useRef, useEffect } from "react";
import styles from "./PostCard.module.css";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";

import { currentUser } from "../../data/posts";

const MAX_LENGTH = 220;

const PostCard = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showLikes, setShowLikes] = useState(false);
// const [activeCommentMenu, setActiveCommentMenu] = useState(null);
const [activeMenu, setActiveMenu] = useState(null);
const [showShareModal, setShowShareModal] = useState(false);

// const commentMenuRef = useRef(null);
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
      {/* HEADER */}
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

      {/* DESCRIPTION */}
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

      {/* ACTIONS */}
      <div className={styles.actions}>
        {/* LIKE */}
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
            {post.comments.length} <span className={styles.label}>Comments</span>
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
            <input type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  </div>
)}

{showComments && (
  <div className={styles.commentsSection}>
    {post.comments.map((comment) => (
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
              <span>Like</span>
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

        {/* Replies */}
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
                  {comment.time}
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
                    <span>Like</span>
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
    </div>
  );
};

export default PostCard;