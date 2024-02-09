const baseUrl = "https://api.telegram.org/bot6710199081:AAGzcSbu5Tin7E30yQuAVyul1T2xAlBdKng/"

export const sendMessage = async (message) =>{
    const url = `${baseUrl}sendMessage?chat_id=-4199253673&text=${message}`

    const response = await fetch(url)

    if(response.ok === false){
        const error = await response.json();

        await Promise.reject(error.description || "Some errors")
    }
    console.log("response", response)
}