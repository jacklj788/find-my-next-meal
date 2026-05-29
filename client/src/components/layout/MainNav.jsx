export default function MainNav() {
    return   <aside className="w-64 p-6 bg-secondary/40 backdrop-blur-sm border-r border-accent/40 flex flex-col gap-6 shadow-[10px_0_20px_rgba(0,0,0,0.35)]">
    <h2 className="text-2xl font-bold text-accent">Menu</h2>

    <nav className="flex flex-col gap-3 text-soft font-semibold">
      <button className="text-left hover:text-accent">Vibe Picker</button>
      <button className="text-left hover:text-accent">History</button>
      <button className="text-left hover:text-accent">Favorites</button>
      <button className="text-left hover:text-accent">Settings</button>
    </nav>
  </aside>
}