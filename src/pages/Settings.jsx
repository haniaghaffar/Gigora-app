import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../services/supabase";
import {
  User,
  Mail,
  Bell,
  Save,
  LogOut,
  FileText,
  Code2,
} from "lucide-react";
import toast from "react-hot-toast";

const Settings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (user) {
      setName(user.user_metadata?.name || "");
      setBio(user.user_metadata?.bio || "");
      setSkills(user.user_metadata?.skills || "");
      setNotifications(
        user.user_metadata?.notifications ?? true
      );
    }
  }, [user]);


  const saveSettings = async () => {
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      data: {
        name,
        bio,
        skills,
        notifications,
      },
    });


    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }


    toast.success("Profile updated successfully");
    setLoading(false);
  };


  const logout = async () => {

    const { error } = await supabase.auth.signOut();

    if(error){
      toast.error(error.message);
      return;
    }

    toast.success("Logged out successfully");
    navigate("/");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">


        <h1 className="text-4xl font-extrabold text-primaryBlue mb-3">
          Settings
        </h1>

        <p className="text-gray-600 mb-8">
          Manage your profile and account preferences.
        </p>


        {/* Avatar */}

        <div className="flex items-center gap-4 mb-8">

          <div className="w-20 h-20 rounded-full bg-primaryBlue text-white flex items-center justify-center text-3xl font-bold">
            {name?.charAt(0)?.toUpperCase() || "U"}
          </div>


          <div>
            <h2 className="text-xl font-bold">
              {name || "User"}
            </h2>

            <p className="text-gray-500">
              {user?.email}
            </p>
          </div>

        </div>



        {/* Name */}

        <div className="mb-6">

          <label className="font-semibold flex items-center gap-2 mb-2">
            <User size={18}/>
            Full Name
          </label>


          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primaryBlue outline-none"
          />

        </div>



        {/* Email */}

        <div className="mb-6">

          <label className="font-semibold flex items-center gap-2 mb-2">
            <Mail size={18}/>
            Email
          </label>


          <input
            type="email"
            value={user?.email || ""}
            disabled
            className="w-full border rounded-xl p-3 bg-gray-100"
          />

        </div>



        {/* Bio */}

        <div className="mb-6">

          <label className="font-semibold flex items-center gap-2 mb-2">
            <FileText size={18}/>
            Bio
          </label>


          <textarea
            value={bio}
            onChange={(e)=>setBio(e.target.value)}
            placeholder="Tell something about yourself..."
            rows="4"
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primaryBlue outline-none"
          />

        </div>



        {/* Skills */}

        <div className="mb-6">

          <label className="font-semibold flex items-center gap-2 mb-2">
            <Code2 size={18}/>
            Skills
          </label>


          <input
            type="text"
            value={skills}
            onChange={(e)=>setSkills(e.target.value)}
            placeholder="React, JavaScript, Python..."
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-primaryBlue outline-none"
          />

        </div>



        {/* Notifications */}

        <div className="flex justify-between items-center border rounded-xl p-4 mb-8">

          <div className="flex items-center gap-3">

            <Bell size={20}/>

            <div>
              <p className="font-semibold">
                Email Notifications
              </p>

              <p className="text-sm text-gray-500">
                Receive updates and alerts
              </p>
            </div>

          </div>


          <input
            type="checkbox"
            checked={notifications}
            onChange={()=>setNotifications(!notifications)}
            className="w-5 h-5 accent-indigo-600"
          />

        </div>



        {/* Buttons */}

        <div className="flex flex-col sm:flex-row gap-4">


          <button
            onClick={saveSettings}
            disabled={loading}
            className="flex-1 flex justify-center items-center gap-2 bg-primaryBlue text-white py-3 rounded-xl hover:bg-darkNavy transition disabled:opacity-50"
          >

            <Save size={18}/>

            {loading ? "Saving..." : "Save Changes"}

          </button>



          <button
            onClick={logout}
            className="flex-1 flex justify-center items-center gap-2 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition"
          >

            <LogOut size={18}/>

            Logout

          </button>


        </div>


      </div>

    </div>
  );
};


export default Settings;