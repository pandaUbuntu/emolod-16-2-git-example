const user = {
    name: "John",
    age: 30,
    email: "asd@asd.aasd",
    password: "12345678",
    birthDate: new Date("1990-01-01"),
    role: "user",
    agree: true
}

const product = {
    name: "Product 1",
    price: 100,
    description: "This is a product",
    category: "Category 1",
    inStock: true,
    tags: ["tag1", "tag2", "tag3"],
    dimensions: {
        width: 10,  
        height: 20,
        depth: 5
    }
}

const shortProduct = {
    name: "Product 2",
    price: 200,
    inStock: false
}


const numbers = [1, 2, 3, 4, 5];

const mixedArray = [1, "two", true, null, undefined, { key: "value" }, [1, 2, 3]];

const products = [
    {
        name: "Headphones",
        price: 7680,
        discount: 10,
        quantity: 12
    },
    {
        name: "TV",
        price: 12345,
        discount: 10,
        quantity: 12
    },
    {
        name: "Smartphone",
        price:  67890,
        discount: 15,
        quantity: 0
    },
    {
        name: "Laptop",
        price:  54321,
        discount: 0,
        quantity: 4
    }
];

const names = ["John", "Jane", "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah"];

const namesUl = document.getElementById("namesList");
const addNameButton = document.getElementById("addNameButton");

addNameButton.onclick = () => {
    names.forEach((name) => {

        const li = document.createElement("li");
        li.textContent = name;
        namesUl.appendChild(li);
    });
}

const productsUl = document.getElementById("productsList");
const addProductButton = document.getElementById("addProductButton");

addProductButton.onclick = () => {
    products.forEach((product) => {
        const container = document.createElement("div");
        container.classList.add("product-li");

        if(product.quantity === 0) {
            container.classList.add("product-li-out-of-stock");
        } else {
            container.classList.add("product-li-in-stock");
        }

        let discountedPrice = 0;
        if(product.discount > 0) {
            discountedPrice = product.price - (product.price * product.discount / 100);
        }

        const nameDiv = document.createElement("div");
        nameDiv.textContent = product.name;
        nameDiv.style.fontWeight = "bold";

        
        const priceDiv = document.createElement("div");
        if(product.discount > 0) {
            priceDiv.innerHTML = `<span class="discounted-price">$${product.price}</span>  <span>$${discountedPrice}</span>`;
        } else {
            priceDiv.innerHTML = `<span>$${product.price}</span>`;
        }

        if(product.quantity === 0) {
            priceDiv.innerHTML += `<span class="out-of-stock">Out of stock</span>`;
        }
        
        container.appendChild(nameDiv);
        container.appendChild(priceDiv);

        productsUl.appendChild(container);
    });
}

// for, while, do while -  forEach, map, filter, reduce

