
<template>
  <h2>{{ customTitle }} </h2>
  <p data-testid="counter">{{ counter}}</p>
  <p>{{ counter }} <sup>9</sup> = {{ squareCounter }}</p>
  <div class="class- mhv">
    <button v-on:click="increment()">+1</button>
    <button data-testid="decrease" v-on:click="decrease()">-1</button>
  </div>
</template>





<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            validator( value ) {
                return value >=0
            }
           // required: true
        },
    },
  // name: 'patito'
  data() {
    //la data es una funcion que tiene que regresar un objeto, //la data se crea el objeto que definimos de una manera reactiva
    return {
      //lo que este dentro de aqui es reactivo, que significa que vue estara pendiente de cualquier cambio que sufra y reaccionara acorde
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
    decrease() {
      this.counter --;
    },
    increment(){
        this.counter = this.counter + 1;
    }

  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
    customTitle() {
        return this.title || 'Counter'
    }
  },
};
</script>




<style>
button {
  background-color: #64b687;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
 background-color: #5aa ;
 transition: 0.3s ease-in-out;
}


</style>
