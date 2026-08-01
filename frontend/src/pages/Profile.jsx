import ProfileHeader from "../component/profile_component/ProfileHeader";
import ProfileTabs from "../component/profile_component/ProfileTabs";
import BlogGrid from "../component/profile_component/BlogGrid";

export default function Profile() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white">

      <div className="max-w-6xl mx-auto px-5 py-10">

        <ProfileHeader />

        <ProfileTabs />

        <BlogGrid />

      </div>

    </section>
  );
}