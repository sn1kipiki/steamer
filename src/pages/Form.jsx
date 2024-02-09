import { TextInput,  Button, Group, Box } from '@mantine/core';
import { useNavigate} from "react-router-dom";
import '@mantine/core/styles.css';
import React, { useState } from 'react'
import { useForm } from '@mantine/form';
import { sendMessage } from '../api/telegram';
import { notifications } from '@mantine/notifications';
function Form() {

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
  const navigationHandler = () => {
    
        navigate("/");
  
};
    const form = useForm({
        initialValues: {
          email: '',
          phoneNumber: '',
            address: '',
            message1: '',
          
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          phoneNumber: (value) => (/^\S/.test(value) ? null : 'Це поле є обовязковимv'),
          address: (value) => (/^\S/.test(value) ? null : 'Це поле є обовязковим'),
          
        },
      });

      const handleSubmit = async ({email, phoneNumber, address,  message1}) =>{
        try {
            const message = `Email: ${email} || Номер телефону: ${phoneNumber} || Адреса: ${address} || Повідомлення: ${message1 || "не вказано"}`


            await sendMessage(message)

           
            notifications.show({
                    autoClose: 10000,
                  title: 'Дякуємо за замовлення',
                  message: 'Вашу заявку розглянуть та звяжуться з вами найближчим часом 😇',
  
            })
        

            setIsLoading(true)

            
        } catch (error) {
            form.setFieldError("email", error)
        }finally{
            setIsLoading(false)
        }
      }
  return (

    
    <Box miw={350}   mx={10} className='form-box'>
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
        
      />
        <TextInput
        withAsterisk
        label="Номер телефону"
        placeholder="+380"
        {...form.getInputProps('phoneNumber')}
      />
      <TextInput
        withAsterisk
        label="Aдреса"
        placeholder="місто, вулиця, кв/буд"
        {...form.getInputProps('address')}
      />
      <TextInput
       
        label="Повідомлення/Питання"
        placeholder="залиште додаткове повідомлення, задайте питання"
        {...form.getInputProps('message1')}
      />
      

      <Group justify="flex-end" mt="md">
        <button onClick={navigationHandler}>на головну сторінку</button>
        <Button loading={isLoading} type="submit">Надіслати</Button>
      </Group>
    </form>
  </Box>

  )
}

export default Form