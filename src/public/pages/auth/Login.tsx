import { Header, Footer } from "../../components/Common";
import '../../styles/login.scss';

export function Login() {
    return (
        <>
            <Header />
            <div className="auth-area">
                <div className="container">
                    <div className="content-login">
                        <div className="singup-area">
                            <h2>Já possui uma conta?</h2>
                            <form action="">
                                <input type="text" placeholder="Nome de usuário, email ou telefone"/>
                                <input type="password" placeholder="Senha"/>
                                <input type="submit" value="Fazer login"/>
                            </form>
                        </div>
                        <div className="singin-area">
                            <div>
                                <h2>Ainda não possui uma conta? Crie uma agora mesmo!</h2>
                                <form action="">
                                    <input type="text" placeholder="Email"/>
                                    <p>* Ao clicar em criar conta, você concorda com todos os Termos e Condições desta empresa</p>
                                    <input type="submit" value="Criar conta"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}