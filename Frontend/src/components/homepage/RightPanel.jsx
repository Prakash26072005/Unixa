// import styles from "./RightPanel.module.css";
// import {
//   trendingProject,
//   suggestedUsers,
// } from "../../data/suggestions";

// const RightPanel = () => {
//   return (
//     <div className={styles.panel}>

      
//       <div className={styles.card}>
//         <h3 className={styles.heading}>Trending Topics</h3>

//         <div className={styles.section}>
//           <p className={styles.sectionTitle}>• Open Source Projects</p>

//           <div className={styles.projectBox}>
//             <h4 className={styles.projectName}>
//               {trendingProject.project.name}
//             </h4>

//             <div className={styles.tags}>
//               {trendingProject.project.tags.map((tag, i) => (
//                 <span key={i}>{tag}</span>
//               ))}
//             </div>

//             <p className={styles.projectDesc}>
//               {trendingProject.project.description}
//             </p>

//             <div className={styles.meta}>
//               <p>👤 Owner: RahulSharma</p>
//               <p>🎓 Mentor: Professor</p>
//               <p>⭐ Rating: 4.5 (500+)</p>
//             </div>

//             <div className={styles.projectFooter}>
//               <button className={styles.moreBtn}>More</button>
//               <button className={styles.applyBtn}>Apply</button>
//             </div>
//           </div>
//         </div>

       
//         <div className={styles.section}>
//           <p className={styles.sectionTitle}>• Suggested Connections</p>

//           {suggestedUsers.map((user) => (
//             <div key={user.id} className={styles.userCard}>
//               <img src={user.avatar} alt={user.name} />

//               <div className={styles.userInfo}>
//                 <h4>{user.name}</h4>
//                 <p className={styles.role}>{user.role}</p>

//                 {user.university && (
//                   <p className={styles.university}>
//                     {user.university}
//                   </p>
//                 )}

//                 {user.mutual && (
//                   <p className={styles.mutual}>
//                     {user.mutual}+ mutual connections
//                   </p>
//                 )}

//                 {user.bestMatch && (
//                   <div className={styles.matchRow}>
//                     <span className={styles.best}>⭐ Best Match</span>
//                     <span className={styles.percent}>
//                       {user.bestMatch}%
//                     </span>
//                   </div>
//                 )}
//               </div>

//               <button className={styles.connectBtn}>
//                 {user.bestMatch ? "Request Referral" : "Connect"}
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default RightPanel;

// import styles from "./RightPanel.module.css";
// import {
//   trendingProject,
//   suggestedUsers,
// } from "../../data/suggestions";

// const RightPanel = () => {
//   const project = trendingProject.project;

//   return (
//     <div className={styles.panel}>
//       <div className={styles.card}>
//         <h3 className={styles.heading}>Trending Topics</h3>

//         {/* Open Source */}
//         <p className={styles.sectionTitle}>• Open Source Projects</p>

//         <div className={styles.projectBox}>
//           <h4 className={styles.projectName}>{project.name}</h4>

//           <div className={styles.tags}>
//             {project.tags.map((tag, i) => (
//               <span key={i}>{tag}</span>
//             ))}
//           </div>

//           <p className={styles.projectDesc}>{project.description}</p>

//           <div className={styles.meta}>
//             <p>👤 Owner : {project.owner}</p>
//             <p>🎓 Mentor : {project.mentor}</p>
//             <p className={styles.rating}>
//               Rating:
//               <span className={styles.stars}>⭐⭐⭐⭐☆</span>
//               (500+)
//             </p>
//           </div>

//           <div className={styles.projectFooter}>
//             <button className={styles.moreBtn}>More</button>
//             <button className={styles.applyBtn}>Apply</button>
//           </div>
//         </div>

//         {/* Suggested Connections */}
//         <p className={styles.sectionTitle}>• Suggested Connections</p>

//         {suggestedUsers.map((user) => (
//           <div key={user.id} className={styles.userCard}>
//             <img src={user.avatar} alt={user.name} />

//             <div className={styles.userInfo}>
//               <h4>{user.name}</h4>
//               <p className={styles.role}>{user.role}</p>

//               {user.university && (
//                 <p className={styles.university}>
//                   {user.university}
//                 </p>
//               )}

//               {user.mutual && (
//                 <p className={styles.mutual}>
//                   {user.mutual}+ mutual connections
//                 </p>
//               )}

//               {user.bestMatch && (
//                 <div className={styles.matchRow}>
//                   <span className={styles.best}>⭐ Best Match</span>
//                   <span className={styles.percent}>
//                     {user.bestMatch}%
//                   </span>
//                 </div>
//               )}
//             </div>

//             <button className={styles.connectBtn}>
//               {user.bestMatch ? "Request Referral" : "Connect"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RightPanel;
import styles from "./RightPanel.module.css";
import {
  trendingProject,
  suggestedUsers,
} from "../../data/suggestions";

const RightPanel = () => {
  const project = trendingProject.project;

  return (
    <div className={styles.panel}>
      <div className={styles.card}>
        <h3 className={styles.heading}>Trending Topics</h3>

        {/* Open Source Section */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>• Open Source Projects</p>

          <div className={styles.projectBox}>
            <div className={styles.projectHeader}>
              <img
                src={project.logo}
                alt="logo"
                className={styles.projectLogo}
              />
              <h4>{project.name}</h4>
            </div>

            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <p className={styles.projectDesc}>
              {project.description}
            </p>

            <div className={styles.meta}>
              <p>👤 Owner : {project.owner}</p>
              <p>🎓 Mentor : {project.mentor}</p>
              <p className={styles.rating}>
                Rating:
                <span className={styles.stars}>
                  {"★".repeat(project.rating)}
                  {"☆".repeat(5 - project.rating)}
                </span>
                ({project.totalRatings}+)
              </p>
            </div>

            <div className={styles.projectFooter}>
              <button className={styles.moreBtn}>More</button>
              <button className={styles.applyBtn}>Apply</button>
            </div>
          </div>
        </div>

        {/* Suggested Connections */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>• Suggested Connections</p>

          {suggestedUsers.map((user) => (
            <div key={user.id} className={styles.userCard}>
              <img src={user.avatar} alt={user.name} />

              <div className={styles.userInfo}>
                <h4>{user.name}</h4>

                {user.batch && (
                  <p className={styles.subText}>{user.batch}</p>
                )}

                {user.company && (
                  <p className={styles.subText}>
                    At: {user.company}
                  </p>
                )}

                <p className={styles.role}>{user.role}</p>

                {user.university && (
                  <p className={styles.subText}>
                    {user.university}
                  </p>
                )}

                {user.mutualConnections && (
                  <p className={styles.subText}>
                    {user.mutualConnections}+ mutual connections
                  </p>
                )}

                {user.bestMatch && (
                  <div className={styles.matchRow}>
                    <span className={styles.best}>
                      ⭐ Best Match
                    </span>
                    <span className={styles.percent}>
                      {user.bestMatch}%
                    </span>
                  </div>
                )}

                {user.department && (
                  <p className={styles.subText}>
                    Department : {user.department}
                  </p>
                )}

                {user.skillsMatch && (
                  <p className={styles.subText}>
                    Skills Match: {user.skillsMatch}%
                  </p>
                )}
              </div>

              <div className={styles.buttonWrapper}>
                {user.bestMatch ? (
                  <button className={styles.fullBtn}>
                    Request Referral
                  </button>
                ) : (
                  <>
                    <button className={styles.moreBtnSmall}>
                      More
                    </button>
                    <button className={styles.connectBtn}>
                      Connect
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;