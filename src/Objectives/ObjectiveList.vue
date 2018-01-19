<template>
    <div class="ObjectiveList">
        <div v-for="(objective, index) in objectiveList">
            <app-objective :objective="objective" :key="'objective_' + index"><i>Loading</i></app-objective>
            <br>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                objectiveList: [
                    {id: 1,
                    name: "Take over the world",
                    description: "Start big and grow",
                    created_by: 1,
                    assessment: 1
                    },
                    {id: 24,
                    name: "Represent relationships between two variables on a graph",
                    description: "Use the points on the graph as the loci of points that satisfy the relationship",
                    created_by: 1,
                    assessment: 0
                    },            
                    {id: 7,
                    name: "Objective 7",
                    created_by: 1,
                    assessment: 2
                    },
                    {id: 9,
                    name: "Objective 9",
                    created_by: 1,
                    assessment: -1
                    }                                        
                ]
            }
        }
    }
</script>

<style scoped>

</style>