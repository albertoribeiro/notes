import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { id: noteID } = req.query;

    try {
      await prisma.note.delete({
        where: { id: Number(noteID) },
      });
      res.status(200).json({ message: `Note was deleted!` });
    } catch (error) {
      console.log("Error deleting new note", error);
      res
        .status(500)
        .json({ message: `There was an issue with your request.` });
    }
  } else {
    if (req.method === "PUT") {
      const { title, content } = req.body
      const { id: noteID } = req.query;
  
      try {
        
        const note = await prisma.note.findFirst({
          where: { id: Number(noteID) },
        })
         
        const updatedNote = {...note, title, content}

        await prisma.note.update({
          data: updatedNote,
          where: { id: Number(noteID) },
        })

        res.status(200).json({ message: `Note was updated!` });
      } catch (error) {
        console.log("Error updating note", error);
        res
          .status(500)
          .json({ message: `There was an issue with your request.` });
      }
    } else {
      if (req.method === "GET") {
        const { id: noteID } = req.query;
    
        try {
          
          const note = await prisma.note.findFirst({
            where: { id: Number(noteID) },
          })
            
          res.status(200).json({ data:note });
        } catch (error) {
          console.log("Error finding note", error);
          res
            .status(500)
            .json({ message: `There was an issue with your request.` });
        }
      } else {
        res.status(405).end(`Method ${req.method} is not allowed`);
      }
    }
  }
}
