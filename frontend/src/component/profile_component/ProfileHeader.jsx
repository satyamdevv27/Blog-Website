import ProfileStats from "./ProfileStats";

export default function ProfileHeader() {
const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="border-b border-zinc-800 pb-10">

      <div className="flex flex-col md:flex-row gap-10 items-center">

        <img
          src="https://placehold.co/160"
          alt=""
          className="w-40 h-40 rounded-full object-cover border-4 border-zinc-700"
        />

        <div className="flex-1">

          <h1 className="text-4xl font-bold">
             {user.userName}
          </h1>

          <p className="text-zinc-400 mt-3">
            Frontend Developer | React Enthusiast
          </p>

          <ProfileStats />

        </div>

      </div>

    </div>
  );
}