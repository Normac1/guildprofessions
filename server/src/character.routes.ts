import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";
 
export const characterRouter = express.Router();
characterRouter.use(express.json());
 
characterRouter.get("/", async (_req, res) => {
   try {
       console.log("Getting all Character data")
       const characters = await collections.characters.find({}).toArray();
       res.status(200).send(characters);
   } catch (error) {
       res.status(500).send(error.message);
   }
});

// characterRouter.get("/:name", async (_req, res) => {

//     try {
//         const id = _req?.params?.name;
//         // const query = { name: new String(id) };

//         // console.log("Getting all Character data")
//         const characters = await collections.characters.find({name: id}).toArray();
//         res.status(200).send(characters);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
//  });

characterRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const character = await collections.characters.findOne(query);
        
        if (character) {
            res.status(200).send(character);
        } else {
            res.status(404).send(`Failed to find a character: ID ${id}`);
        }
  
    } catch (error) {
        res.status(404).send(`Failed to find a character: ID ${req?.params?.id}`);
    }
 });

 characterRouter.get("/:name", async (req, res) => {
    const id = req?.params?.name;
    try {
        const character = await collections.characters.findOne({name: id});
        if (character) {
            res.status(200).send(character);
        } else {
            res.status(404).send(`Failed to find a character: Name: ${name}`);
        }
  
    } catch (error) {
        res.status(404).send(`Failed to find a character: Name: ${req?.params?.name}`);
    }
 });

 characterRouter.post("/", async (req, res) => {
    try {
        const character = req.body;
        const result = await collections.characters.insertOne(character);
  
        if (result.acknowledged) {
            res.status(201).send(`Created a new character: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new character.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
 });

 characterRouter.put("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const character = req.body;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.characters.updateOne(query, { $set: character });
  
        if (result && result.matchedCount) {
            res.status(200).send(`Updated an character: ID ${id}.`);
        } else if (!result.matchedCount) {
            res.status(404).send(`Failed to find an character: ID ${id}`);
        } else {
            res.status(304).send(`Failed to update an character: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
 });

 characterRouter.delete("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.characters.deleteOne(query);
  
        if (result && result.deletedCount) {
            res.status(202).send(`Removed an character: ID ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove an character: ID ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Failed to find an character: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
 });