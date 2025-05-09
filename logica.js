const { createContext, useContext, useState, useEffect } = React;

const TemaContextual = createContext();

function ProveedorTema({ children }) {
  const [tema, setTema] = useState("light");

  const cambiaColor = () =>
    setTema((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.className = tema;
  }, [tema]);

  return (
    <TemaContextual.Provider value={{ tema, cambiaColor }}>
      {children}
    </TemaContextual.Provider>
  );
}

function BotonCambiaColor() {
  const { cambiaColor } = useContext(TemaContextual);
  return <button onClick={cambiaColor}>Cambiar tema</button>;
}

function MostrarTema() {
  const { tema } = useContext(TemaContextual);
  return (
    <div className="card">
      <h2>Tema actual: {tema === "light" ? " Cegado si sos de compu  " : " En casa si sos de compu  "}</h2>
    </div>
  );
}

 
function App() {
  return (
    <ProveedorTema>
      <h1>Use Context</h1>
      <h1>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          repo
        </a>
      </h1>
      <BotonCambiaColor />
      <MostrarTema />
    </ProveedorTema>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
