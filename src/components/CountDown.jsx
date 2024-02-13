import React, { useEffect, useState } from 'react'

const CountDown = () => {
	const [remainingTime, setRemainingTime] = useState(() => {
		const storedTime = localStorage.getItem('countdownTimer')
		if (storedTime) {
			return JSON.parse(storedTime)
		} else {
			// Якщо в localStorage немає збереженого значення, то ініціалізуємо таймер на 24 години
			return 24 * 60 * 60 // 24 години у секундах
		}
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime(prevTime => {
				if (prevTime === 0) {
					// Якщо час закінчився, оновлюємо його на 24 години
					localStorage.setItem('countdownTimer', JSON.stringify(24 * 60 * 60))
					return 24 * 60 * 60
				} else {
					localStorage.setItem('countdownTimer', JSON.stringify(prevTime - 1))
					return prevTime - 1
				}
			})
		}, 1000)

		// Підчищаємо таймер після відмонтування компонента
		return () => clearInterval(interval)
	}, []) // Пустий масив депенденсів, щоб useEffect викликався лише раз

	// Функція для форматування часу у години, хвилини та секунди
	const formatTime = timeInSeconds => {
		const hours = Math.floor(timeInSeconds / 3600)
		const minutes = Math.floor((timeInSeconds % 3600) / 60)
		const seconds = timeInSeconds % 60

		return `${hours.toString().padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
	}

	return (
		<div>
			<h1>Countdown Timer</h1>
			<div>Time Remaining: {formatTime(remainingTime)}</div>
		</div>
	)
}

export default CountDown
