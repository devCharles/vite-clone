import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <main>
      <header className="header">
        <article className="header_article">
          <p className="header_h1">
            <span className="header_title">Vite</span>
            <br />
            <span className="header_text">
              Next Generation Frontend Tooling
            </span>
          </p>
          <p className="header_subtitle">
            Get ready for a development environment that can finally catch up
            with you.
          </p>
          <div className="buttons">
            <Button text="Get Started" isPrimary />
            <Button text="Why Vite?" />
            <Button text="View on Github" />
          </div>
        </article>
        <aside className="logoContainer">
          <img
            className="logo"
            src="https://vitejs.dev/logo-with-shadow.png"
            alt="logo"
          />
        </aside>
      </header>

      <section className="cards">
        <Card
          emoji="💡"
          title="Instant Server Start"
          text="On demand file serving over native ESM, no bundling required!"
        />
        <Card
          emoji="⚡️"
          title="Instant Server Start"
          text="On demand file serving over native ESM, no bundling required!"
        />
        <Card
          emoji="🛠️"
          title="Instant Server Start"
          text="On demand file serving over native ESM, no bundling required!"
        />

        <Card
          emoji="📦"
          title="Instant Server Start"
          text="On demand file serving over native ESM, no bundling required!"
        />
        <Card
          emoji="🔩"
          title="Instant Server Start"
          text="On demand file serving over native ESM, no bundling required!"
        />
        <Card
          emoji="🔑"
          title="Instant Server Start"
          text="On demand file serving over native ESM, no bundling required!"
        />
      </section>
    </main>
  );
}

export default App;
