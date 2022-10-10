import mongoose from "mongoose"
import config from "config"

async function connect() {
    const dbUri = config.get<string>("dbUri")

    try {

        await mongoose.connect(dbUri)
        console.log("Conectou ao banco de dados!");
        
    } catch (error) {
        console.log("Não foi possível conectar");
        console.log(`Erro: ${error}`);
    }
}

export default connect;