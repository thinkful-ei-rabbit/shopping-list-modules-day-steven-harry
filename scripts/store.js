'use strict'
import item from './item.js';


let items = [];
let hideCheckedItems = false;

function findById (id) {
  return items.findIndex(item => item.id === id);
}

function addItem (name) {
  try {
    item.validateName(name);
    items.push(item.create(name)); /*not sure about this line*/
  } catch(error) {
    console.log(`error ${error.message}`);
  }
}

function findAndToggleChecked (id) {
  let target = this.findById(id);
  target.checked = !target.checked;
}

function findAndUpdateName(id, newName) {
  try {
      item.validateName(newName);
      this.item[findById(id)].name = newName;
  } catch(e) {
    console.log(`error ${error.message}`);
  }
}

function findAndDelete (id) {
    this.items.splice(findById(id), 1);
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
};