import "./App.css";
import { Header } from "./assets/components/Header/Header";
import { PasswordComp } from "./assets/components/PasswordComp/PasswordComp";
import { PasswordProvider } from "./assets/Context/PasswordContext";
import { PasswordOptions } from "./assets/components/PasswordOptions/PasswordOptions";

function App() {
  return (
    <PasswordProvider>
      <main>
        <Header />
        <section id='password-generator'>
          <PasswordComp />
          <PasswordOptions />
        </section>
      </main>
    </PasswordProvider>
  );
}

export default App;
