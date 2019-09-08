<template>
  <div>
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="col-lg-4">
          <div class="card">
            <form action="" method="POST" class="mt-3">
              <h4 class="card-title text-center">Build New Strategy</h4>

              <div class="strategyInput">
                <input v-model="typedValue" type="text" name="checklistItemInput" id="checklistItemInput" class="w-50">
                <button @click="addRule" class="btn btn-primary">Add Rule</button>
              </div>
              

              <div class="items mt-3">
                <div v-for="(rule, i) in rules" :key="rule" class="checkListItemDiv">
                  <p class="checkListItem">{{ rule }}</p>
                  <div class="x">&#10005;</div>
                  <input :id="i" type="hidden" name="checkListItemValue" :value="rule">
                </div>
              </div> 

              <button type="submit" class="btn btn-primary w-100 mt-3 mb-3 p-2">Add New Strategy</button>
            </form>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="table">
            <table class="table">
              <thead>
                  <tr>
                      <th>Row</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>Clark</td>
                      <td>Kent</td>
                      <td>clarkkent@mail.com</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>John</td>
                      <td>Carter</td>
                      <td>johncarter@mail.com</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>Peter</td>
                      <td>Parker</td>
                      <td>peterparker@mail.com</td>
                  </tr>            
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 

  export default {
    name: 'Strategy',
    data () {
      return {
        typedValue: '',
        rules: []
      }
    },
    methods: {
      addRule (event) {
        event.preventDefault();

        this.rules.push(this.typedValue);

        this.typedValue = '';
      }
    }
  }
</script>

<style scoped>
  form {
    color: #000;
  }

  .container {
    padding-top: 56px;
  }

  .strategyInput {
    display: flex;
    justify-content: space-around;
  }

  .checkListItemDiv {
    border-bottom: #e6e6e6 solid 1px;
    border-right: #e6e6e6 solid 1px;
    display: flex;
    justify-content: space-between;
  }

  .checkListItem {
    color: #000;
    font-size: 15px;
    width: 75%;
  }

  .x {
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding-right: 10px;
  }
</style>