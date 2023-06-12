import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './signup.css';

const Signup = () => {

    let email = useParams().email; 
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone1, setTelefone1] = useState('');
    const [telefone2, setTelefone2] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pontoReferencia, setPontoReferencia] = useState('');


    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (
            !nome ||
            !sobrenome ||
            !cpf ||
            !dataNascimento ||
            !telefone1 ||
            !endereco ||
            !cep ||
            !bairro ||
            !numero ||
            !cidade ||
            !estado
        ) {
            // Exibe uma mensagem de erro ou toma alguma outra ação
            window.alert('Por favor, preencha todos os campos obrigatórios');
            return;
        }

        // Cria um objeto com os dados do usuário
        const usuario = {
            nome,
            sobrenome,
            cpf,
            dataNascimento,
            telefone1,
            telefone2,
            endereco,
            cep,
            bairro,
            numero,
            complemento,
            cidade,
            estado,
            pontoReferencia
        };

        // Armazena os dados do usuário no localStorage
        localStorage.setItem(email, JSON.stringify(usuario));
        window.alert('Cadastro bem sucedido');

        // Limpa os campos do formulário
        setNome('');
        setSobrenome('');
        setCpf('');
        setDataNascimento('');
        setTelefone1('');
        setTelefone2('');
        setEndereco('');
        setCep('');
        setBairro('');
        setNumero('');
        setComplemento('');
        setCidade('');
        setEstado('');
        setPontoReferencia('');
    };

    //Adiciona o endereço de acordo com o cep
    const checkCEP = (e) =>{
        const cep  = e.target.value.replace(/\D/g, ''); 
        console.log(cep)
        if(cep.length !== 8) return;

        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(
            data => {
                console.log(data)
                setEndereco(data.logradouro)
                setBairro(data.bairro)
                setComplemento(data.complemento)
                setCidade(data.localidade)
                setEstado(((data.uf).toString()).toUpperCase())
            }
        )
    }

    return (  
        <>
            <Header />
            <div className="container">
                <div className="signup-container">
                    <h3>*Campos Obrigatórios.</h3>
                    <div className="name-input input-container">
                        <input type='text' placeholder='*Nome' required value={nome} onChange={e => {setNome(e.target.value)}}></input>
                        <input type='text' placeholder='*Sobrenome' required value={sobrenome} onChange={e => setSobrenome(e.target.value)}></input>
                    </div>
                    <div className="social-information-input input-container">
                        <input type='number' placeholder='*CPF' required value={cpf} onChange={e => {setCpf(e.target.value)}}></input>
                        <input type='date' placeholder='*Data de Nascimento' value={dataNascimento} onChange={e => setDataNascimento(e.target.value)}></input>
                    </div>
                    <div className="phone-inputs input-container">
                        <input type='tel' placeholder='*Seu telefone' required value={telefone1} onChange={e => setTelefone1(e.target.value)}></input>
                        <input type='tel' placeholder='Outro telefone' value={telefone2} onChange={e => setTelefone2(e.target.value)}></input>
                    </div>
                    <div className="address-input input-container">
                        <input type='text' placeholder='*Endereço' required value={endereco} onChange={e => setEndereco(e.target.value)}></input>
                    </div>
                    <div className="zip-neighbour-input input-container">
                        <input type='number' placeholder='*CEP' required value={cep} onBlur={checkCEP} onChange={e => setCep(e.target.value)}></input>
                        <input type='text' placeholder='*Bairro' required value={bairro} onChange={e => setBairro(e.target.value)}></input>
                    </div>
                    <div className="additional-address-input input-container">
                        <input type='number' placeholder='*Número' required value={numero} onChange={e => setNumero(e.target.value)}></input>
                        <input type='text' placeholder='Complemento' value={complemento} onChange={e => setComplemento(e.target.value)}></input>
                    </div>
                    <div className="city-info-input input-container">
                        <input type='text' placeholder='*Cidade' required value={cidade} onChange={e => setCidade(e.target.value)}></input>
                        <select name='estado' value={estado} onChange={e => setEstado(e.target.value)}>
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
                        <input type='text' placeholder='Ponto de referência' value={pontoReferencia} onChange={e => setPontoReferencia(e.target.value)}></input>
                    </div>
                    <div className="submit-button">
                        <button onClick={handleFormSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}
 
export default Signup;