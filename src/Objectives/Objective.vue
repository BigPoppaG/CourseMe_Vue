<template>
    <div class="objective" :class="objectiveClass">
        <article>
            <strong class="objective-name">{{ objective.name }}</strong>
            <div class="objective-detail" v-if="detail=='Details'">
                <p class="objective-description">{{ objective.description }}</p>
            </div>
            <div class="objective-detail" v-if="detail=='Assessment'">
                <div>
                    <span>Assess progress against this objective:</span>
                    <div>
                        <span>Got it</span> <br>
                        <span>Working on it</span> <br>
                        <span>Struggling</span> <br>
                    </div>
                    

                </div>
            </div>
            <div class="objective-buttons">
                <span style="display: inline-block;" class="glyphicon" :class="detail == 'Details' ? 'glyphicon-collapse-up' : 'glyphicon-collapse-down'" @click="clickDetails('Details')" data-toggle="tooltip"
                    data-placement="top" title="Show details"></span>
                <span style="display: inline-block;" class="glyphicon glyphicon-check" @click="clickDetails('Assessment')" data-toggle="tooltip"
                    data-placement="top" title="Assess progress"></span>
                <span style="display: inline-block;" class="glyphicon glyphicon-question-sign" @click="clickDetails('Question')" data-toggle="tooltip"
                    data-placement="top" title="Ask a question"></span>
                <span style="display: inline-block;" class="glyphicon glyphicon-education" @click="clickDetails('FindResources')" data-toggle="tooltip"
                    data-placement="top" title="Learn about this"></span>
                <span style="display: inline-block;" class="glyphicon glyphicon-hourglass" @click="clickDetails('FindAssessment')" data-toggle="tooltip"
                    data-placement="top" title="Take a test"></span>
                <span style="display: inline-block;" class="glyphicon glyphicon-paperclip" @click="clickDetails('AttachResources')" data-toggle="tooltip"
                    data-placement="top" title="Attach a resource"></span>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                detail: "None"
            }
        },
        methods: {
            clickDetails(detailType) {
                (this.detail == detailType) ? this.detail = "None" : this.detail = detailType
            }
        },
        props: {
            objective: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                default: 0
            }
        },
        computed: {
            objectiveClass: function () {
                return {
                    'objective-completed': this.objective.assessment && this.objective.assessment == 2,
                    'objective-progress': this.objective.assessment && this.objective.assessment == 1,
                    'objective-none': !this.objective.assessment || this.objective.assessment == 0,
                    'objective-warning': this.objective.assessment && this.objective.assessment == -1
                }
            }
        }
    }
</script>

<style>
    .objective {
        background-color: light grey;
        border-style: ridge;
        border-radius: 10px;
        width: 300px;
        padding: 5px;
        padding-top: 3px;        
        padding-bottom: 3px;
        text-align: left;        
    } 

    .objective-completed {
        border: 5px solid limegreen;
    }

    .objective-progress {
        border: 5px solid cornflowerblue;
    }
    .objective-warning {
        border: 5px solid coral;
    }
    .objective-none {
        border: 5px solid grey;
    }
    .objective-name {
        padding-bottom: 2px;
        margin-bottom: 2px;
        font-size: 16px;
        font-weight: 300;
        vertical-align: top;
        display: block;
        border-bottom: 1px solid grey;
    }

    .objective-detail-toggle {
        display: inline-block;
    }

    .objective-buttons {
        display: block;
        padding-top: 1px;
        padding-bottom: 1px;
    }

    .objective-detail {
        display: block;
        font-size: 12px;
        font-weight: 200;        
    }

    .objective-description {
        text-align: left;
        display: block;
        margin: 0;
        margin-top: 3px;
    }
    
</style>