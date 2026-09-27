require('dotenv').config();
const express=require('express');const cors=require('cors');const helmet=require('helmet');const mongoose=require('mongoose');
const app=express();app.use(helmet());app.use(cors());app.use(express.json());
app.get('/api/health',(req,res)=>res.json({status:'ok',service:'Job Finder API'}));
app.use('/api/jobs',require('./src/routes/jobs.routes'));
const port=process.env.API_PORT||5000;
if(process.env.DATABASE_URL)mongoose.connect(process.env.DATABASE_URL).then(()=>console.log('MongoDB connected')).catch(console.error);
app.listen(port,()=>console.log(`API listening on http://localhost:${port}`));
module.exports=app;
