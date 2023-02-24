import AllProduct from './components/Allproduct.vue';
import CreateProduct from './components/Createproduct.vue';
import EditProduct from './components/Editproduct.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    }
];