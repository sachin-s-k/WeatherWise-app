

const CardComponent=({weatherData,cityName})=>{
    return (
        <>
 {
  weatherData.map((data)=>{
    return (
      <div className="border border-2px  rounded-md m-4 w-1/4 h-48 shadow-2xl">
<div className=" flex  justify-center m-16 ">
  <div>
  <h1>City name:{cityName}</h1>
   <div>
  <h1>{data.type}: {data.value} </h1>
  </div>
  
  
</div>

</div>
</div>
    )
  })
 }
        </>
    )
}

export default CardComponent