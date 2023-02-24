import express from "express";

const router = express.Router();

//router.('vew engine', "ejs");


router.get('/', (req, res)=>{
    res.send("user list");
})

router.get('/new', (req, res)=>{

    res.render("users/new", {firstName : 'Test'});

})

router.post('/',(req,res)=>{
    res.send('Ceate User');
})

router
    .route("/:id")
    .get((req, res)=>{
        console.log(req.user);
        res.send(`Get user with id ${req.params.id}`);
    })
    .put((req,res)=>{
        res.send(`Update user with id ${req.params.id}`);
    })
    .delete((req,res)=>{
        res.send(`Delete Users with id ${req.params.id}`);
    })

const users = [{name:'dfsf'},{name:'gnkdfj'}];



router.param("id", (req, res, next, id )=>{
    req.user = users [id]
    //console.log(id);
    next();
})

export default router