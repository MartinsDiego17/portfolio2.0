import { Input, Textarea, Button } from '@nextui-org/react'
import React from 'react'

const FormularioData = ({
  firstInputPlaceholder,
  secondInputPlaceholder,
  textareaTitle,
  textareaPlaceholder,
  textButton,
}) => {
  return (
    <article className='w-1/2 flex justify-end max-sm:justify-center max-sm:mt-[15%] items-center max-sm:w-full'>
      <form className='formContact w-4/5 max-sm:w-full bg-[#222] h-fit rounded-xl p-[4%]'>
        <Input type="text" className='dark h-[2vh]' label={firstInputPlaceholder} />
        <Input type="email" className='dark h-[2vh] mt-[12%]' label={secondInputPlaceholder} />
        <Textarea
          variant="underlined"
          label={textareaTitle}
          placeholder={textareaPlaceholder}
          className='dark mt-[12%]'
        />
        <Button className='mt-[5%] w-full opacity-100' color='primary'>{textButton}</Button>
      </form>
    </article >
  )
}

export default FormularioData
