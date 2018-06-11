Vue.component('counter',{
    data: function() {
        return {
        count: 0
        }
    },
    template: `<div><button @click="count++">counter</button><h1> {{ count }} </h1></div>`
})