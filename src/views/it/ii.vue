<script setup lang='ts'>

const route = useRoute()

const {data, route_name} = toRefs(reactive({
        //定义数组和对象
        route_name: route.name?.toString(),
        data:'',
 }))

const data2 = ref('')//定义普通类型

onMounted(() => {
    console.log(`进入${route_name.value}组件==========>`);
})
onBeforeUnmount(() => {
    console.log(`<==========离开${route_name.value}组件`);
})

</script>

<template>
    <main>
        <h1 class='hover:bg-sky-500 text-3xl flex justify-center items-center h-24 w-full cursor-pointer'>{{route_name}}页面</h1>
    </main>
</template>

<style lang='scss' scoped>
    
</style>