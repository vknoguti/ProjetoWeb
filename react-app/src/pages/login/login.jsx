import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './login.css';
import '../../App.css';
import Footer from '../../components/Footer';
import { CLIENTLIST } from '../../userlist';

const Login = ({headerUser, setHeaderUser}) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: null,
        name: '',
        cpf: '',
        email: '',
        phones: [],
        password: '',
        logged: false,
        address: [],
        cart: [],
        admin: false,
    })

    const [logged, setLogged] = useState(headerUser.logged);

    const handleEmail = (e) => {
        const newState = {...user, email: e.target.value}
        setUser(newState);
    };
  
    const handlePassword = (e) => {
        const newState = {...user, password: e.target.value}
        setUser(newState);
    };
  
    const handleLogin = () => {
        const client = CLIENTLIST.filter(client => {
            if(user.email == client.email && user.password == client.password) {
                return client;
            } 
        })
  
        if(client.length === 1) {
            const newState = {
                id: client[0].id, 
                name: client[0].name, 
                cpf: client[0].cpf,
                email: client[0].email,
                phones: client[0].phones,
                logged: true, 
                admin: client[0].admin, 
                address: client[0].address,
                cart: client[0].cart
            };
            console.log(newState, client[0]);
            setUser(newState);
            setHeaderUser(newState);
            setLogged(true);
            if(!newState.admin)
                navigate('/', {replace: true})
            else
                navigate('/admin', {replace: true})
        }
    };

    return (  
        <>
            <Header user={headerUser} logged={logged}/>
            <div className="container">
                <div className="content">
                    <div className="login content-box">
                        <h1>Já sou cliente</h1>
                        <input value={user.email} onChange={handleEmail} type='email' placeholder='Email'></input>
                        <input value={user.password} onChange={handlePassword} type='password' placeholder='Senha'></input>
                        <button onClick={handleLogin} className='access-button'>Acessar conta</button>
                    </div>

                    <div className="partition"></div>

                    <div className="signup content-box">
                        <h1>Criar conta</h1>
                        <input type='email' placeholder='Informe seu email'></input>
                        <Link to='/signup'>
                            <button className='access-button'>Prosseguir</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Login;