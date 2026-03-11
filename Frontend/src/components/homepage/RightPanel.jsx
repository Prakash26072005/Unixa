import {
  trendingProject,
  suggestedUsers,
} from "../../data/suggestions";

import WidgetsIcon from '@mui/icons-material/Widgets';
import CheckIcon from '@mui/icons-material/Check';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EnergySavingsLeafRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';


const RightPanel = () => {
  const project = trendingProject.project;

  return (
    <div className=" w-full   ">
      <div className="bg-white px-5 box-border rounded-xl py-5  shadow-[0_2px_14px_rgba(0,0,0,0.05)]">
        
        {/* Heading */}
        <h3 className="text-center text-3xl font-semibold text-gray-700  py-2 ">
          Trending Topics
        </h3>
        <hr  className="border text-gray-200 mb-5"/>

        {/* ================= Open Source Section ================= */}
        <div className="mb-5">
          <p className="text-2xl text-gray-500 mb-5">
            • Open Source Projects
          </p>
      
    
          <div className="border-2 border-gray-200 rounded-xl px-6 py-2  flex flex-col ">
            
           
            <div className="flex items-center  gap-2 mb-3">
             
              <EnergySavingsLeafRoundedIcon fontSize="large" className="text-[#c623c6]"/>
              <h4 className="text-2xl text-gray-700  font-medium">
                {project.name}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#e8efff] px-3 py-1 rounded-md text-xs text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>

          
            <p className="text-[14px] text-gray-500 mb-3 leading-[1.4]">
              {project.description}
            </p>
            <hr  className="border text-gray-300 mb-2"/>

            <div className="text-[14px] text-gray-700  ">
              <p>👤 Owner : {project.owner}</p>
              <p>🎓 Mentor : {project.mentor}</p>
              <hr  className="border text-gray-300 mb-2 mt-2"/>

              <p className="flex items-center gap-2">
                Rating:
                <span className="text-yellow-500 text-[15px]">
                  {"★".repeat(project.rating)}
                  {"☆".repeat(5 - project.rating)}
                </span>
                ({project.totalRatings}+)
              </p>
            </div>

            <div className="flex justify-between mt-5 gap-4 mb-3">
              <button className=" w-1/2 border border-blue-500 cursor-pointer text-gray-700  rounded-md text-md hover:bg-gray-50 transition">
             < WidgetsIcon className="text-blue-500 mr-2 "/>
                More
              </button>

              <button className="w-1/2 bg-[#2f5fe3] cursor-pointer text-white  rounded-md text-md font-medium hover:bg-[#244ed4] transition">
              <CheckIcon/>
                Apply
              </button>
            </div>
          
     
          </div>
        </div>

        {/* ================= Suggested Connections ================= */}
        <div>
          <p className="text-2xl text-gray-500 mb-5">
            • Suggested Connections
          </p>

          {suggestedUsers.map((user) => (
            <div
              key={user.id}
              className="border-2 border-gray-200 rounded-xl px-4 py-3  flex flex-col mb-5">
              
              <div>
                <div className="flex gap-2 items-center mb-2">
                  
                  {/* Avatar */}
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className=" w-25 h-25 rounded-full object-cover"
                  />

                  {/* User Info */}
                  <div className="flex flex-col  ">
                    <h4 className="text-lg font-medium mb-2">
                      {user.name}
                    </h4>

                    {user.batch && (
                      <p className="text-[13px] text-gray-500 mb-2">
                        {user.batch}
                      </p>
                    )}

                    {user.company && (
                      <p className="text-[13px] text-gray-500 mb-2">
                        At: {user.company}
                      </p>
                    )}

                    <p className="text-[14px] text-gray-700">
                      {user.role}
                    </p>
                    <hr className="mt-2 text-gray-300" />
                </div>
               </div>
             
             

             <div>   
                    {user.university && (
                       <span className="flex gap-2 items-center mb-2">
                          <AccountBalanceIcon/>
                          <p className="text-sm text-gray-500 leading-4">
                            {user.university}
                          </p>
                      </span>
                    )}
                 

                 <span className="flex gap-2">
                 {user.avatar2 && (
                     <img
                     src={user.avatar2}
                     alt={user.name}
                     className=" w-6 h-6 rounded-full object-cover"
                   />
                    )}
                  {user.mutualConnections && (
                        <p className="text-sm text-gray-500">
                          {user.mutualConnections}+ mutual connections
                        </p>
                      )}
                 </span>
                

                  {user.bestMatch && (
                    
                    <div className="flex items-center  mt-2 border-t border-gray-300 ... border-b py-1">
                      
                      <span className="text-sm w-1/2 text-green-700 font-medium ">
                        ⭐ Best Match
                      </span>
                      <span className="bg-green-700 w-1/3 text-center text-white text-md px-3  rounded-full">
                        {user.bestMatch}%
                      </span>
                    </div>
                  )}

                  {user.university2 && (
                       <span className="flex gap-2 border-gray-300 ... border-b py-1">
                      <p className="text-sm text-gray-500">
                        {user.university2}
                      </p>
                      </span>
                    )}

                  {user.department && (
                    <p className="text-sm text-gray-600 py-1  border-gray-300 ... border-b">
                      Department : <span className="text-gray-400">{user.department}</span>
                    </p>
                  )}

                  {user.skillsMatch && (
                    <p className="text-sm text-gray-600 py-1  border-gray-300 ... border-b">
                      Skills Match: <span className="text-gray-400">{user.skillsMatch}%</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-4">
                {user.bestMatch ? (
                  <button className="w-full cursor-pointer bg-[#2f5fe3] text-white  rounded-md text-md font-medium hover:bg-[#244ed4] transition">
                    Request Referral
                  </button>
                ) : (
                  <>
                    <button className="border cursor-pointer w-1/2 border-blue-500 text-blue-700 flex items-center justify-center  rounded-md text-sm font-medium hover:bg-gray-50 transition">
                    < WidgetsIcon className="text-blue-500 mr-1 " fontSize="small"/>
                      More
                    </button>

                    <button className="bg-[#2f5fe3] cursor-pointer w-1/2 text-white   rounded-md text-sm flex items-center justify-center hover:bg-[#244ed4] transition">
                      
                    <InsertLinkIcon className="mr-1" fontSize="small"/>
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