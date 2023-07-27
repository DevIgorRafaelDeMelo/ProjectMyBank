import { useEffect, useState } from "react";
import "./App.css";
import BancoDados from "./Constantes";
import json from "./Bd.json";
import {
  AiOutlineExport,
  AiOutlineVerticalAlignBottom,
  AiOutlineVerticalAlignTop,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineFileText,
} from "react-icons/ai";

var data = new Date();

const Alert1 = () => {
  return (
    <>
      <div className="w-40 fixed right-72 hidden" id="alertComponet">
        <div className="bg-white text-center  text-3xl w-96 font-semibold p-8 w-100  mt-20  border-b-8 border-green-500 text-xl">
          Cadastro criado com suscesso !
        </div>
      </div>
    </>
  );
};

const Alert2 = () => {
  return (
    <>
      <div className="w-40 fixed right-72 hidden" id="alertComponet2">
        <div className="bg-white text-center  text-3xl w-96 font-semibold p-8 w-100  mt-20  border-b-8 border-green-500 text-xl">
          Senha Invalida !
        </div>
      </div>
    </>
  );
};

const Alert3 = () => {
  return (
    <>
      <div className="w-40 fixed right-72 hidden" id="alertComponet3">
        <div className="bg-white text-center  text-3xl w-96 font-semibold p-8 w-100  mt-20  border-b-8 border-green-500 text-xl">
          Cadastro não foi encontrado !
        </div>
      </div>
    </>
  );
};

const Deposito = () => {
  return (
    <>
      <div className="w-40 fixed right-72 hidden" id="alertComponetDeposito">
        <div className="bg-white text-center  text-3xl w-96 font-semibold p-8 w-100  mt-20  border-b-8 border-green-500 text-xl">
          Deposito realizado com sucesso !!!
        </div>
      </div>
    </>
  );
};

const Saque = () => {
  return (
    <>
      <div className="w-40 fixed right-72 hidden" id="alertComponetSaque">
        <div className="bg-white text-center  text-3xl w-96 font-semibold p-8 w-100  mt-20  border-b-8 border-green-500 text-xl">
          Saque realizado com sucesso !!!
        </div>
      </div>
    </>
  );
};

const Invalido = () => {
  return (
    <>
      <div className=" w-40 fixed right-72 hidden" id="alertComponetInvalid">
        <div className="bg-white text-center  text-3xl w-96 font-semibold p-8 w-100  mt-20  border-b-8 border-green-500 text-xl">
          Operação Invalida !!!
        </div>
      </div>
    </>
  );
};

const Login = () => {
  const [saldo, setSaldo] = useState();
  const [secao, setSecao] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rname, setRname] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [lobby, setLobby] = useState(false);
  const [deposito, setDeposito] = useState("");
  const [box, setBox] = useState("Est");
  const [saque, setSaque] = useState("");
  const [togle, setTogle] = useState(true);

  useEffect(() => {
    setSaldo(BancoDados.Saldo);
  }, [setSaldo]);

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
        }, 1000);
      }
    }
  };

  const handleClickButtonDeposito = () => {
    setBox("Dep");
  };

  const handleClickButtonExtrato = () => {
    setBox("Est");
  };

  const handleClickSaldo = () => {
    setTogle(!togle);
  };

  const sendBankOperacao = (dep, ver) => {
    JSON.stringify({ data: "10/09/89", tipo: "Deposito", Valor: dep });
  };

  const handleClickDeposito = () => {
    const alerta = document.getElementById("alertComponetDeposito");
    const dep = document.getElementById("dep");
    let soma = saldo + Number(deposito);
    // eslint-disable-next-line no-lone-blocks
    {
      if ((deposito <= 0) | (deposito === String)) {
        return console.log("Invalido");
      }
    }
    sendBankOperacao(deposito, true);
    setSaldo(soma);
    dep.value = 0;
    setDeposito(0);
    alerta.classList.remove("hidden");
    alerta.className += " block";
    setTimeout(() => {
      alerta.classList.remove("block");
      alerta.className += " hidden";
    }, 1000);
  };

  const iniciaValor = (saldo) => {
    return Number(saldo).toFixed(2).replace(".", ",");
  };

  const handleClickSaque = () => {
    const alerta = document.getElementById("alertComponetSaque");
    const dep = document.getElementById("saq");
    let soma = saldo - Number(saque);
    // eslint-disable-next-line no-lone-blocks
    {
      if ((saque >= saldo) | (saque === String) | (saque <= 0)) {
        const alerta2 = document.getElementById("alertComponetInvalid");
        alerta2.classList.remove("hidden");
        alerta2.className += " block";
        setTimeout(() => {
          alerta2.classList.remove("block");
          alerta2.className += " hidden";
        }, 1000);
        return console.log("Invalido");
      }
    }
    setSaldo(soma);
    dep.value = 0;
    setDeposito(0);
    alerta.classList.remove("hidden");
    alerta.className += " block";
    setTimeout(() => {
      alerta.classList.remove("block");
      alerta.className += " hidden";
    }, 1000);
  };

  const handleClickButtonSaque = () => {
    setBox("Seq");
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
        <div id="Main" className="py-16 px-20">
          <div className="bg-sky-400 h-20 rounded-md flex justify-between">
            <div className="text-5xl w-1/4 text-white p-3 font-semibold ">
              MyBank
            </div>
            <div className="text-white text-center w-2/4 mt-9">
              Olá, {BancoDados.Usuario}
            </div>
            <div className="w-1/4">
              <div className=" ml-80 mt-6 text-white text-4xl ">
                <AiOutlineExport />
              </div>
            </div>
          </div>
          <div className="flex h-5/6 ">
            <div className="w-3/5 mt-16 p-20 rounded-md bg-sky-400 ">
              <div className="text-white text-5xl font-semibold flex justify-between">
                Seu saldo: R$
                {togle ? (
                  <div id="saldo">{iniciaValor(saldo)}</div>
                ) : (
                  <div id="saldo">00,00</div>
                )}
                {togle ? (
                  <AiOutlineEyeInvisible
                    className="mr-4"
                    onClick={handleClickSaldo}
                  />
                ) : (
                  <AiOutlineEye className="mr-4" onClick={handleClickSaldo} />
                )}
              </div>
              <div className="mt-20 bg-slate-200 p-20 h-5/6 ">
                {box === "Dep" ? (
                  <div className="">
                    <div className="text-xl">Insira o valor para depositar</div>
                    <input
                      id="dep"
                      type="number"
                      placeholder="0,00"
                      pattern="[0-9]"
                      min="0"
                      step="1"
                      className="mt-10 h-12 w-80 ps-10 appearance-none"
                      onChange={(e) => setDeposito(e.target.value)}
                    />
                    <button
                      className="ms-40 bg-sky-600 p-5 rounded-md text-white ps-10 pr-10"
                      onClick={handleClickDeposito}
                    >
                      Depositar
                    </button>
                  </div>
                ) : (
                  <></>
                )}
                {box === "Seq" ? (
                  <div className="">
                    <div className="text-xl">
                      Insira o valor que deseja sacar
                    </div>
                    <input
                      id="saq"
                      type="number"
                      placeholder="0,00"
                      pattern="[0-9]"
                      min="0"
                      step="1"
                      className="mt-10 h-12 w-80 ps-10 appearance-none"
                      onChange={(e) => setSaque(e.target.value)}
                    />
                    <button
                      className="ms-40 bg-sky-600 p-5 rounded-md text-white ps-10 pr-10"
                      onClick={handleClickSaque}
                    >
                      Sacar
                    </button>
                  </div>
                ) : (
                  <></>
                )}
                {box === "Est" ? (
                  <div className="">
                    <div className="text-2xl mb-2">Extrato:</div>
                    <div className="overflow-auto h-60 ">
                      {json.map((val) => {
                        return (
                          <div className="bg-blue-200 mb-5 p-4">
                            <div key={val.data}>
                              Data da transalação: {val.data}
                            </div>
                            <div>Tipo da translação: {val.tipo}</div>
                            <div className="text-2xl">
                              Valor R$ : {val.Valor}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="w-2/5 bg-sky-400 mt-16 p-10 ms-16 rounded-md ">
              <div
                className="rounded-md text-2xl bg-white p-10 mb-5 flex justify-between pr-20"
                onClick={handleClickButtonDeposito}
              >
                <div>Depositar</div>
                <AiOutlineVerticalAlignBottom />
              </div>
              <div
                className="rounded-md text-2xl bg-white p-10 mb-5 flex justify-between pr-20"
                onClick={handleClickButtonSaque}
              >
                <div>Saque</div>
                <AiOutlineVerticalAlignTop />
              </div>
              <div
                className="rounded-md text-2xl bg-white p-10 mb-5 flex justify-between pr-20"
                onClick={handleClickButtonExtrato}
              >
                <div>Extrato</div>
                <AiOutlineFileText />
              </div>
            </div>
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
      <Deposito />
      <Saque />
      <Invalido />
      <Login />
    </div>
  );
}

export default App;
