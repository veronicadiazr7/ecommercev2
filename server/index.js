import express from "express";
import mysql from "mysql"; 
import cors from "cors";

const app = express();

const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"password",
    database:'products'
})

app.use(express.json());
app.use(cors());

//------------TEST GET REQUEST------------------------------
app.get("/products",(req,res)=>{
    res.json("Hello this is the server")
})

//---------------------ALL PRODUCTS--------------------------- 
// List all products as JSON
app.get("/productslist",(req,res)=>{
    const q= "SELECT * FROM products;"
    // console.log(products)
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

//---------------------ALL PRODUCTS SORT BY PRICE ASC--------------------------- 

app.get("/productslist/asc",(req,res)=>{
    const q= "SELECT * FROM products ORDER BY price ASC;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
//---------------------ALL PRODUCTS SORT BY PRICE DESC--------------------------- 
app.get("/productslist/desc",(req,res)=>{
    const q= "SELECT * FROM products ORDER BY price DESC;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

//---------------------SORT PRODUCTS BY CATEGORY--------------------------- 
app.get("/productslist/:category", (req, res) => {
    const category = req.params.category;
    // console.log(category)
    const q = `SELECT * FROM products WHERE category = '${category}' ORDER BY price ASC`;
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });

/*Example Link: http://localhost:8800/productslist/tops/0  */

  
//---------------- POST SUBSCRIBED EMAIL ----------------------
app.post ("/newsletter", (req,res)=>{
    const q= "INSERT INTO Newsletter_emails (`email`) VALUES (?)";
    const values =
    [req.body.email];
    
    db.query (q, [values],(err,data)=>{
            if (err) return res.json(err);
return res.json ("Email has been added succesfully.")
        })

    
})
// app.post("(req,res))
app.listen(8800,()=>{
    console.log('Connected to server')
})



//-------------------SORT PRODUCTS BY PRICE---------------------------------
/*
app.get("/productslist/priceasc/:category", (req, res) => {
    const category = req.params.category;
    const q = `SELECT * FROM products WHERE category = '${category}' ORDER BY price ASC;`
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });

  app.get("/productslist/pricedesc/:category", (req, res) => {
    const category = req.params.category;
    const q = `SELECT * FROM products WHERE category = '${category}' ORDER BY price DESC;`
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });
*/



/*//---------------------ALL PRODUCT SORT BY PRICE ASC--------------------------- 

app.get("/productslist/asc",(req,res)=>{
    const q= "SELECT * FROM products ORDER BY price ASC;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
//---------------------ALL PRODUCT SORT BY PRICE DESC--------------------------- 
app.get("/productslist/desc",(req,res)=>{
    const q= "SELECT * FROM products ORDER BY price DESC;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

//---------------------CATEGORY: TOPS---------------------------
//List Category: Tops in Order by Price  Ascending
app.get("/productslist/tops-asc",(req,res)=>{
    const q= "SELECT * FROM products WHERE category = 'Tops' ORDER BY price ASC;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
//List Category: Tops in Order by Price  Descending 
app.get("/productslist/tops-desc",(req,res)=>{
    const q= "SELECT * FROM products WHERE category = 'Tops' ORDER BY price DESC;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

//---------------------CATEGORY: BOTTOMS---------------------------
//List Category: Bottoms in Order by Price  Ascending
app.get("/productslist/bottoms-asc",(req,res)=>{
    const q= "SELECT * FROM products WHERE category = 'Bottoms' ORDER BY price ASC;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
//List Category: Bottoms in Order by Price  Descending 
app.get("/productslist/bottoms-desc",(req,res)=>{
    const q= "SELECT * FROM products WHERE category = 'Bottoms' ORDER BY price DESC;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

//---------------------CATEGORY: DRESSES---------------------------
//List Category: dresses in Order by Price  Ascending
app.get("/productslist/dresses-asc",(req,res)=>{
    const q= "SELECT * FROM products WHERE category = 'Dresses' ORDER BY price ASC;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
//List Category: dresses in Order by Price  Descending 
app.get("/productslist/dresses-desc",(req,res)=>{
    const q= "SELECT * FROM products WHERE category = 'Dresses' ORDER BY price DESC;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
 */