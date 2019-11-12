<template>
  <div>
    <section class="my-strategies">
      <div class="container">
        <div class="d-flex justify-content-around">
          <div class="square">
            <div class="content">
              CONTENT
            </div>
          </div>

          <div class="square">
            <div class="content">
              CONTENT
            </div>
          </div>

          <div class="square">
            <div class="content">
              CONTENT
            </div>
          </div>

          <div class="square">
            <div class="content">
              CONTENT
            </div>
          </div>

          <div class="square">
            <div class="content">
              CONTENT
            </div>
          </div>
        </div>
      </div>

      <!-- Add Button -->
      <button type="button" class="btn btn-primary btn-circle btn-xl" @click="loadNewStrategy = !loadNewStrategy">&#43;</button>

      <!-- Add Strategy Modal -->
      <NewStrategyForm v-if="this.loadNewStrategy" />

    </section>
  </div>
</template>

<script>
  import NewStrategyForm from './global/NewStrategyForm';
 

  export default {
    name: 'Strategy',
    components: {
      NewStrategyForm
    },
    data () {
      return {
        loadNewStrategy: false
      }
    }
  }
</script>

<style scoped>
  .my-strategies {
    min-height: 100vh;
    padding-top: 106px;
  }

  .square-container {
    display: flex;
    flex-wrap: wrap;
  }

  .square {
    position: relative;
    flex-basis: calc(33.333% - 10px);
    margin: 15px;
    border: 1px solid;
    box-sizing: border-box;
  }

  .square::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .square .content {
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
  }

 .btn-circle.btn-xl {
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    border-radius: 35px;
    font-size: 24px;
    line-height: 1.33;
}

.btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 24px;
    line-height: 1.42857;
    position: absolute;
    bottom: 50px;
    right: 50px;
}

</style>