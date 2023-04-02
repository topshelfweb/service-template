import { Schema, model } from "mongoose"
import bcrypt from "bcrypt"

export const accountSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

accountSchema.methods.comparePassword = async function(candidatePassword) {
	try {
		return await bcrypt.compare(candidatePassword, this.password)
	} catch (error) {
		throw new Error(error)
	}
}

export default model("Account", accountSchema)
