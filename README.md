# POC-TS

<h2>This is my first Proof of Concept using TypeScript. It's a simple Express API with the basic CRUD operations. I really enjoyed working with TypeScript, although it was very painfull trying to configurate it for the first time. Hoping to get more and more confortable with it in the future!</h2>

<p>In this application there are six routes that the user can access. They are:</p>

<h4>
GET: "/cars" , to get all cars in the database.
</h4>



<h4>
POST: "/cars" , to post a car in the database.
Body: {
    "name": "911",
    "brand": "Porsche",
    "color": "#ffffff",
    "price": 1000000,
    "year": "2020"
  };
</h4>





<h4>
DELETE: "/cars/:id" , to delete a car in the database via params.
</h4>





<h4>
GET: "/cars/:id" , to get a car in the database via params.
</h4>




<h4>
PUT: "/cars/:id" , to update a car in the database via params.
Body:{
    "name": "911",
    "brand": "Porsche",
    "color": "#ffffff",
    "price": 1500000,
    "year": "2020"
  }
(updating the price of the car used as exemple in the post route)
</h4>





<h4>
GET: "/price" , to get an average of all prices in the database.
</h4>


