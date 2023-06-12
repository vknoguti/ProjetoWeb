import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './login.css';
import '../../App.css';
import Footer from '../../components/Footer';

const Login = () => {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const handleCreateAccount = () => {

        const dadosLocalStorage = JSON.parse(localStorage.getItem(email)) || '';
        console.log(dadosLocalStorage)

        //Verifica se ha outros emails cadastrados
        if(dadosLocalStorage !== "") {
            window.alert('Email Ja cadastrado')
            return
        }
        
        //Redireciona para a pagina de cadastro
        let url
        if(email){
            url = `/signup/${email}`
        } else{
            return
        }

        navigate(url);
    };


    



    return (  
        <>
            <Header />
            <div className="container">
                <div className="content">
                    <div className="login content-box">
                        <h1>Já sou cliente</h1>
                        <input type='email' placeholder='Email'></input>
                        <input type='password' placeholder='Senha'></input>
                        <Link to='/userProfile'>
                            <button className='access-button'>Acessar conta</button>
                        </Link>
                    </div>

                    <div className="partition"></div>

                    <div className="signup content-box">
                        <h1>Criar conta</h1>
                        <input type='email' placeholder='Informe seu email' onChange={e => setEmail(e.target.value)}></input>

                        <button className='access-button' onClick={handleCreateAccount}>Prosseguir</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Login;