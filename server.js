//Express Server 


if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}



//process, environment keys
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY


console.log(stripeSecretKey, stripePublicKey)


//requiring express into a express variable
const express = require('express')
//express function creates a sever 
const app = express()

//json reading library
fs = require('fs')



//view engine allows to embed server side code in the front end html pages
app.set('view engine' , 'ejs')
//app front end needs to be located as a static folder: now server shows the website
app.use(express.static('public'))



app.get('/store', function(req, res){
    //read the items json file, with an error function just in case
    fs.readFile('items.json', function(error, data){
        if(error){
            //internet server error then ends the response
            res.status(500).end()
        } else {
            //if no error render
            //ejs store so we can use the numbers from the server in the html
            //must save as an ejs to template
            res.render('store.ejs', {
                // stripePublicKey: stripePublicKey,

                //get the jason info and send it to the page
                // items: JSON.parse( data )
            })
        }
    })
})



//listen in on a port 
app.listen(3000)



