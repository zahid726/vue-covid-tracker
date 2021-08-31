<template>
  <main v-if="!loading">
    <DataTitle  :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />
    <CountrySelect :countries="countries"  @get-country="getCountryData"/>
    <button @click="clearCountryData">Clear Country</button>
  </main>
  <main v-else class="fetchDiv">
    <div class="fetchdata">
      Fetching data
    </div>
    <img id="imgloadind" :src="loadingImage" alt="" >

  </main>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import DataTitle from '@/components/DataTitle.vue'
import DataBoxes from '@/components/DataBoxes.vue'
import CountrySelect from '@/components/CountrySelect.vue'
// import CountrySelect from '../components/CountrySelect.vue'

export default {
  name: 'Home',
  components: {
  Header ,
  DataTitle,
  DataBoxes,
  CountrySelect
    
  },
  data(){
    return{
      loading:true,
      title:'Global',
      dataDate:'',
      stats:{},
      countries:[],
      loadingImage:require('../assets/icon.gif')
    }
  },
  methods:{
    async fetchCovidData(){
      const res= await fetch('https://api.covid19api.com/summary')
      const data = await res.json()
      return data
    },
    getCountryData(country){
      this.stats =country,
      this.title= country.Country
    }
 
  },
     async clearCountryData() {
      loading.value = true;
      const data = await fetchCovidData();
      title.value = 'Global';
      status.value = data.Global;
      loading.value = false;
    },
   async created(){
     const data =await this.fetchCovidData()
    this.dataDate =data.Date
    this.stats= data.Global
    this.countries= data.Countries
    this.loading= false
   }
}

</script>
<style scoped>
.fetchDiv{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
#imgloading{
  width: 24px;
  margin: auto;
}
.fetchdata{
  color: grey;
  margin-top: 10px;
  margin-bottom: 6px;
  font-size: 22px;
}
button{
  font-size: 1.2rem;
  background-color: blue;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 20px
  
}
</style>