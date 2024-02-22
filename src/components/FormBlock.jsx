import { Box, Checkbox, Group, NativeSelect, TextInput } from '@mantine/core'
import '@mantine/core/styles.css'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import React from 'react'
import { sendMessage } from '../api/telegram'

function FormBlock() {
	// const [isLoading, setIsLoading] = useState(false)

	const form = useForm({
		initialValues: {
			// email: '',
			city: '',
			phoneNumber: '',
			initial: '',
			message1: '',
			department: '',
			delivery: 'Оплата при отриманні',
			confirmation: true,
			
		},

		validate: {
			// email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			phoneNumber: value =>
				/^\S/.test(value) ? null : 'Це поле є обовязковим',
			initial: value => (/^\S/.test(value) ? null : 'Це поле є обовязковим'),
			department: value => (/^\S/.test(value) ? null : 'Це поле є обовязковим'),
			city: value => (/^\S/.test(value) ? null : 'Це поле є обовязковим'),
		},
	})

	const handleSubmit = async ({  phoneNumber, initial, message1, department, city, delivery, confirmation}) => {
		try {
			const message = `
			|| ПІБ: ${initial} \n 
			|| Номер телефону: ${phoneNumber} \n
			|| Місто: ${city} \n 
			|| Відділення нової почти: ${department} \n 
			|| Тип доставки: ${delivery}\n
			|| Повідомлення: ${
				message1 || 'не вказано'
			 } \n
			|| Подзвонити для підтвердження: ${confirmation ? "так":"ні"}`

			await sendMessage(message)
			// console.log(message)

			notifications.show({
				autoClose: 10000,
				title: 'Дякуємо за замовлення',
				message:
					'Вашу заявку розглянуть та звяжуться з вами найближчим часом 😇',
			})

			// setIsLoading(true)
		} catch (error) {
			form.setFieldError('email', error)
		}
		//  finally {
		// 	setIsLoading(false)
		// }
	}
	return (
		<Box miw={350} mx={10} className='form-box'>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<TextInput
					withAsterisk
					label='ПІБ'
					placeholder='Введіть ПІБ'
					{...form.getInputProps('initial')}
				/>
				{/* <TextInput
					withAsterisk
					label='Email'
					placeholder='your@email.com'
					{...form.getInputProps('email')}
				/> */}
				<TextInput
					withAsterisk
					label='Номер телефону'
					placeholder='+380'
					{...form.getInputProps('phoneNumber')}
				/>
				<TextInput
					withAsterisk
					label='Місто'
					placeholder='Введіть назву міста'
					{...form.getInputProps('city')}
				/>
				<TextInput
					withAsterisk
					label='Відділення Нової Почти'
					placeholder='Нова почта №'
					{...form.getInputProps('department')}
				/>
				<NativeSelect
      
      // onChange={(event) =>  setDelivery(event.currentTarget.value)}
      data={['Оплата при отриманні','Предоплата на карту', ]}
			label='Виберіть спосіб оплати'
			{...form.getInputProps('delivery', { type: 'nativeselect' })}
			
    />
				<TextInput
					label='Повідомлення/Питання'
					placeholder='залиште додаткове повідомлення, задайте питання'
					{...form.getInputProps('message1')}
				/>
				<Checkbox
					defaultChecked
					
					// onChange={(event) => setChecked(event.currentTarget.checked)}
          mt="md"
					color="orange"
          label="зателефонувати мені для уточнення деталей"
          {...form.getInputProps('confirmation', { type: 'checkbox' })}
        />

				<Group mt='md'>
					{/* <Button loading={isLoading} type='submit'>
						Надіслати
					</Button>
					<Button loading={isLoading} type='submit' className='order-button'>
						замовити
					</Button> */}
					<button id="bottom" className='order-button'>ЗАМОВИТИ</button>
				</Group>
			</form>
		</Box>
	)
}

export default FormBlock