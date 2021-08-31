<template>
    <div class="titledata" >
        <h2> {{text}}</h2>
    </div>
    <div class="dataDate">
        {{timestamp}}
    </div>
</template>
<script>
import moment from 'moment'
import { computed } from '@vue/reactivity'
export default {
    name: 'DataTitle',
    props: ['text', 'dataDate'],
    computed:{
        timestamp:function(){
            return moment(this.dataDate).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
}
</script>
<style scoped>
.titledata{
    text-align: center;
    margin-top: 10px;
}
h2{
    font-weight: bold;
    font-size: 1.875rem;
}
.dataDate{
    margin-top: 4px;
    margin-bottom: 10px;
    font-size: 1.5rem;
    text-align: center;
}
</style>