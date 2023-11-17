import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 

  if (req.method === 'GET') {
    console.log('GET');
    res.status(200).json({ message: `Hello World`});
  }else {
    if (req.method === 'POST') {
      const { title, content } = req.body
      
      try {    
        await prisma.note.create({data:{title, content}})
        res.status(201).json({ message: `Note was successfully created!`});
      } catch (error) {
        console.log("Error creating new note", error);
        res.status(500).json({message: `There was an issue with your request.`})
      };
    } else {
      res.status(405).end(`Method ${req.method} is not allowed`)
    }
  }
}
