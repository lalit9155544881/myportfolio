function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 mx-auto mt-8 w-full max-w-6xl rounded-xl border border-slate-600/60 bg-slate-900/50 px-4 py-4 text-center text-sm text-slate-300">
      <p className="m-0">© {year} JavaBomber. All rights reserved.</p>
    </footer>
  )
}

export default Footer
