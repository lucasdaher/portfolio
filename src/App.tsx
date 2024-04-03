import Presentation from "./components/Presentation/presentation";
import Header from "./components/header";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="mt-24">
        <Presentation
          title="Me chamo Lucas Daher"
          desc="Sou apaixonado por tecnologia e por arte. Atuo como desenvolvedor web focado em front-end a pouco menos de 1 ano."
        />
      </main>
    </div>
  );
}

export default App;
