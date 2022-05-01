import { Buffer } from "buffer";

export class Api{

    api(path, method = 'GET', body= null, token = null){
    
        const options={
            method,
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            }
        };
    
        if(body !=null){
            options.body = JSON.stringify(body);
        }
    
        // pentru perimisuni in functie de utilizator
        if(token){
            options.headers['Authorization']= `Bearer ${token}`;
        }
    
        return fetch( path, options);
    }

    // CUSTOMERS
    async login(user){
        try{
            const rez = await this.api('/api/customers/login','POST', user);
            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getAllCusotmers(user){
        
        try{
            const rez = await this.api('/api/customers', 'GET', null, true, {
                username: user.email,
                password: user.password
            });

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getCustomerByID(id){
        
        try{
            const rez = await this.api(`/api/customers/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async createCustomer(newObj){
        
        try{
            const rez = await this.api(`/api/customers`, 'POST', newObj);

            if(rez.status === 201){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async updateCustomer(newObj,id){
        
        try{
            const rez = await this.api(`/api/customers/${id}`, 'PUT', newObj);

            if(rez.status === 204){
                return 'update success';
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async deleteCustomer(id){
        
        try{
            const rez = await this.api(`/api/customers/${id}`, 'DELETE');

            if(rez.status === 204){
                return "delete success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }
    
    // PRODUCTS

    async getAllProducts(token){
        
        try{
            const rez = await this.api('/api/products');
            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getProductByID(id){
        
        try{
            const rez = await this.api(`/api/products/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async createProduct(newObj){
        
        try{
            const rez = await this.api(`/api/products`, 'POST', newObj);

            if(rez.status === 204){
                return "create success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async updateProduct(newObj,id){
        
        try{
            const rez = await this.api(`/api/products/${id}`, 'PUT', newObj);

            if(rez.status === 204){
                return "update success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async deleteProduct(id){
        
        try{
            const rez = await this.api(`/api/products/${id}`, 'DELETE');

            if(rez.status === 204){
                return "delete success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    // CATEGORIES

    async getAllCategories(){
        
        try{
            const rez = await this.api('/api/categories');

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getCategoryByID(id){
        
        try{
            const rez = await this.api(`/api/categories/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async createCategory(newObj){
        
        try{
            const rez = await this.api(`/api/categories`, 'POST', newObj);

            if(rez.status === 204){
                return "create success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async updateCategory(newObj,id){
        
        try{
            const rez = await this.api(`/api/categories/${id}`, 'PUT', newObj);

            if(rez.status === 204){
                return "update success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async deleteCategory(id){
        
        try{
            const rez = await this.api(`/api/categories/${id}`, 'DELETE');

            if(rez.status === 204){
                return "delete success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    // ORDERS

    async getAllOrders(){
        
        try{
            const rez = await this.api('/api/orders');

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getOrderByID(id){
        
        try{
            const rez = await this.api(`/api/orders/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async createOrder(newObj){
        
        try{
            const rez = await this.api(`/api/orders`, 'POST', newObj);

            if(rez.status === 204){
                return "create success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async updateOrder(newObj,id){
        
        try{
            const rez = await this.api(`/api/orders/${id}`, 'PUT', newObj);

            if(rez.status === 204){
                return "update success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async deleteOrder(id){
        
        try{
            const rez = await this.api(`/api/orders/${id}`, 'DELETE');

            if(rez.status === 204){
                return "delete success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    // Product Categories

    async getAllProductCategories(){
    
        try{
            const rez = await this.api('/api/product-categories');

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getProductCategoriesByID(id){
        
        try{
            const rez = await this.api(`/api/product-categories/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async createProductCategory(newObj){
        
        try{
            const rez = await this.api(`/api/product-categories`, 'POST', newObj);

            if(rez.status === 204){
                return "create success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }
    
    async updateProductCategory(newObj,id){
        
        try{
            const rez = await this.api(`/api/product-categories/${id}`, 'PUT', newObj);

            if(rez.status === 204){
                return "update success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }
    
    async deleteProductCategory(id){
        
        try{
            const rez = await this.api(`/api/product-categories/${id}`, 'DELETE');

            if(rez.status === 204){
                return "delete success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    // Order Details

    async getAllOrderDetailsFiltred(id){
    
        try{
            const rez = await this.api(`/api/product-categories/join-all/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getAllOrderDetails(){
    
        try{
            const rez = await this.api('/api/orders-details');

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getOrderDetailByID(id){
        
        try{
            const rez = await this.api(`/api/orders-details/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async createOrderDetail(newObj){
        
        try{
            const rez = await this.api(`/api/orders-details`, 'POST', newObj);

            if(rez.status === 204){
                return "create success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }
    
    async updateOrderDetail(newObj,id){
        
        try{
            const rez = await this.api(`/api/orders-details/${id}`, 'PUT', newObj);

            if(rez.status === 204){
                return "update success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }
    
    async deleteOrderDetail(id){
        
        try{
            const rez = await this.api(`/api/orders-details/${id}`, 'DELETE');

            if(rez.status === 204){
                return "delete success";
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }


    

    async getAllImages(){
        
        try{
            const rez = await this.api('/api/images');

            if(rez.status === 200){
                return rez.json();
            }else{
                let data = await rez.json();
                return data.error.message;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }
}

export default Api;