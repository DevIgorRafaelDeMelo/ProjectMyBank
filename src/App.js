import { useState } from "react";
import "./App.css";
import BancoDados from "./Constantes";
import { AiOutlineExport } from "react-icons/ai";

const Alert1 = () => {
  return (
    <>
      <div className=" w-full fixed hidden" id="alertComponet">
        <div className="bg-white text-center text-3xl w-96 font-semibold p-16 m-auto mt-40 rounded-3xl text-xl">
          Cadastro criado com suscesso !
        </div>
      </div>
    </>
  );
};

const Alert2 = () => {
  return (
    <>
      <div className=" w-full fixed hidden" id="alertComponet2">
        <div className="bg-white text-center text-3xl w-96 font-semibold p-16 m-auto mt-40 rounded-3xl text-xl">
          Senha Invalida !
        </div>
      </div>
    </>
  );
};

const Alert3 = () => {
  return (
    <>
      <div className=" w-full fixed hidden" id="alertComponet3">
        <div className="bg-white text-center text-3xl w-96 font-semibold p-16 m-auto mt-40 rounded-3xl text-xl">
          Cadastro não foi encontrado !
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
  const [lobby, setLobby] = useState(true);

  const toggleLogin2 = () => {
    if (secao) {
      setSecao(false);
    }
  };

  const toggleLogin = () => {
    if (!secao) {
      setSecao(true);
    }
  };

  const handleClickButtonLogin = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      const input1 = document.getElementById("loginInput1");
      const input2 = document.getElementById("loginInput2");
      const alerta = document.getElementById("alertComponet3");

      if (name === BancoDados.Usuario && password === BancoDados.Password) {
        setLobby(false);
      } else {
        input1.value = "";
        input2.value = "";
        alerta.classList.remove("hidden");
        alerta.className += " block";
        setTimeout(() => {
          alerta.classList.remove("block");
          alerta.className += " hidden";
        }, 2000);
      }
    }
  };

  const handleClickButtonRegister = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      const input1 = document.getElementById("registerInput1");
      const input2 = document.getElementById("registerInput2");
      const input3 = document.getElementById("registerInput3");
      const alerta1 = document.getElementById("alertComponet2");
      const alerta2 = document.getElementById("alertComponet");

      let zone = input2;
      if (zone.value.length <= 5) {
        input1.value = "";
        input2.value = "";
        input3.value = "";
        alerta1.classList.remove("hidden");
        alerta1.className += " block";
        setTimeout(() => {
          alerta1.classList.remove("block");
          alerta1.className += " hidden";
        }, 2000);
        return;
      }
      if (repeat === rpassword) {
        BancoDados.Usuario = rname;
        BancoDados.Password = rpassword;
        alerta2.classList.remove("hidden");
        alerta2.className += " block";
        setTimeout(() => {
          alerta2.classList.remove("block");
          alerta2.className += " hidden";
        }, 2000);
        setSecao(!secao);
        input1.value = "";
        input2.value = "";
      }
    }
  };

  return (
    <>
      {lobby ? (
        <div id="Login" className="flex w-12/12 px-80 h-full my-auto mx-auto ">
          <div className="py-12  w-3/6 items-center py-20 my-28 rounded-bl-3xl bg-sky-400 text-white text-center">
            <div className=" font-mono text-4xl my-28 font-extrabold">
              MyBank
            </div>
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
                onClick={toggleLogin2}
              >
                Register
              </button>
            </div>
            {secao ? (
              <div className="mt-6">
                <label>
                  <div className="text-xs text-start pl-24">Nome</div>
                  <input
                    id="loginInput1"
                    type="text"
                    className="mt-2"
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="">
                  <div className="mt-6 text-xs text-start pl-24">Senha</div>
                  <input
                    id="loginInput2"
                    type="text"
                    className="mt-2"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <br />
                <button
                  className="mt-6 bg-sky-400 w-40 rounded-lg px-2 text-slate-50 text-sm py-4"
                  onClick={handleClickButtonLogin}
                >
                  Logar
                </button>
              </div>
            ) : (
              <div className="mt-6">
                <label>
                  <div className="text-xs text-start pl-24">Nome</div>
                  <input
                    id="registerInput1"
                    type="text"
                    className="mt-2"
                    onChange={(e) => setRname(e.target.value)}
                  />
                </label>
                <label className="">
                  <div className="mt-6 text-xs text-start pl-24">Senha</div>
                  <input
                    id="registerInput2"
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
                    id="registerInput3"
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
      ) : (
        <div id="Main" className="py-4 px-4">
          <div className="bg-sky-600 h-20 rounded-md flex justify-between">
            <div className="text-5xl w-1/4 text-white p-3 font-semibold ">
              MyBank
            </div>
            <div className="text-white text-center w-2/4 mt-9">
              Seja bem vindo, {BancoDados.Usuario}
            </div>
            <div className="w-1/4">
              <div className=" ml-80 mt-7">
                <AiOutlineExport color="white" height="3em" width="3em" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-3/5 bg-sky-400 ">12</div>
          </div>
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Alert1 />
      <Alert2 />
      <Alert3 />
      <Login />
    </div>
  );
}

export default App;
