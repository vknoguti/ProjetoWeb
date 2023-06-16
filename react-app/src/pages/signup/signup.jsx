import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './signup.css';

const Signup = ({ headerUser, setHeaderUser}) => {
    const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    phone: '',
    otherPhone: '',
    address: '',
    zipCode: '',
    neighborhood: '',
    additionalAddress: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    referencePoint: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    const newUser = {
        name: formValues.firstName + " " + formValues.lastName,
        cpf: formValues.cpf,
        email: headerUser.email,
        password: formValues.password,
        phones: [
            formValues.phone,
            formValues.otherPhone
        ],
        address: [
            {
            cep: formValues.zipCode,
            city: formValues.city,
            state: formValues.state,
            neighbourhood: formValues.neighborhood,
            street: formValues.address,
            number: formValues.number,
            additional: formValues.referencePoint
            }
        ],
        cart: [],
        admin: false
    }
    e.preventDefault();
    const jsonData = JSON.stringify(newUser);

    const createUser = async () => {
      try {
        const response = await fetch('http://localhost:7000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonData,
        });
  
        if(response.ok) {
          const data = await response.json();

          if(data.ok) {
            console.log(data)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
    createUser();

    setHeaderUser({...headerUser, email:""});
    alert("Account created!")
    navigate('/')
  };
  

  return (
    <>
      <Header user={headerUser} logged={headerUser.logged} />
      <div className="container">
        <div className="signup-container">
          <h3>*Campos Obrigatórios.</h3>
          <form onSubmit={handleSubmit}>
            <div className="name-input input-container">
              <input
                type="text"
                name="firstName"
                placeholder="*Nome"
                value={formValues.firstName}
                onChange={handleInputChange}
              ></input>
              <input
                type="text"
                name="lastName"
                placeholder="*Sobrenome"
                value={formValues.lastName}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="social-information-input input-container">
              <input
                type="number"
                name="cpf"
                placeholder="*CPF"
                value={formValues.cpf}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="phone-inputs input-container">
              <input
                type="tel"
                name="phone"
                placeholder="*Seu telefone"
                value={formValues.phone}
                onChange={handleInputChange}
              ></input>
              <input
                type="tel"
                name="otherPhone"
                placeholder="Outro telefone"
                value={formValues.otherPhone}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="address-input input-container">
              <input
                type="text"
                name="address"
                placeholder="*Endereço"
                value={formValues.address}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="zip-neighbour-input input-container">
              <input
                type="number"
                name="zipCode"
                placeholder="*CEP"
                value={formValues.zipCode}
                onChange={handleInputChange}
              ></input>
              <input
                type="text"
                name="neighborhood"
                placeholder="*Bairro"
                value={formValues.neighborhood}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="additional-address-input input-container">
              <input
                type="number"
                name="number"
                placeholder="*Número"
                value={formValues.number}
                onChange={handleInputChange}
              ></input>
              <input
                type="text"
                name="complement"
                placeholder="Complemento"
                value={formValues.complement}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="city-info-input input-container">
              <input
                type="text"
                name="city"
                placeholder="*Cidade"
                value={formValues.city}
                onChange={handleInputChange}
              ></input>
              <select
                name="state"
                value={formValues.state}
                onChange={handleInputChange}
              >

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
                {/* Options for states */}
              </select>
            </div>
            <div className="reference-point input-container">
              <input
                type="text"
                name="referencePoint"
                placeholder="Ponto de referência"
                value={formValues.referencePoint}
                onChange={handleInputChange}
              ></input>
            </div>

            <div className="password input-container">
              <input
                type="password"
                name="password"
                placeholder="*Senha"
                value={formValues.password}
                onChange={handleInputChange}
              ></input>
            </div>

            <div className="submit-button">
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
