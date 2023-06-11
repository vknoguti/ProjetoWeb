import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


import './userProfile.css';
import '../../App.css';


const UserProfile = () => {


    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };
    
    return (  
        <>
            <Header/>
                <div className="container-profile-background">
               
                    <div className="container-profile">
                        <span className="profile-title">Seus Dados</span>
                        <div className="form-container">

                            <form>
                                <div className="form-row">
                                    <div className="form-group-name">
                                        <label htmlFor="name">Nome Completo:</label>
                                        <input type="text" id="name" name="name" required />
                                    </div>

                                    <div className="form-group-gender">
                                        <label htmlFor="gender">Sexo:</label>
                                        <div className="radio-group">
                                            <label>
                                                <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={selectedGender === 'female'}
                                                onChange={handleGenderChange}
                                                />
                                                Feminino
                                            </label>

                                            <label>
                                                <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={selectedGender === 'male'}
                                                onChange={handleGenderChange}
                                                />
                                                Masculino
                                            </label>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group-date">
                                        <label htmlFor="dob">Data de Nascimento:</label>
                                        <input type="date" id="dob" name="dob" required />
                                    </div>

                                    <div className="form-group-cpf">
                                        <label htmlFor="cpf">CPF:</label>
                                        <input type="text" id="cpf" name="cpf" required disabled/>
                                    </div>

                                </div>


                                <div className="form-row">
                                    <div className="form-group-phone">
                                        <label htmlFor="phone1">Telefone 1:</label>
                                        <input type="tel" id="phone1" name="phone1" required />
                                    </div>

                                    <div className="form-group-phone">
                                        <label htmlFor="phone2">Telefone 2:</label>
                                        <input type="tel" id="phone2" name="phone2" />
                                    </div>
                                </div>  

                                <div className="form-row">
                                    <div className="form-group-submit">
                                        <input type="submit" value="SALVAR INFORMAÇÕES" />
                                    </div>
                                </div>

                            </form>
                        </div>

                        <span className="profile-title">Endereços</span>
                        <div className="addresses-container">
                            <div className="address-row">
                                <span className="address-title">PRINCIPAL</span>
                                <div id="primary-address">
                                    RUA PRINCIPAL, 9999 
                                </div>

                                <div className="address-group-alter">
                                    <input type="submit" id="address1" className="btn-alter-address" value="ALTERAR" />
                                </div>
                                
                            </div>

                            <div className="address-row">
                                <span className="address-title">SECUNDÁRIO</span>
                                <div id="secundary-address">
                                    RUA SECUNDARIA, 9999 
                                </div>

                                <div className="address-group-alter">
                                    <input type="submit" id="address2" className="btn-alter-address" value="ALTERAR" />
                                </div>
                            </div>

                    

    
                            <div className="form-group-submit btn-save-address">
                                <input type="submit" value="ADICIONAR NOVO ENDEREÇO" />
                            </div>
                        </div>
                        
                    </div>




                    
                </div>
            <Footer/>

            
        </>
    );
}
 
export default UserProfile;