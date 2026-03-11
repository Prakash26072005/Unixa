import { profileData } from "../../data/profile";

const ProfileDropdown = () => {
  const { profile } = profileData;

  return (
    <div className="w-[300px] bg-white rounded-xl shadow-xl p-4 animate-[fadeIn_0.2s_ease]">

      {/* Profile Top */}
      <div className="flex gap-3 items-center">
        <img
          src={profile.avatar}
          alt=""
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h4 className="text-[15px] font-semibold">{profile.name}</h4>
          <p className="text-[13px] text-gray-500">{profile.role}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2.5 mt-3.5">

        <button className="flex-1 py-1.5 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-100 transition">
          View profile
        </button>

        <button className="flex-1 py-1.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-800 transition">
          Verify now
        </button>

      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gray-200 my-4"></div>

      {/* Account Section */}
      <div className="flex flex-col gap-2.5">
        <h5 className="text-sm font-semibold">Account</h5>

        <span className="text-amber-700 font-medium cursor-pointer">
          🟨 Try 1 month of Premium for ₹0
        </span>

        <span className="text-gray-700 text-sm cursor-pointer hover:bg-gray-100 px-1 rounded">
          Settings & Privacy
        </span>

        <span className="text-gray-700 text-sm cursor-pointer hover:bg-gray-100 px-1 rounded">
          Help
        </span>

        <span className="text-gray-700 text-sm cursor-pointer hover:bg-gray-100 px-1 rounded">
          Language
        </span>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gray-200 my-4"></div>

      {/* Manage Section */}
      <div className="flex flex-col gap-2.5">
        <h5 className="text-sm font-semibold">Manage</h5>

        <span className="text-gray-700 text-sm cursor-pointer hover:bg-gray-100 px-1 rounded">
          Posts & Activity
        </span>

        <span className="text-gray-700 text-sm cursor-pointer hover:bg-gray-100 px-1 rounded">
          Job Posting Account
        </span>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gray-200 my-4"></div>

      {/* Sign out */}
      <div className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 px-1 rounded">
        Sign out
      </div>

    </div>
  );
};

export default ProfileDropdown;