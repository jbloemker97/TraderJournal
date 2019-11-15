<template>
    <div class="modal">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <h2 class="w-100 text-center pt-2 pb-2">Strategy Name</h2>
                    <input type="hidden" name="strategyHeader" value="">
                    <div class="row h-100">
                        <div class="col-lg-5 form">
                            <form action="" method="POST" id="newStrategy" @submit="addRule">
                                <select name="ruleType" class="formStyle" id="ruleType">
                                    <option value="entry">Entry Rule</option>
                                    <option value="exit">Exit Rule</option>
                                    <option value="manage">Manage Rule</option>
                                </select>

                                <input type="text" name="rule" class="formStyle" id="rule" placeholder="Trade Rule.." required />
                                
                                <button type="submit" class="btn btn-primary">Add Rule</button>
                            </form>
                        </div>

                        <div class="col-lg-7 overflow">
                            <h5 v-if="rules.entry.length !== 0">Entry CheckList</h5>
                            <ul class="list-group list-group-flush" v-if="rules.entry.length !== 0">
                                <li class="list-group-item" v-for="item in rules.entry" :key="item">
                                    {{ item }}
                                </li>
                            </ul>

                            <h5 class="mt-5" v-if="rules.exit.length !== 0">Exit CheckList</h5>
                            <ul class="list-group list-group-flush" v-if="rules.exit.length !== 0">
                                <li class="list-group-item" v-for="item in rules.exit" :key="item">
                                    {{ item }}
                                </li>
                            </ul>

                            <h5 class="mt-5" v-if="rules.manage.length !== 0">Manage CheckList</h5>
                            <ul class="list-group list-group-flush" v-if="rules.manage.length !== 0">
                                <li class="list-group-item" v-for="item in rules.manage" :key="item">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewStrategyForm',
        data () {
            return {
                rules: {
                    entry: [],
                    exit: [],
                    manage: [],
                }
            }
        },
        methods: {
            addRule (event) {
                event.preventDefault();

                let ruleType = document.querySelector('#ruleType');
                let rule = document.querySelector('#rule');
                let form = document.querySelector('#newStrategy');

                this.rules[ruleType.value].push(rule.value);

                form.reset();
            }
        }
    }
</script>

<style scoped>
    .modal {
        display: block !important;
    }

    .modal-body {
        height: 100% !important;
    }

    .modal-content {
        height: 70vh;   
    }
    
    .btn-primary {
        background-color: #006DB0 !important;
        color: #fff !important;
    }

    .formStyle { 
        padding: 20px; 
        margin-bottom: 20px; 
        border-bottom-width: 1px; 
        border-bottom-style: solid; 
        border-bottom-color: #006DB0; 
        border-top-style: none; 
        border-right-style: none; 
        border-left-style: none; 
        font-size: 1em;
        color: #000;
        width: 100%;
    }

    .form {
        height: 90%;
    }

    /*To remove the outline that appears on clicking the input textbox*/
    .formStyle:focus {
        outline: none;
    }

    ul li:first-child {
        border-top: none;
    }

    .overflow {
        height: 90%;
        overflow-y: scroll;
    }
</style>