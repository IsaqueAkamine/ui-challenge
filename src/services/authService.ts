import { AuthData } from "../contexts/auth";

async function signIn(email: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("PASSWORD: ", password);
      if (password === "123456") {
        resolve({
          token: "new-token",
          email,
          name: "Nome do usuário logado",
        });
      } else {
        reject(new Error("Credenciais inválidas"));
      }
    }, 500);
  });
}

export const authService = { signIn };
