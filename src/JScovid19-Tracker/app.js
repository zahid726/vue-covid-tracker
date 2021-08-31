let btn1=document.querySelector('.btn-1')
window.addEventListener('load', showItem)
function showItem(){
  
 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.covid19api.com/summary', true);
    
    // LOAD
    xhr.onload = function(){
      const covidData= JSON.parse(this.responseText)
      if(this.status === 200)
      {
     
      covidData.Countries.forEach(function(countryName) {
     
      //  console.log( countryName.Country)
      
       })
    //    for(let i=0; i<=100;i++){
    //     console.log(covidData.Countries[i].ID)
    //     let seletedCountry=  `
    //     <select >
    //     <option value="0">Select Country</option>
    //     <option value="${covidData.Countries[i].ID}">${covidData.Countries[i].Country}</option>
       
   
    // </select>
    //   `
    //     let selected =document.querySelector('.select')
       
    //    }
    var ele = document.querySelector('#select  ');
    for (var i = 0; i <= 100; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        ele.innerHTML = ele.innerHTML +
            '<option value="' + covidData.Countries[i].ID + covidData.Countries[i].Country + '</option>';
    }
}

       let output= `
      
       <h2>Global Covid19 Situation</h2>
       
      <ul>
      <li><span>New Confirmed :    </span> ${covidData.Global.NewConfirmed}</li>
      <li><span>Total Confirmed :  </span>${covidData.Global.TotalConfirmed}</li>
      <li><span>NewDeaths :        </span>${covidData.Global.NewDeaths}</li>
      <li><span>Total Deaths :     </span>${covidData.Global.TotalDeaths}</li>
      <li><span>New Recoverd :     </span>${covidData.Global.NewRecovered}</li>
      <li><span>Total Recoverd :    </span>${covidData.Global.TotalRecovered}</li>
     


      </ul>
         
      
       `
      //  console.log(covidData.Countries)
      
      
     document.querySelector('.left').innerHTML=output;
  

       

    
      }
      xhr.send()
    }
    
     
   

