import mongoose from 'mongoose'

export const connect = (url = `mongodb://localhost:27017/api-sample-db`, opts = {}) => {
    return mongoose.connect(
        url,
        { ...opts, useNewUrlParser: true }
    )
}