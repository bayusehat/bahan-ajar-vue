<template>
    <h2>List Product</h2>
    <table class="table table-responsive table-striped table-bordered">
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Detail</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.detail }}</td>
                <td>
                    <router-link :to="{name: 'edit', params: { id: product.id }}" class="btn btn-sm btn-primary">Edit</router-link>
                    <button type="button" @click="deleteProduct(product.id)" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data() {
            return {
                products : []
            }
        },
        created(){
            this.axios
            .get(`http://localhost:8000/api/products`)
            .then(response => {
                this.products = response.data
            });
        },
        methods: {
            deleteProduct(id){
                this.axios
                .delete(`http://localhost:8000/products/${id}`)
                .then(response => {
                    let i = this.products.map(data => data.id).indexOf(id);
                    this.products.splice(i, 1)
                });
            }
        }
    }
</script>