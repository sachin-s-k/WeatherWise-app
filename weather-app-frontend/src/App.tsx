import { useState } from "react"
import CardComponent from "./components/CardComponent"
import SearchBar from "./components/SearchBar"
import axios from "axios"
import Header from "./components/Header"


function App() {
   const [weatherData,setWeatherData]=useState(Array)
   const [cityName,setCityName]=useState('')
   const [cityError,setCityError]=useState('')
  const  API_key='399f299c5f802d0f23b3aaee1a2f58fa'

  const getCurrentWeather=async (city_name:string)=>{
try{
  setWeatherData([])
 if(city_name!==''){
  console.log(city_name,'cityyy');
  setCityName(city_name)
        const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name},india&appid=${API_key}`)
  
        console.log(response.data.main,'responseeee');
        setWeatherData([{type:'Temperature',value:`${Math.round(response.data.main.temp-273.15)} degree cel`},{type:'Pressure',value:`${response.data.main.pressure*0.000986923} atm` },{type:'humidity',value:`${response.data.main.humidity}%`}])
 }else{
  setCityError('Enter your city name')
 }
      
}catch(err){
  console.log(err.response.data.message,'errrr');

  if(err){
setCityError(err.response.data.message)

  }
  
}

  }

  



  return (
   
  <>
<Header/>
<div className="bg-gray-200 h-screen" >
  <div className="text-center pt-10">
  {cityName?<h1 className="text-6xl"><span className="text-xl">Weather in </span>{cityName}</h1>:<h1 className="text-4xl pt-14">Find current weather conditions</h1>}
  </div>
<div className="">
 <SearchBar getCurrentWeather={getCurrentWeather}/>
 </div>

 <div className="flex flex-row justify-center  m-16">
{weatherData.length? <CardComponent cityName={cityName} weatherData={weatherData}/>:!cityError?<h1 className="text-center">There is no weather data to display</h1>:<h1 className="text-center text-red-500">{cityError}</h1>}
 
 </div>
</div>


  </>
  )
}

export default App
