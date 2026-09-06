export default function Home() {
  return (
    <section
      style={{
        backgroundImage: "url('/Background.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <h1 style={{ color: "white" }}>Hyr bilen som passar dig</h1>
      </header>
    </section>
  );
}
