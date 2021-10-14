const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");

router.get("/all", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/addpizza", async (req, res) => {
  const pizza = req.body.pizza;
  try {
    const newpizza = new Pizza({
      name: pizza.name,
      image: pizza.image,
      description: pizza.description,
      variant: ["small", "medium", "large"],
      category: pizza.category,
      prices: [pizza.prices],
    });
    await newpizza.save();
    res.send("New pizza added successfully!");
  } catch (error) {
    return res.status(400).json({ error });
  }
});
module.exports = router;
