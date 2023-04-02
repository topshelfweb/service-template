import mongoose from "mongoose"
const { MONGO_USER, MONGO_PASS, MONGO_URI, MONGO_DB } = process.env

async function main() {
	await mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_URI}/${MONGO_DB}?retryWrites=true&w=majority`)
	console.info("MongoDB connection established.")
}

main().catch(err => console.error(err))
