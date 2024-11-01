const data10 = require("./data10");

const fs = require("fs");
const { type } = require("os");

const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    fname: {
      describe: "this is the first name desc in add command",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name desc in add command",
      demandOption: true,
      type: "string",
    },
    city: {
      describe: "this is the city desc in add command",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "this is the age desc in add command",
      demandOption: true,
      type: "string",
    },
    id: {
      describe: "this is the id desc in add command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.addPerson(x.id, x.fname, x.lname, x.city, x.age);
  },
});

yargs.command({
  command: "deleteonedata",
  describe: "to delete an item",
  builder: {
    id: {
      describe: "this is id desc in deleteonedata command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.deleteOneData(x.id);
  },
});

yargs.command({
  command: "deletealldata",
  describe: "to delete an items",

  handler: () => {
    data10.deleteAllData();
  },
});

yargs.command({
  command: "readforperson",
  describe: "to read an item",
  builder: {
    id: {
      describe: "this is id desc in readforperson command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.readDataForSpecificPerson(x.id);
  },
});

yargs.command({
  command: "readforall",
  describe: "to read an items",

  handler: () => {
    data10.readDataForAllPerson();
  },
});

yargs.parse();
