import React from 'react';
import Header from '../../components/Header';
import './login.css';
import '../../App.css';
import Footer from '../../components/Footer';

const Login = () => {
    return (  
        <>
            <Header />
            <div className="container">
                <div className="content">
                    <div className="login content-box">
                        <h1>Já sou cliente</h1>
                        <input type='email' placeholder='Email'></input>
                        <input type='password' placeholder='Senha'></input>
                        <button className='access-button'>Acessar conta</button>
                    </div>

                    <div className="partition"></div>

                    <div className="signup content-box">
                        <h1>Criar conta</h1>
                        <input type='email' placeholder='Informe seu email'></input>
                        <button className='access-button'>Prosseguir</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
 
export default Login;