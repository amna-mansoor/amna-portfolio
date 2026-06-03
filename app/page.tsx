export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#6e1717] p-6">
      <div className="bg-[#F5F5F0] w-full max-w-2xl rounded-3xl p-12 shadow-2xl flex flex-col items-center text-center">
        {/* Navigation/Badge area */}
        <div className="bg-black text-white px-4 py-1 rounded-full text-sm mb-12">
          Amna Mansoor
        </div>
        
        {/* Main Text */}
        <h1 className="text-6xl font-black uppercase leading-tight mb-4 text-black">
          Software<br />Engineer
        </h1>
        
        {/* Sub-heading */}
        <p className="text-gray-600 text-lg uppercase tracking-widest mt-4">
          Portfolio website - coming soon
        </p>

        {/* Footer info */}
        <div className="mt-16 w-full flex justify-between items-center text-sm text-gray-500">
          <span>©2026</span>
          <span>BASED IN KARACHI</span>
        </div>
      </div>
    </main>
  );
}