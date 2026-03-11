import { profileData } from "../../data/profile";

const Sidebar = () => {
  const { profile, skills, projects } = profileData;

  return (
    <div className="w-full h-full scrollbar-hide overflow-y-auto bg-white rounded-2xl shadow-sm scrollbar-hide">

      {/* Cover */}
      <div
        className="h-20 bg-cover bg-center rounded-t-2xl"
        style={{ backgroundImage: `url(${profile.coverImage})` }}
      ></div>

      {/* Profile Section */}
      <div className="flex flex-col items-center -mt-9 px-4 pb-4">
        <img
          src={profile.avatar}
          alt="avatar"
          className="w-[70px] h-[70px] rounded-full border-4 border-white object-cover"
        />

        <h4 className="mt-2 text-[16px] font-semibold">
          {profile.name}
        </h4>

        {/* Stats */}
        <div className="flex justify-around mt-4 text-[13px] gap-4">

          <div className="flex flex-col items-center">
            <strong className="text-[14px]">
              {profile.followers}
            </strong>
            <span className="text-gray-500">
              Followers
            </span>
          </div>

          <div className="flex flex-col items-center">
            <strong className="text-[14px]">
              {profile.connections}
            </strong>
            <span className="text-gray-500">
              Connections
            </span>
          </div>

          <div className="flex flex-col items-center">
            <strong className="text-[14px]">
              {projects.length}
            </strong>
            <span className="text-gray-500">
              Projects
            </span>
          </div>

        </div>
      </div>

      {/* Skills Section */}
      <div className="px-4 py-4">
        <h5 className="mb-2 font-semibold text-sm">
          Skills
        </h5>

        <div className="flex flex-wrap gap-2">

          {skills.slice(0, 5).map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}

        </div>
      </div>

      {/* Portfolio Section */}
      <div className="px-4 pb-4 font-semibold">

        <h5 className="mb-2 text-sm">
          Your Portfolio
        </h5>

        {projects.slice(0, 2).map((project) => (
          <img
            key={project.id}
            src={project.thumbnail}
            alt={project.name}
            className="w-full rounded-lg mb-3 cursor-pointer"
          />
        ))}

        <button className="w-full py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
          + Add Portfolio
        </button>

      </div>

    </div>
  );
};

export default Sidebar;