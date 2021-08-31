<template>
 <header>  
   <h1>
    <a class="fa fa-viruses" href="" style="color:greenyellow"></a> Covid-19 Tracker</h1>
   <p> Api By<span> <a href="https://covid19api.com/"> Covid19api.com</a> </span></p>
  </header> 

</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

header{
  background-color: blue;
  color: white;
  padding: 10px;
  margin: 0px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;

}
p{
  font-size: 16px;
}

a{
text-decoration: none;
 color: rgb(204, 204, 216);
}
a:hover {
  color: greenyellow;
}
@media only screen and (max-width: 600px) {
  header {
    font-size: 20px;
  }
}
</style>
