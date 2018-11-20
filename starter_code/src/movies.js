/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



function turnHoursToMinutes( movies ){
  let hoursToMinutes = movies.map(function(movies){
    let newArray = movies.duration.split(" ");
    let hour = newArray.filter(function(movie){
      return  movie.includes("h")
    })
    //console.log(hour[0])
    if(hour.length > 0){
      hour = hour[0].slice( 0, hour[0].length - 1)
    }else{
      hour = 0;
    }

    let minutes = newArray.filter(function(movie){
      return movie.includes("min")
    })
    //console.log(minutes)
    if(minutes.length > 0){
      minutes = minutes[0].slice(0, minutes[0].length -3)
    } else{
      minutes = 0
    }

    result = parseInt(hour * 60)  + parseInt(minutes)
    console.log(result)
    updatedArray = Object.assign({}, movies);
    updatedArray.duration = result;

    return updatedArray
  })
  return hoursToMinutes
}

function ratesAverage(){
  
}

