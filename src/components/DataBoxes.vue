<template>
    <div class="row">
        <!-- box 1 -->
        <div class="box box1">
            <h2>Cases</h2>
            <div class="data">
                <span><b> New:</b></span>
                {{numberWithCommas(stats.NewConfirmed)}}
            </div>
             <div class="data">
                <span><b> Total:</b></span>
                {{numberWithCommas(stats.TotalConfirmed)}}
            </div>
        </div>
          <!-- box 1 -->
        <div class="box box2">
            <h2>Deaths</h2>
              <div class="data">
                <span><b> New:</b></span>
                {{numberWithCommas(stats.NewDeaths)}}
            </div>
             <div class="data">
                <span><b> Total:</b></span>
                {{numberWithCommas(stats.TotalDeaths) }}
            </div>
        </div>
          <!-- box 1 -->
        <div class="box box3">
            <h2>New Cases</h2>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DataBoxes',
  props: ['stats'],
  setup () {
    return {
      numberWithCommas (x) {
        return x.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    };
  }
};
</script>

<style scoped>
.row{
    width: 100%;
    display: flex;

}
.box{
    width: 33%;
    margin: 4px;
    padding: 16px;
    background-color: lightblue;
    text-align: center;

}
.data{
    margin-bottom: 4px;
    font-size: 1.5rem;
    margin-top: 7px;
}
h2{
    font-weight: bold;
    font-size: 1.785rem;
}
.box2{
      background-color: rgb(110, 183, 207);
}
@media only screen and (max-width: 570px) {
  .row{
      width: 100%;
      display: flex;
      flex-direction: column;
  }
  .box{
      width: 95%;
  }
}
</style>