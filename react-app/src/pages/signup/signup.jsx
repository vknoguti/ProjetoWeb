import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './signup.css';

const Signup = () => {
    return (  
        <>
            <Header />
            <div className="container">
                <div className="signup-container">
                    <h3>*Campos Obrigatórios.</h3>
                    <div className="name-input input-container">
                        <input type='text' placeholder='*Nome'></input>
                        <input type='text' placeholder='*Sobrenome'></input>
                    </div>
                    <div className="social-information-input input-container">
                        <input type='number' placeholder='*CPF'></input>
                        <input type='date' placeholder='*Data de Nascimento'></input>
                    </div>
                    <div className="phone-inputs input-container">
                        <input type='tel' placeholder='*Seu telefone'></input>
                        <input type='tel' placeholder='Outro telefone'></input>
                    </div>
                    <div className="address-input input-container">
                        <input type='text' placeholder='*Endereço'></input>
                    </div>
                    <div className="zip-neighbour-input input-container">
                        <input type='number' placeholder='*CEP'></input>
                        <input type='text' placeholder='*Bairro'></input>
                    </div>
                    <div className="additional-address-input input-container">
                        <input type='number' placeholder='*Número'></input>
                        <input type='text' placeholder='Complemento'></input>
                    </div>
                    <div className="city-info-input input-container">
                        <input type='text' placeholder='*Cidade'></input>
                        <select name='estado'>
                            <option value='' disabled selected>*UF</option>
                            <option value='AC'>AC</option>
                            <option value='AL'>AL</option>
                            <option value='AP'>AP</option>
                            <option value='AM'>AM</option>
                            <option value='BA'>BA</option>
                            <option value='CE'>CE</option>
                            <option value='DF'>DF</option>
                            <option value='ES'>ES</option>
                            <option value='GO'>GO</option>
                            <option value='MA'>MA</option>
                            <option value='MT'>MT</option>
                            <option value='MS'>MS</option>
                            <option value='MG'>MG</option>
                            <option value='PA'>PA</option>
                            <option value='PB'>PB</option>
                            <option value='PR'>PR</option>
                            <option value='PE'>PE</option>
                            <option value='PI'>PI</option>
                            <option value='RJ'>RJ</option>
                            <option value='RN'>RN</option>
                            <option value='RS'>RS</option>
                            <option value='RO'>RO</option>
                            <option value='RR'>RR</option>
                            <option value='SC'>SC</option>
                            <option value='SP'>SP</option>
                            <option value='SE'>SE</option>
                            <option value='TO'>TO</option>
                        </select>
                    </div>
                    <div className="reference-point input-container">
                        <input type='text' placeholder='Ponto de referência'></input>
                    </div>
                    <div className="submit-button">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}
 
export default Signup;