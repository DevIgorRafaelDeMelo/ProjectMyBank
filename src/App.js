import { useState } from "react";
import "./App.css";
import BancoDados from "./Constantes";

const Alert = () => {
  return (
    <>
      <div className=" w-full fixed hidden" id="alertComponet">
        <div className="bg-gray-700 text-center w-80 p-16 m-auto mt-40 rounded-3xl text-xl">
          Cadastro criado com suscesso !
        </div>
      </div>
    </>
  );
};

const Login = () => {
  const [secao, setSecao] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rname, setRname] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [repeat, setRepeat] = useState("");

  const toggleLogin = () => {
    setSecao(!secao);
  };

  const handleClickButtonLogin = () => {};

  const handleClickButtonRegister = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      if (repeat === rpassword) {
        BancoDados.Usuario = rname;
        BancoDados.Password = rpassword;
        const alerta = document.getElementById("alertComponet");
        alerta.classList.remove("hidden");
        alerta.className += " block";
        setTimeout(() => {
          alerta.classList.remove("block");
          alerta.className += " hidden";
        }, 1000);
      }
    }
  };

  return (
    <>
      <div id="Login" className="flex w-12/12 px-80 h-full my-auto mx-auto ">
        <div className="py-12  w-3/6 items-center py-20 my-28 rounded-bl-3xl bg-sky-400 text-white text-center">
          <div className=" font-mono text-4xl my-28 font-extrabold">MyBank</div>
          <div className="text-xs italic text-gray-800 ">
            Um banco raro com o serviço incomum
          </div>
        </div>
        <div className="w-3/6 py-12 rounded-tr-3xl my-28 bg-gray-200 text-center text-2xl">
          <div className="font-bold">LOGIN</div>
          <div className="flex w-max mx-auto mt-4 ">
            <button
              className="px-3.5 py-4 border-b-2 border-zinc-100 hover:border-zinc-950 w-40 text-slate-950"
              onClick={toggleLogin}
            >
              Logar
            </button>
            <div className="w-1/6"></div>
            <button
              className="px-3.5 py-4 border-b-2 w-40 border-zinc-100 hover:border-zinc-950 text-slate-950"
              onClick={toggleLogin}
            >
              Register
            </button>
          </div>
          {secao ? (
            <></>
          ) : (
            <div className="mt-6">
              <label>
                <div className="text-xs text-start pl-24">Nome</div>
                <input
                  type="text"
                  className="mt-2"
                  onChange={(e) => setRname(e.target.value)}
                />
              </label>
              <label className="">
                <div className="mt-6 text-xs text-start pl-24">Senha</div>
                <input
                  type="text"
                  className="mt-2"
                  onChange={(e) => setRpassword(e.target.value)}
                />
              </label>
              <br />
              <label className="">
                <div className="mt-6 text-xs text-start pl-24">
                  Repita a Senha
                </div>
                <input
                  type="text"
                  className="mt-2"
                  onChange={(e) => setRepeat(e.target.value)}
                />
              </label>
              <br />
              <button
                id="BtnRegiter"
                className="mt-6 bg-sky-400 w-40 rounded-lg px-2 text-slate-50 text-sm py-4"
                onClick={handleClickButtonRegister}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Alert />
      <Login />
    </div>
  );
}

export default App;
