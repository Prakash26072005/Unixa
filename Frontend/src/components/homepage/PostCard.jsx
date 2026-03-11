import { useState, useRef, useEffect } from "react";
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
  const displayedText = expanded ? post.description : post.description.slice(0, MAX_LENGTH);

  return (
    <div className="bg-white rounded-2xl p-4 md:p-5 lg:p-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] mb-6">
      {/* Header */}
      <div className="flex justify-between items-start pb-3.5 border-b border-gray-200 mb-3.5">
        <div className="flex gap-2.5 md:gap-3.5">
          <img 
            src={post.author.avatar} 
            alt="avatar" 
            className="w-[42px] h-[42px] md:w-12 md:h-12 lg:w-[55px] lg:h-[55px] rounded-full object-cover" 
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-[15px] md:text-base lg:text-[17px] font-semibold m-0 flex items-center gap-1">
                {post.author.name}
                {post.author.verified && <VerifiedIcon className="text-blue-600 !text-[18px]" />}
              </h3>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500">{post.post_time}</span>
            </div>
            <p className="text-[13px] md:text-sm text-gray-500 mt-0.5">{post.author.role}</p>
          </div>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setMenuOpen(!menuOpen)} className="bg-none border-none cursor-pointer">
            <MoreHorizIcon />
          </button>
          {menuOpen && (
            <div className="absolute top-8 right-0 w-[240px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] py-2 z-[100]">
              <div className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 transition-colors">Save</div>
              <div className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 transition-colors">Copy link</div>
              <div className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 transition-colors">Embed this post</div>
              <div className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 transition-colors">Unfollow</div>
              <div className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 transition-colors">Not interested</div>
              <div className="px-4 py-3 text-sm cursor-pointer hover:bg-red-50 text-red-600 transition-colors">Report post</div>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="text-sm md:text-[15px] leading-relaxed mb-4 text-gray-900">
        {displayedText}
        {isLongText && !expanded && "... "}
        {isLongText && (
          <span className="text-blue-600 cursor-pointer font-medium" onClick={() => setExpanded(!expanded)}>
            {expanded ? " show less" : "more"}
          </span>
        )}
      </div>

      {/* Post Image */}
      <img src={post.image} alt="post" className="w-full rounded-xl md:rounded-2xl mb-3.5" />

      {/* Actions */}

<div className="flex justify-between items-center py-3.5 border-t border-b border-gray-200 gap-2 md:gap-2.5">

  {/* Like Button */}
  <div className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-100 px-3 md:px-[18px] py-2 rounded-full hover:bg-gray-200 hover:-translate-y-0.5 transition-all cursor-pointer text-xs md:text-sm font-medium">
    
    <span
      className={`flex items-center cursor-pointer ${isLiked ? "text-blue-600" : ""}`}
      onClick={toggleLike}
    >
      {isLiked ? (
        <ThumbUpIcon className="!text-[20px] text-blue-600" />
      ) : (
        <ThumbUpOutlinedIcon className="!text-[20px] text-blue-700" />
      )}
    </span>

    <span
      className="font-semibold text-blue-700 whitespace-nowrap cursor-pointer"
      onClick={() => setShowLikes(true)}
    >
      {likes.length} <span className="text-gray-700 font-medium">Likes</span>
    </span>

  </div>

  {/* Comment Button */}
  <div
    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-100 px-3 md:px-[18px] py-2 rounded-full hover:bg-gray-200 hover:-translate-y-0.5 transition-all cursor-pointer text-xs md:text-sm font-medium"
    onClick={() => setShowComments(!showComments)}
  >
    <CommentIcon className="!text-[20px] text-blue-700" />

    <span className="font-semibold text-blue-700 whitespace-nowrap">
      {commentsData.length} <span className="text-gray-700 font-medium">Comments</span>
    </span>

  </div>

  {/* Share Button */}
  <div
    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-100 px-3 md:px-[18px] py-2 rounded-full hover:bg-gray-200 hover:-translate-y-0.5 transition-all cursor-pointer text-xs md:text-sm font-medium"
    onClick={() => setShowShareModal(true)}
  >
    <ShareIcon className="!text-[20px] text-blue-700" />

    <span className="font-semibold text-blue-700 whitespace-nowrap">
      {post.shares.length} <span className="text-gray-700 font-medium">Share</span>
    </span>

  </div>

</div>


      {/* Like Modal */}
      {showLikes && (
        <div className="fixed inset-0 bg-black/45 flex justify-center items-center z-[9999]" onClick={() => setShowLikes(false)}>
          <div className="bg-white w-[90%] md:w-[400px] max-h-[500px] overflow-y-auto rounded-2xl p-5" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold">People who liked this</h4>
              <button className="text-gray-500 hover:text-gray-900 transition-colors" onClick={() => setShowLikes(false)}>
                <CloseIcon />
              </button>
            </div>
            {likes.map((user) => (
              <div key={user.id} className="flex items-center gap-3 py-2.5 border-b border-gray-100">
                <img src={user.avatar} alt="" className="w-[45px] h-[45px] rounded-full" />
                <div>
                  <h5 className="font-bold text-sm">{user.name}</h5>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/45 flex justify-center items-center z-[9999]" onClick={() => setShowShareModal(false)}>
          <div className="bg-white w-[90%] md:w-[500px] max-h-[600px] overflow-y-auto rounded-2xl p-5" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-lg">Send {post.author.name}</h4>
              <button className="text-gray-500 hover:text-gray-900 transition-colors" onClick={() => setShowShareModal(false)}>
                <CloseIcon />
              </button>
            </div>
            <input type="text" placeholder="Type a name" className="w-full p-2.5 rounded-lg border border-gray-200 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <div className="flex flex-col gap-3">
              {post.likes.map((user) => (
                <div key={user.id} className="flex justify-between items-center py-2.5">
                  <div className="flex gap-3 items-center">
                    <img src={user.avatar} alt="" className="w-[45px] h-[45px] rounded-full" />
                    <div>
                      <h5 className="font-bold text-sm">{user.name}</h5>
                      <p className="text-xs text-gray-500">{user.role}</p>
                    </div>
                  </div>
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded cursor-pointer"
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
              <div className="mt-[18px] border-t border-gray-200 pt-4 flex flex-col gap-3">
                <textarea 
                  placeholder="Write a message..." 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full min-h-[80px] p-2.5 rounded-lg border border-gray-200 resize-none text-sm"
                />
                <button 
                  className="self-end bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition-all"
                  onClick={() => {
                    setSelectedUsers([]);
                    setMessage("");
                    setShowShareModal(false);
                  }}
                >Send</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Comments Section */}
      {showComments && (
        <div className="mt-6">
          {commentsData.map((comment) => (
            <div key={comment.id} className="mb-8">
              <div className="flex gap-3 md:gap-4 items-start">
                <img src={comment.user.avatar} alt="" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mt-0.5" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm md:text-base leading-tight flex items-center gap-1">
                        {comment.user.name}
                        {comment.user.verified && <VerifiedIcon className="text-blue-600 !text-[16px]" />}
                      </span>
                      <span className="text-gray-500 text-sm mt-0.5">{comment.user.role}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">{comment.time}</span>
                      <div className="relative" ref={activeMenu?.type === "comment" && activeMenu?.id === comment.id ? menuRef : null}>
                        <MoreHorizIcon 
                          className="!text-[20px] text-gray-400 cursor-pointer" 
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMenu(activeMenu?.type === "comment" && activeMenu?.id === comment.id ? null : { type: "comment", id: comment.id });
                          }}
                        />
                        {activeMenu?.type === "comment" && activeMenu?.id === comment.id && (
                          <div className="absolute top-[26px] right-0 w-[150px] bg-white rounded-xl shadow-[0_4px_18px_rgba(0,0,0,0.12)] py-1.5 z-[200]">
                            <div className="px-3.5 py-2.5 text-sm cursor-pointer hover:bg-gray-100 transition-colors">Block</div>
                            <div className="px-3.5 py-2.5 text-sm cursor-pointer hover:bg-red-50 text-red-600 transition-colors">Report</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="mt-2.5 text-sm md:text-[15px] leading-normal text-gray-900">{comment.text}</p>
                  <div className="mt-2.5 flex gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5 cursor-pointer" onClick={() => handleCommentLike(comment.id)}>
                      {comment.likes?.includes(currentUser.id) ? (
                        <ThumbUpIcon className="!text-base text-blue-600" />
                      ) : (
                        <ThumbUpOutlinedIcon className="!text-base text-gray-500" />
                      )}
                      <span className={comment.likes?.includes(currentUser.id) ? "text-blue-600 font-semibold" : "hover:text-gray-900"}>
                        {comment.likes?.length || 0} Like
                      </span>
                    </span>
                    <span>•</span>
                    <span className="cursor-pointer hover:text-gray-900">Reply</span>
                    {comment.replies?.length > 0 && (
                      <>
                        <span>•</span>
                        <span className="cursor-pointer hover:text-gray-900">{comment.replies.length} reply</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

            
              {/* Replies */}
{comment.replies?.length > 0 && (
  <div className="ml-12 md:ml-16 mt-5 pl-3 md:pl-6">
    {comment.replies.map((reply) => (
      <div key={reply.id} className="flex gap-3.5 mb-[22px] items-start">
        <img src={reply.user.avatar} alt="" className="w-[34px] h-[34px] md:w-[38px] md:h-[38px] rounded-full object-cover mt-0.5" />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <span className="font-semibold text-sm">{reply.user.name}</span>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">{reply.time}</span>
              
              {/* --- FIXED SECTION START --- */}
              <div 
                className="relative" 
                ref={activeMenu?.type === "reply" && activeMenu?.id === reply.id ? menuRef : null}
              >
                <MoreHorizIcon 
                  className="!text-[20px] text-gray-400 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenu(
                      activeMenu?.type === "reply" && activeMenu?.id === reply.id 
                        ? null 
                        : { type: "reply", id: reply.id }
                    );
                  }}
                />
                
                {/* Added the dropdown menu here */}
                {activeMenu?.type === "reply" && activeMenu?.id === reply.id && (
                  <div className="absolute top-[26px] right-0 w-[150px] bg-white rounded-xl shadow-[0_4px_18px_rgba(0,0,0,0.12)] py-1.5 z-[200]">
                    <div className="px-3.5 py-2.5 text-sm cursor-pointer hover:bg-gray-100 transition-colors">Block</div>
                    <div className="px-3.5 py-2.5 text-sm cursor-pointer hover:bg-red-50 text-red-600 transition-colors">Report</div>
                  </div>
                )}
              </div>
              {/* --- FIXED SECTION END --- */}

            </div>
          </div>
          <p className="mt-1.5 text-[13px] md:text-sm text-gray-900">{reply.text}</p>
          <div className="mt-2 flex gap-3 text-sm text-gray-500">
            <span 
              className="flex items-center gap-1.5 cursor-pointer" 
              onClick={() => handleReplyLike(comment.id, reply.id)}
            >
              {reply.likes?.includes(currentUser.id) ? (
                <ThumbUpIcon className="!text-base text-blue-600" />
              ) : (
                <ThumbUpOutlinedIcon className="!text-base text-gray-500" />
              )}
              <span className={reply.likes?.includes(currentUser.id) ? "text-blue-600 font-semibold" : ""}>
                {reply.likes?.length || 0} Like
              </span>
            </span>
            <span>•</span>
            <span className="cursor-pointer hover:text-gray-900">Reply</span>
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

      {/* Comment Input */}
     
<div className="mt-6 flex items-center gap-2 md:gap-3 bg-gray-100 p-2 md:p-3 rounded-2xl w-full">
  <img 
    src={currentUser.avatar} 
    alt="user" 
    className="w-8 h-8 md:w-[42px] md:h-[42px] rounded-full object-cover flex-shrink-0" 
  />
  
  <div className="flex-1 flex items-center bg-white rounded-full px-3 py-1.5 border border-gray-200 min-w-0">
    <input 
      type="text" 
      placeholder="Write a comment..." 
      value={newComment} 
      onChange={(e) => setNewComment(e.target.value)}
      className="flex-1 border-none outline-none text-[13px] md:text-sm bg-transparent min-w-0"
    />
    <div className="flex items-center gap-1.5 ml-1">
      <span className="cursor-pointer text-base">😊</span>
      <span className="hidden xs:block text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-200 cursor-pointer">GIF</span>
    </div>
  </div>

  <button 
    className="bg-blue-600 text-white p-2 md:p-3 rounded-full flex-shrink-0 hover:bg-blue-800 disabled:bg-gray-400 transition-all shadow-md"
    disabled={newComment.trim() === ""}
    onClick={() => {
      console.log("New Comment:", newComment);
      setNewComment("");
    }}
  >
    <SendIcon className="!text-[18px] md:!text-[20px]" />
  </button>
</div>
    </div>
  );
};

export default PostCard;