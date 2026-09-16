
const dotenv=require('dotenv')
dotenv.config()

const app=require('./src/app.js')
const main=require('./config/db.js')
main()
const port=3000

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
