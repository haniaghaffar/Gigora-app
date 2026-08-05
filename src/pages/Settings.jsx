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
  ShieldCheck,
  Crown,
} from "lucide-react";
import toast from "react-hot-toast";


const Settings = () => {

  const { user } = useAuth();
  const navigate = useNavigate();


  const [name,setName] = useState("");
  const [bio,setBio] = useState("");
  const [skills,setSkills] = useState("");
  const [notifications,setNotifications] = useState(true);
  const [loading,setLoading] = useState(false);



  useEffect(()=>{

    if(user){

      setName(user.user_metadata?.name || "");
      setBio(user.user_metadata?.bio || "");
      setSkills(user.user_metadata?.skills || "");

      setNotifications(
        user.user_metadata?.notifications ?? true
      );

    }

  },[user]);





  const saveSettings = async()=>{

    setLoading(true);


    const {error}=await supabase.auth.updateUser({

      data:{
        name,
        bio,
        skills,
        notifications
      }

    });



    if(error){

      toast.error(error.message);
      setLoading(false);
      return;

    }


    toast.success("Settings updated successfully");
    setLoading(false);

  };





  const logout = async()=>{

    await supabase.auth.signOut();

    toast.success("Logged out");

    navigate("/");

  };



  const isPro =
    user?.user_metadata?.plan === "pro";



  return (

<div className="
min-h-screen
bg-gradient-to-br
from-indigo-100
via-purple-50
to-pink-100
py-12
px-4
">


<div className="
max-w-4xl
mx-auto
bg-white
rounded-3xl
shadow-xl
overflow-hidden
">


{/* Header */}

<div className="
bg-gradient-to-r
from-primaryBlue
to-indigo-600
p-8
text-white
">


<div className="flex items-center gap-5">


<div className="
w-24
h-24
rounded-full
bg-white
text-primaryBlue
flex
items-center
justify-center
text-4xl
font-bold
shadow-lg
">

{name?.charAt(0)?.toUpperCase() || "U"}

</div>



<div>

<h1 className="text-3xl font-bold">
{name || "User"}
</h1>


<p className="opacity-90">
{user?.email}
</p>



{isPro && (

<span className="
inline-flex
items-center
gap-1
mt-3
bg-yellow-400
text-black
px-3
py-1
rounded-full
text-sm
font-semibold
">

<Crown size={15}/>
PRO

</span>

)}


</div>


</div>


</div>





<div className="p-8 space-y-8">



{/* Profile */}

<div>


<h2 className="text-xl font-bold mb-5">
Profile Information
</h2>



<div className="space-y-5">



<div>

<label className="font-semibold flex gap-2 mb-2">

<User size={18}/>
Full Name

</label>


<input

value={name}

onChange={(e)=>setName(e.target.value)}

className="
w-full
border
rounded-xl
p-3
focus:ring-2
focus:ring-primaryBlue
outline-none
"

/>

</div>





<div>

<label className="font-semibold flex gap-2 mb-2">

<Mail size={18}/>
Email

</label>


<input

disabled

value={user?.email || ""}

className="
w-full
border
rounded-xl
p-3
bg-gray-100
"

/>

</div>





<div>

<label className="font-semibold flex gap-2 mb-2">

<FileText size={18}/>
Bio

</label>


<textarea

rows="4"

value={bio}

onChange={(e)=>setBio(e.target.value)}

className="
w-full
border
rounded-xl
p-3
outline-none
focus:ring-2
focus:ring-primaryBlue
"

/>

</div>





<div>

<label className="font-semibold flex gap-2 mb-2">

<Code2 size={18}/>
Skills

</label>


<input

value={skills}

onChange={(e)=>setSkills(e.target.value)}

placeholder="React, AI, Python..."

className="
w-full
border
rounded-xl
p-3
outline-none
focus:ring-2
focus:ring-primaryBlue
"

/>

</div>



</div>


</div>







{/* Notification */}

<div className="
border
rounded-2xl
p-5
flex
justify-between
items-center
">


<div className="flex gap-3">

<Bell/>

<div>

<h3 className="font-semibold">
Email Notifications
</h3>


<p className="text-sm text-gray-500">
Receive important updates
</p>


</div>


</div>



<input

type="checkbox"

checked={notifications}

onChange={()=>setNotifications(!notifications)}

className="w-5 h-5 accent-primaryBlue"

/>


</div>






{/* Security */}

<div className="
border
rounded-2xl
p-5
flex
items-center
gap-3
">


<ShieldCheck className="text-green-600"/>

<div>

<h3 className="font-semibold">
Account Security
</h3>

<p className="text-sm text-gray-500">
Protected with Supabase authentication
</p>

</div>


</div>






{/* Actions */}


<div className="flex flex-col sm:flex-row gap-4 pt-4">


<button

onClick={saveSettings}

disabled={loading}

className="
flex-1
flex
justify-center
items-center
gap-2
bg-primaryBlue
text-white
py-3
rounded-xl
hover:bg-darkNavy
transition
"

>

<Save size={18}/>

{loading ? "Saving..." : "Save Changes"}

</button>




<button

onClick={logout}

className="
flex-1
flex
justify-center
items-center
gap-2
bg-red-500
text-white
py-3
rounded-xl
hover:bg-red-600
transition
"

>

<LogOut size={18}/>

Logout

</button>


</div>



</div>


</div>


</div>

  );

};


export default Settings;