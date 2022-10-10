const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

export default {
    port: 3000,
    
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.rb2karn.mongodb.net/?retryWrites=true&w=majority`
}