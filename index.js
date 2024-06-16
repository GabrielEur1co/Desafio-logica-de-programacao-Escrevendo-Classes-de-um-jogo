class hero { 
    constructor(name, age, typeChar){
        this.name = name
        this.age = age
        this.typeChar = typeChar 
        
    }

    atack() {
        let atack;

        switch (this.typeChar) {
            case ("Guerreiro"):

                atack = "Espada";
                
                break;
            case ("Mago"):

                atack = "Magia";
                
                break;    
            case ("Monge"):

                atack = "Artes Maciais";
                
                break;
            
            case ("Nija"):

                atack = "Shuriken";
                
                break;
            
            default :
                atack = "o campeão selecionado não possui atack"
        }

        console.log(` - O ${this.typeChar} atacou usando ${atack}`)
        
    }
}


const char1 = new hero ("NotheRx", 25, "Guerreiro") 
const char2 = new hero ("Astolfo", 203,"Mago")
const char3 = new hero ("Paladins", 87, "Monge")
const char4 = new hero ("Kennen", 44, "Ninja")

char1.atack()
char2.atack()
char3.atack()
char4.atack()