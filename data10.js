const fs = require("fs");

const addPerson = (id, fname, lname, city, age) => {
  const allDate = loadInfo();

  const duplicatedData = allDate.filter((obj) => {
    return obj.id === id;
  });
  const dataCount = allDate.length;

  if (dataCount >= 10) {
    console.log("PLEASE STOP ON ENTER DATA");
  } else {
    if (duplicatedData.length == 0) {
      allDate.push({
        id: id,
        fname: fname,
        lname: lname,
        city,
        age,
      });
      saveallData(allDate);
    } else {
      console.log("ERROR DUPLICATED DATA");
    }
  }
};

const deleteOneData = (id) => {
  const allDate = loadInfo();

  const keepToData = allDate.filter((obj) => {
    return obj.id !== id;
  });
  saveallData(keepToData);
};

const deleteAllData = () => {
  saveallData([]);
};

const readDataForSpecificPerson = (id) => {
  const allDate = loadInfo();

  const itemNeeded = allDate.find((obj) => {
    return obj.id == id;
  });
  if (itemNeeded) {
    console.log(itemNeeded);
  } else {
    console.log("ID NEEDED NOT FOUND");
  }
};

const readDataForAllPerson = () => {
  const allDate = loadInfo();

  const items = allDate.length;
  if (items) {
    console.log(allDate);
  } else {
    console.log("NOT FOUND ANY DATA");
  }
};

//upload data from file then turn date from json to object

const loadInfo = () => {
  try {
    const dataJson = fs.readFileSync("data10.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

// turn data after you doning operation  from object to json then store in file

const saveallData = (allDate) => {
  const saveallDataJson = JSON.stringify(allDate);
  fs.writeFileSync("data10.json", saveallDataJson);
};

module.exports = {
  addPerson,
  deleteOneData,
  deleteAllData,
  readDataForSpecificPerson,
  readDataForAllPerson,
};
