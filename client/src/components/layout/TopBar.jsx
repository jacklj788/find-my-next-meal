export default function TopBar() {
  return (
    <header className="w-full h-16 px-6 flex items-center justify-between
      bg-white/20 backdrop-blur-xl border-b border-white/30
      shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
      
      <h1 className="text-2xl font-bold text-white tracking-tight">
        Find My Next Meal
      </h1>

      <nav className="flex items-center gap-6 text-white/90">
        <button className="hover:text-white transition">Home</button>
        <button className="hover:text-white transition">History</button>
        <button className="hover:text-white transition">Favorites</button>
        <button className="hover:text-white transition">Settings</button>
      </nav>
    </header>
  )
}