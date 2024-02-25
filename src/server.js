import { createServer, Model } from "miragejs"

createServer({
    models: {
        cars: Model,
        users: Model
    },
    seeds(server){
        server.create('car',{id:'1',name:"ferrari 488 pista",price:"300.000",
    description:"The Ferrari 488 Pista can punch out 720 cv at 8000 rpm, giving it the best speciﬁc power output in its class at 185 cv/l, while torque is higher at all engine speeds, peaking at 770 Nm (10 Nm more than the 488 GTB).",
img:'https://www.metrosport.gr/portal-img/post-large/235/ferrari1.jpg', hostId:'123',category:'sports car' ,type:'sports car'})
server.create('car',{id:'2',name:"ferrari laferrari",price:"1.000.000",
description:"It boasts the most extreme performance ever achieved by a Ferrari production car and features the most advanced and innovative technical solutions which will, in the future, filter down to the rest of the Ferrari range. The LaFerrari is Ferrari’s first ever production car to be equipped with the F1-derived hybrid solution – the HY-KERS system – which combines an electric motor producing over 150 CV with the most powerful incarnation yet of Ferrari’s classic V12, with 800 CV at 9000 rpm.",
img:'https://www.drive.gr/sites/default/files/styles/1230x810/public/node-files/photos/news/2023/12/ferrari_laferrari_aperta_1.jpg?itok=KMBcGSPY', hostId:'123',category:'sports car'})
server.create('car',{id:'3',name:"ferrari enzo",price:"1.000.000",
description:"Over the years Ferrari has introduced a series of supercars which have represented the very pinnacle of the company’s technological achievements transferred to its road cars. These include the GTO, F40 and F50. This family of extreme performance cars was joined in 2002 by the Enzo Ferrari, which was the expression of the latest Formula 1 technology and know-how.",
img:'https://www.motortrend.com/uploads/sites/11/2020/06/2004-Ferrari-Enzo-RM-Sothebys-2.jpg?fit=around%7C875:492', hostId:'345',category:'sports car', type:'legacy'})
server.create('car',{id:'4',name:"ferrari 812 superfast",price:"500.000",
description:"The first and most difficult challenge Ferrari always faces when it decides to develop a new model is to push the boundaries of its own achievements yet again. This challenge is made all the tougher when the task at hand involves designing a new 12-cylinder engine, the power unit that hailed the start of the glorious Prancing Horse story 70 years ago in 1947.",
img:'https://media.evo.co.uk/image/private/s--RSUFvqEa--/v1627924068/evo/2021/08/Novitec%20NLargo%20Ferrari%20812%20GTS%20new.jpg', hostId:'345',category:'sports car', type:'front engine'})
server.create('car',{id:'5',name:"ferrari sf90",price:"600.000",
description:"The car’s name encapsulates the true significance of all that has been achieved in terms of performance. The reference to the 90th anniversary of the foundation of Scuderia Ferrari underscores the strong link that has always existed between Ferrari’s track and road cars. A brilliant encapsulation of the most advanced technologies developed in Maranello, the SF90 Stradale is also the perfect demonstration of how Ferrari immediately transitions the knowledge and skills it acquires in competition to its production cars. ",
img:'https://www.carandmotor.gr/sites/default/files/styles/horizontal_rectangle/public/2022-07/novitec-ferrari-sf90-stradale-09.jpg?itok=0vlZdU3L', hostId:'123',category:'sports car', type:'sports car'})
server.create('car',{id:'6',name:"ferrari daytona",price:"3.500.000",
description:"At the 1967 24 Hours of Daytona, Ferrari took the top three places in the first round of the International World Sports Car Championship. The 330 P3/4, 330 P4 and 412 P that famously shot past the chequered flag side by side perfectly encapsulated the spirit of the sports prototypes of the 1960s, a decade now considered the golden era of closed wheel racing. The Ferrari Daytona SP3, the second car to join the limited edition Icona series, pays homage to the mid-rear-engined Ferrari V12 sports prototypes that earned the marque its unparalleled motor sport status.",
img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyevcT_uWJXgdb-LH4K-zVrDGZkUTt9ELTEA&usqp=CAU', hostId:'123',category:'sports car',type:'sports car'})
server.create("user", { id: "123", email: "makislaspas@gmail.com", password: "Benz1926", name: "Thomas" })
    },

    routes(){
        this.namespace='api'
        this.login=false
        this.passthrough("https://firestore.googleapis.com/**")
       // this.timing=2000
        this.get('/cars',(schema, request)=>{
            return schema.cars.all()
        })
        this.get("/cars/:id", (schema, request) => {
            const id = request.params.id
            return schema.cars.find(id)
        })
        this.get("/host/listed_cars", (schema, request) => {
            // Hard-code the hostId for now
            return schema.cars.where({ hostId: "123" })
        })
        this.get("/host", (schema, request) => {
            // Hard-code the hostId for now
            return schema.cars.where({ hostId: "123" })
        })

        this.get("/host/listed_cars/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id;
            return schema.cars.findBy({ id, hostId: "123" })
        })
        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })
        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😇
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                throw new Error("No user with those credentials found!")
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})