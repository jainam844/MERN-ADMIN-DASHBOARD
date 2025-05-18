import express from 'express'
import cors from 'cors'
import moongoose from 'mongoose'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import dotenv from 'dotenv'
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'
import { dataUser } from './data/data.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

const PORT = process.env.PORT || 5000

moongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
        User.InsertMany(dataUser, (err) => {
            if (err) {
                console.error('Error inserting data:', err)
            } else {
                console.log('Data inserted successfully')
            }
        })
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error)
    })