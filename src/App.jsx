import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  const countriesPromise = fetch(
    "https://openapi.programming-hero.com/api/all",
  ).then((res) => res.json());

  return (
    <>
      <section id="root">
        <div>
          <h1>React World on the go...</h1>
          <Suspense fallback={<p>Countries data loadng...</p>}>
            <Countries countriesPromise={countriesPromise} />
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default App;
