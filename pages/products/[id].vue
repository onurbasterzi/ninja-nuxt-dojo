<template>
    <div>

        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id;

//key id eklemek fetch değişimini anlar ve yeniden fetch yapar yoksa son datayı otomatik alır
const { data: product } = await useFetch(uri, { key: id })

//fatal true client hatası olursada hata sayfasına yönlendirir.
if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product Not Found', fatal: true });
}

definePageMeta({
    layout: 'products'
})


</script>

<style  scoped>

</style>