const { validationResult, matchedData } = require("express-validator");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Post logic
const postEvent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const data = matchedData(req);
  const { name, occupation } = data;

  try {
    const newEvent = await prisma.events.create({
      data: {
        name,
        occupation,
      },
    });
    res.status(201).json(newEvent);
  } catch (err) {
    console.error("Error creating event:", err);
    res.status(500).json({ message: "Error creating event" });
  }
};

// Put logic
const putEvent = async (req, res) => {
  const parsedId = parseInt(req.params.id);
  const { body } = req;
  try {
    const updatedEvent = await prisma.events.update({
      where: { id: parsedId },
      data: body,
    });
    res.json(updatedEvent);
  } catch (err) {
    console.error("Error updating event:", err);
    res.status(500).json({ message: "Error updating event" });
  }
};

// Patch Logic
const patchEvent = async (req, res) => {
  const parsedId = parseInt(req.params.id);
  const { body } = req;

  try {
    const updatedEvent = await prisma.events.update({
      where: { id: parsedId },
      data: body,
    });
    res.json(updatedEvent);
  } catch (err) {
    console.error("Error updating event:", err);
    res.status(500).json({ message: "Error updating event" });
  }
};

// Delete Logic
const deleteEvent = async (req, res) => {
  const parsedId = parseInt(req.params.id);

  try {
    await prisma.events.delete({
      where: { id: parsedId },
    });
    res.sendStatus(200);
  } catch (err) {
    console.error("Error deleting event:", err);
    res.status(500).json({ message: "Error deleting event" });
  }
};

// Get Logic
const getEvents = async (req, res) => {
  try {
    const events = await prisma.events.findMany();
    res.json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ message: "Error fetching events" });
  }
};

module.exports = { postEvent, putEvent, patchEvent, deleteEvent, getEvents };
