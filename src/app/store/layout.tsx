export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <nav>Navegación de las categorías</nav>
      {children}
    </main>
  )
}