<template>
    <panel title="Search">
        <v-text-field
            label="Seminar Title..."
            v-model="searchValue"
        >
        </v-text-field>
    </panel>
</template>

<script>
    import Panel from '@/components/Panel'
    export default {
        data() {
            return {
                searchValue: ''
            }
        },
        watch: {
            searchValue(){
                const route = {
                    name: 'seminars'
                }

                if (this.searchValue !== ''){
                    route.query = {
                        search: this.searchValue
                    }
                }
                this.$router.push(route)
            },
            '$route.query.search': {
                immediate: true,
                handler(value){
                    this.searchValue = value
                }
            }
        },
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>
