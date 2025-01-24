<template>
  <div>
    <h1>Counter from About Page: {{ counter }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
const counter = useState('counter', () => 0)

const increment = () => {
  counter.value += 1
}
</script>
