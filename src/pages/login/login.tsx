import { FormEvent, useState, } from "react";
import { Input } from "../../components/login/input";
import { Logo } from "../../components/login/Logo";
import { auth } from '../../services/fireBaseConnection'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if(email === '' || password === ''){
      alert("Preencha todos os campos!")
      return;
    }

    signInWithEmailAndPassword(auth, email , password)
    .then(() => {
      navigate("/admin", {replace: true})
      console.log("Logado com sucesso")
    })
    .catch((error) => {
      console.log("ERRO AP FAZER LOGIN: ")
      console.log(error);
    })
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Logo />
      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
        <Input
          placeholder="Digite o seu email..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="*********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
