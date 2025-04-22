import PanoramaViewer from "./PanoramaViewer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="p-6">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">প্যানোরামা</h1>
        <PanoramaViewer />
      </main>
    </>  
);
}