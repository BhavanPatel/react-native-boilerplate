import _local from "./config";

class local {}

/**
 * local.insert('DOCUMENT_NAME', 'OBJECT');
 *
 * */

local.insert = (type, data) => {
  const _type = { type };
  const _data = { type, data };
  const _update = { upsert: true };
  return new Promise((resolve, reject) => {
    try {
      _local.update(_type, _data, _update, (err, newDoc) => {
        if (!err) {
          console.log("Database updated/inserted :-", newDoc);
          resolve(newDoc);
        } else {
          console.log("Database Error:-", err);
          reject(err);
        }
      });
    } catch (err) {
      console.log("Database Error:-", err);
      reject(err);
    }
  });
};

/**
 * await local.getOne('DOCUMENT_NAME');
 *
 * */

local.getOne = type => {
  const _type = { type };
  return new Promise((resolve, reject) => {
    try {
      _local.findOne(_type, (err, docs) => {
        if (!err) {
          console.log("Database fetched :-", docs);
          resolve(docs);
        } else {
          console.log("Database Error:-", err);
          reject(err);
        }
      });
    } catch (err) {
      console.log("Database Error:-", err);
      reject(err);
    }
  });
};

/**
 * await local.get();
 *
 * */

local.get = type => {
  const _type = { type };
  return new Promise((resolve, reject) => {
    try {
      _local.find(_type, (err, docs) => {
        if (!err) {
          console.log("Database fetched :-", docs);
          resolve(docs);
        } else {
          console.log("Database Error:-", err);
          reject(err);
        }
      });
    } catch (err) {
      console.log("Database Error:-", err);
      reject(err);
    }
  });
};

/**
 * await local.clean();
 *
 * */
local.clean = () => {
  const _data = {};
  const _all = { multi: true };
  return new Promise((resolve, reject) => {
    try {
      _local.remove(_data, _all, (err, nosRecord) => {
        if (!err) {
          console.log("Database deleted no of records :-", nosRecord);
          resolve(nosRecord);
        } else {
          console.log("Database Error:-", err);
          reject(err);
        }
      });
    } catch (err) {
      console.log("Database Error:-", err);
      reject(err);
    }
  });
};

/**
 * await local.cleanOne('DOCUMENT_NAME');
 * ####Not Tested
 * */
local.cleanOne = type => {
  const _type = { type };
  const _data = {};
  const _all = { multi: true };
  return new Promise((resolve, reject) => {
    try {
      _local.remove(_type, _data, _all, (err, nosRecord) => {
        if (!err) {
          console.log("Database deleted no of records :-", nosRecord);
          resolve(nosRecord);
        } else {
          console.log("Database Error:-", err);
          reject(err);
        }
      });
    } catch (err) {
      console.log("Database Error:-", err);
      reject(err);
    }
  });
};

export default local;
