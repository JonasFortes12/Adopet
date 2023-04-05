import mongoose from "mongoose"

const password = 'ayGef6FP2oz7FwKU'

mongoose.connect(`mongodb+srv://jonascforte:${password}@adopetcluster.fapsf25.mongodb.net/?retryWrites=true&w=majority`)

let db = mongoose.connection

export default db