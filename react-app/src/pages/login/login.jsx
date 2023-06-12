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
        email: '',
        password: '',
        logged: false,
        cart: []
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
            user.id = client[0].id;
            user.name = client[0].name;
            user.logged = true;
            user.cart = [];
            setHeaderUser(user);
            setLogged(true);
            navigate('/', {replace: true})
        }
    };

    useEffect(() => {
        // console.log(user)
    }, [user]);

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