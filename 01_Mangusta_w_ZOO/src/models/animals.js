import mongoose from 'mongoose';

import { PAGE_SIZE } from '../constants/db';

const animalSchema = new mongoose.Schema({
  species: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  where: {
    required: true,
    type: String,
  },
  healthStatus: {
    type: String,
    enum: [
      'EXCELLENT',
      'GOOD',
      'MINOR',
      'MAJOR_ISSUES',
      'SEVERE_ISSUES',
      'DEGRADING',
      'RECOVERING',
      'TREATED',
    ],
  },
  origin: {
    required: true,
    type: String,
  },
  comments: {
    required: true,
    type: String,
  },
});

const Animal = mongoose.model('Animal', animalSchema);

export const addAnimal = async (animal) => {
  const animalInstance = new Animal(animal);
  await animalInstance.save();
  return animalInstance._id;
};

export const deleteAnimal = async (animalId) => {
  const result = await Animal.deleteOne({
    _id: animalId,
  }).exec();

  return result.deletedCount;
};

export const getAnimals = async (page) => {
  const count = await Animal.count().exec();
  const pageResults = await Animal.find()
    .limit(PAGE_SIZE)
    .skip(Number(page) * PAGE_SIZE)
    .lean()
    .exec();

  return {
    pages: Math.ceil(count / PAGE_SIZE),
    animals: pageResults,
  };
};
