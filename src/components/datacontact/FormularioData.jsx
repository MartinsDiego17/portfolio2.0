import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input, Textarea, Button } from '@nextui-org/react'
import { validateForm } from './validateForm';

const FormularioData = () => {
  const form = useRef();
  const sendEmail = (e) => {

    const errores = validateForm(dataMessage);
    e.preventDefault();
    emailjs
      .sendForm('service_g7uvaff', 'template_i6p2itp', form.current, {
        publicKey: 'ypNeLhOjGXx219rNc',
      })
  };

  const [dataMessage, setDataMessage] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleDataMessage = (e) => {
    const { name, value } = e.target;

    setDataMessage({
      ...dataMessage,
      [name]: value
    })
  };

  return (
    <article className='w-1/2 max-sm:w-full flex justify-end items-center'>
      <form ref={form} onSubmit={sendEmail} className='max-sm:w-full max-sm:mx-auto max-sm:mt-[10%] formContact w-4/5 bg-[#222] h-fit rounded-xl p-[4%]'>
        <Input name='user_name' value={dataMessage.user_name} onChange={handleDataMessage} type="text" className='dark h-[2vh]' label="Nombre" />
        <Input name='user_email' value={dataMessage.user_email} onChange={handleDataMessage} type="email" className='dark h-[2vh] mt-[12%]' label="Email" />
        <Textarea
          name='message'
          value={dataMessage.message}
          onChange={handleDataMessage}
          variant="underlined"
          label="Mensaje"
          placeholder="Ingresa tu mensaje"
          className='dark mt-[12%]'
        />
        <Button className='mt-[5%] w-full opacity-100' color='primary' type='submit'>Enviar mensaje</Button>
      </form>
    </article >
  );
};

export default FormularioData;
