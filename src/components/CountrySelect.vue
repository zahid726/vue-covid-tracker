<template>
    <select  v-model="selected" @change="onChange()">
        <option value="0">Select Country</option>
        <option v-for="country in countries" :value="country.ID"> {{country.Country}}</option>
       
    </select>
</template>
<script>
export default {
   name: 'CountrySelect',
   props: ['countries'],
   data(){
       return{
           selected: 0
       }
   },
   methods:{
       onChange(){
           const country = this.countries.find((item)=> item.ID === this.selected)
           console.log(country)
           this.$emit('get-country',country)
       }
   }
}
</script>

<style scoped>
select{
    width: fit-content;
    font-size: 1.5rem;
    margin: 10px;
    
}
</style>