import React, { useEffect, useState } from 'react'
import './styles.scss'
const CountDown = () => {
	// const [remainingTime, setRemainingTime] = useState(() => {
	// 	const storedTime = localStorage.getItem('countdownTimer')
	// 	if (storedTime) {
	// 		return JSON.parse(storedTime)
	// 	} else {
	// 		// Якщо в localStorage немає збереженого значення, то ініціалізуємо таймер на 24 години
	// 		return 24 * 60 * 60 // 24 години у секундах
	// 	}
	// })

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setRemainingTime(prevTime => {
	// 			if (prevTime === 0) {
	// 				// Якщо час закінчився, оновлюємо його на 24 години
	// 				localStorage.setItem('countdownTimer', JSON.stringify(24 * 60 * 60))
	// 				return 24 * 60 * 60
	// 			} else {
	// 				localStorage.setItem('countdownTimer', JSON.stringify(prevTime - 1))
	// 				return prevTime - 1
	// 			}
	// 		})
	// 	}, 1000)

	// 	// Підчищаємо таймер після відмонтування компонента
	// 	return () => clearInterval(interval)
	// }, []) // Пустий масив депенденсів, щоб useEffect викликався лише раз

	// // Функція для форматування часу у години, хвилини та секунди
	// const formatTime = timeInSeconds => {
	// 	const hours = Math.floor(timeInSeconds / 3600)
	// 	const minutes = Math.floor((timeInSeconds % 3600) / 60)
	// 	const seconds = timeInSeconds % 60

	// 	return `${hours.toString().padStart(2, '0')}:${minutes
	// 		.toString()
	// 		.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
	// }
	const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999); // Set end of day time

      const difference = endOfDay.getTime() - now;

      const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutesLeft = Math.floor((difference / 1000 / 60) % 60);
      const secondsLeft = Math.floor((difference / 1000) % 60);

      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

	return (
		<>
			<h3 className='countdown-title'>Пропозиція діє:</h3>
			<div className='countdown-wrapper'>
			{/* <div className='countdown-box'>
				{countdownData.days}
				<span className='legend'>Days</span>
			</div> */}
			<div className='countdown-box'>
				{hours}
				<span className='legendd'>Hours</span>
			</div>
			<div className='countdown-box'>
				{minutes}
				<span className='legendd'>Minutes</span>
			</div>
			<div className='countdown-box'>
				{seconds}
				<span className='legendd'>Seconds</span>
			</div>
	 	</div>
		</>
		
	)
}

export default CountDown
