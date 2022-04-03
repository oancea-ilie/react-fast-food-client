import { Buffer } from "buffer";

export class Api{

    api(path, method = 'GET', body= null, requiresAuth = false, credentials = null){

        let url = path;
    
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
        if(requiresAuth){
            const encodedCredentials=
            Buffer.from(`${credentials.username}:${credentials.password}`).toString('base64');
            options.headers['Authorization']= `Basic ${encodedCredentials}`;
        }
    
        return fetch( url, options);
    }

    // CUSTOMERS
    async login(user){
        try{
            const rez = await this.api('http://localhost:3005/api/customers/login','POST', user);
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
            const rez = await this.api('http://localhost:3005/api/customers', 'GET', null, true, {
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
            const rez = await this.api(`http://localhost:3005/api/customers/${id}`);

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
            const rez = await this.api(`http://localhost:3005/api/customers`, 'POST', newObj);

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

    async updateCustomer(newObj,id){
        
        try{
            const rez = await this.api(`http://localhost:3005/api/customers/${id}`, 'PUT', newObj);

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

    async deleteCustomer(id){
        
        try{
            const rez = await this.api(`http://localhost:3005/api/customers/${id}`, 'DELETE');

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

    async getAllProducts(){
        
        try{
            const rez = await this.api('http://localhost:3005/api/products');

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
            const rez = await this.api(`http://localhost:3005/api/products/${id}`);

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
            const rez = await this.api(`http://localhost:3005/api/products`, 'POST', newObj);

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
            const rez = await this.api(`http://localhost:3005/api/products/${id}`, 'PUT', newObj);

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
            const rez = await this.api(`http://localhost:3005/api/products/${id}`, 'DELETE');

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
            const rez = await this.api('http://localhost:3005/api/categories');

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
            const rez = await this.api(`http://localhost:3005/api/categories/${id}`);

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
            const rez = await this.api(`http://localhost:3005/api/categories`, 'POST', newObj);

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
            const rez = await this.api(`http://localhost:3005/api/categories/${id}`, 'PUT', newObj);

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
            const rez = await this.api(`http://localhost:3005/api/categories/${id}`, 'DELETE');

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
            const rez = await this.api('http://localhost:3005/api/orders');

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
            const rez = await this.api(`http://localhost:3005/api/orders/${id}`);

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
            const rez = await this.api(`http://localhost:3005/api/orders`, 'POST', newObj);

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
            const rez = await this.api(`http://localhost:3005/api/orders/${id}`, 'PUT', newObj);

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
            const rez = await this.api(`http://localhost:3005/api/orders/${id}`, 'DELETE');

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
    
}

export default Api;