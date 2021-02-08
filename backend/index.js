var mongoose = require("mongoose");
var express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var jsonParser = bodyParser.json();

const app = express();
app.use(urlencodedParser);
app.use(jsonParser);

/**
 * 
 */
mongoose.connect("mongodb://localhost/XMeme", { useNewUrlParser: true });
app.use(cors());
app.options("*", cors());

const memesSchema = require('./models/memes');


app.get('/memes', (req,res)=>{
    console.log(`Get /memes is called`)
    try {
        let topHunderedMemes = 
        memesSchema.find().sort({_id:-1}).limit(100)
        .then((memes)=>{
            
           return  res.send(memes);
        })
    
       
        
    } catch (error) {
        return res.status(400).json({
            success:false
        })  
    }


})

app.get('/memes/:id', (req,res)=>{
    try {
        memesSchema.findById((req.params.id), (err,db_res)=>{
            if(err){
                console.log(err);
            } else{
                return res.status(200).json({
                    id:db_res.id,
                    name:db_res.owner,
                    url:db_res.url,
                    caption:db_res.caption
                })
            }

        })
    } catch (error) {
        
    }
})
app.post('/memes', (req,res)=>{

    try {
    console.log(`POST Request to /memes received`);
    console.log(req.body);
    const  meme = new memesSchema(
        {
            owner:req.body.name,
            caption:req.body.caption,
            url:req.body.url,
        }

    )

    meme.save((err, newMeme)=>{
        if(err){
            return res.status(400).json({
                success:false
            })
        } else{
            res.status(200).json({
                id:newMeme.id
            })
        }
})
        
    } catch (error) {
        return res.status(400).json({
            success:false
        })  
    }
    

})

app.listen(8080, () => {
    console.log("Live server has started");
  });
  

