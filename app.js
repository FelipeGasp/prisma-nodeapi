import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client'
import cors from 'cors';

const prisma = new PrismaClient();  


const app = express();
app.use(express.json());
app.use(cors())

app.get("/tickets",async (request, response) =>{
    const allTickets = await prisma.ticket.findMany()
    
   response.status(200).json(allTickets)

});

app.post("/tickets", async(request, response) => {
    await prisma.ticket.create({
        data:{
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            email: request.body.email,
            gender: request.body.gender,
            subject: request.body.subject,  
            file_attached: request.body.file_attached,
            about: request.body.about,
            phone_number: request.body.phone_number
        }
    })

    
    
    response.status(201).json(request.body)
})

app.put("/tickets/:id", async(request, response) => {
    const id = parseInt(request.params.id)


    await prisma.ticket.update({
        where:{
            id: id
        },
        data:{
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            email: request.body.email,
            gender: request.body.gender,
            subject: request.body.subject,  
            file_attached: request.body.file_attached,
            about: request.body.about,
            phone_number: request.body.phone_number
        }
    })

    
    
    response.status(201).json(request.body)
})


app.delete("/tickets/:id", async(request, response) => {
    const id = parseInt(request.params.id)
    await prisma.ticket.delete({
        where: {id}
    })
    response.status(200).json({message: "Ticket removido!"})
    
})

app.listen(8001);



