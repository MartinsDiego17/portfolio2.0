import { Input, Textarea, Button } from '@nextui-org/react'
import React from 'react'

const FormularioData = () => {
  return (
    <article className='w-1/2 flex justify-end items-center'>
      <form className='formContact w-4/5 bg-[#222] h-fit rounded-xl p-[4%]'>
        <Input type="text" className='dark h-[2vh]' label="Nombre" />
        <Input type="email" className='dark h-[2vh] mt-[12%]' label="Email" />
        <Textarea
        variant="underlined"
        label="Mensaje"
        placeholder="Ingresa tu mensaje"
        className='dark mt-[12%]'
      />
      <Button className='mt-[5%] w-full opacity-100' color='primary'>Enviar mensaje</Button>
      </form>
    </article >
  )
}

export default FormularioData
