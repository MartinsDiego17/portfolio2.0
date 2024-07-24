import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input, Textarea, Button } from '@nextui-org/react'

const FormularioData = () => {
  const form = useRef();
  const sendEmail = (e) => {
    console.log("hola")
    e.preventDefault();

    emailjs
      .sendForm('service_g7uvaff', 'template_i6p2itp', form.current, {
        publicKey: 'ypNeLhOjGXx219rNc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [dataMessage, setDataMessage] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleDataMessage = (e) => {
    console.log("Hola");
    const { name, value } = e.target;

    console.log(name + ": ", value);

    setDataMessage({
      ...dataMessage,
      [name]: value
    })
  };

  return (
    <article className='w-1/2 flex justify-end items-center'>
      <form ref={form} onSubmit={sendEmail} className='formContact w-4/5 bg-[#222] h-fit rounded-xl p-[4%]'>
        <Input value={dataMessage.user_name} onChange={handleDataMessage} type="text" className='dark h-[2vh]' label="Nombre" />
        <Input value={dataMessage.user_email} onChange={handleDataMessage} type="email" className='dark h-[2vh] mt-[12%]' label="Email" />
        <Textarea
          value={dataMessage.message}
          variant="underlined"
          label="Mensaje"
          placeholder="Ingresa tu mensaje"
          className='dark mt-[12%]'
        />
        <Button className='mt-[5%] w-full opacity-100' color='primary'>Enviar mensaje</Button>
      </form>
    </article >
  );
};

export default FormularioData;