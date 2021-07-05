import axios from "axios";
import React from "react";

function App() {
  const [receitas, setReceitas] = React.useState([]);
  const [carregando, setCarregando] = React.useState(null);
  async function handleClick() {
    setCarregando(true);
    receitas.length === 0 ? await fetch() : setReceitas([]);
    setCarregando(false);
  }
  async function fetch() {
    const response = await axios
      .get("https:localhost:8080/receitas")
      .then((response) => response.data);
    setReceitas(response);
    console.log(response);
  }
  return (
    <div>
      <button onClick={handleClick}>Click for receitas</button>

      {carregando ? (
        <p>carregando...</p>
      ) : (
        <>
          {receitas.map((receita) => (
            <ul>
              <li key={receita.id}>
                Nome: {receita.nome}
                Valor: {receita.valor}
                Descrição: {receita.descricao}
                Usuário: {receita.usuario}
              </li>
            </ul>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
