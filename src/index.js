const express =require("express")

const cartController =require("./controllers/cart.controller.js")
const {register,login}=require("./controllers/register&login.controller")
const productController = require("./controllers/ProductController")

const app = express();

app.use(express.json())



app.use("/cartproduct",cartController)
app.use("/product1",productController)
app.use("/product2",productController)
app.use("/product3",productController)

app.post("/register",register)

app.post("/login",login)







module.exports=app;