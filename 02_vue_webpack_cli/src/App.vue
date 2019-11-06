
<template>
<!-- 컴퍼넌트 최상위에는 반드시 1개의 요소만 존재해야 한다. -->
  <div>
    <TodoList category="취업준비" />
    <TodoList category="ssafy" />
    <TodoList category="기타" />
  </div>
</template> 

<script>
import TodoList from './components/TodoList.vue'

export default {
  components:{
    TodoList
  }
}
</script>

<style>
</style>