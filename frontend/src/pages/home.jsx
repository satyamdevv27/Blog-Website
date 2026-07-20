import Navbar from "../component/navbar component/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-5xl font-serif mt-16">
          Home Page
        </h1>
      </div>
    </>
  );
}