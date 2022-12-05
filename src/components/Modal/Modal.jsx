import React from 'react';
import './styles.css';
import { CSSTransition } from 'react-transition-group';
import { BsX } from 'react-icons/bs';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import logoModal from "../../assets/4.png";

export default function Modal(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [loading, setLoading] = useState(false);

    console.log(name)
    console.log(email)
    console.log(telephone)

    async function handleNewContact(event) {
        event.preventDefault();
        if (!name || !email || !telephone) {
            return toast.error("Porfavor preencha os campos abaixo.");
        }
        try {
            let form = new FormData();
            form.append("Nome", name);
            form.append("Email", email);
            form.append("Telefone", telephone);
            console.log(name)
            console.log(email)
            console.log(telephone)
            

            setLoading(true);
            toast.success("Foi enviado.");
            const resp = await axios.post(`/api/sendMail`, form)
            setLoading(false);

        } catch (err){
            setLoading(false);
            toast.error(err.response && err.response.data.message ? err.response.data.message : err.message);
        }
    }

  return (
    <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
    >
        <div className='modal' onClick={props.onClose} onSubmit={handleNewContact}>
            <ToastContainer position='top-right' limit={1}/>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <img src={logoModal} alt="" className='logo-title' />
                    <button className='button' onClick={props.onClose}><BsX /></button>
                </div>
                <div className='modal-body'>
                    <h5>VIVA UMA EXPERIÊNCIA CP STUDIO!</h5>
                    <p>
                       A equipe CP Studio logo entrará em contato para agendar a sua aula experimental, 
                       totalmente sem compromisso. Para isso, basta que você preencha os dados solicitados
                    </p>
                </div>
                <form id='form' method='POST' action="/api/sendMail" enctype="multipart/form-data">
                    <div className='input-container'>
                        <input type="text" value={name} placeholder="Nome" name='name' className='input-class' onChange={event => setName(event.target.value)} />
                        <input type="text" value={email} placeholder="E-mail" name='email' className='input-class' onChange={event => setEmail(event.target.value)}/>
                        <input type="tel"  value={telephone} placeholder="Telefone" name='phone' className='input-class' onChange={event => setTelephone(event.target.value)}/>
                    </div>
                    <div className='modal-footer'>
                        <button className='enviar' type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </CSSTransition>
  )
}
