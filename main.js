import { HashMap } from './HashMap.js';

const hashMap = new HashMap();
const resultDisplay = document.getElementById('resultDisplay');
const keyInput = document.getElementById('keyInput');
const valueInput = document.getElementById('valueInput');

document.getElementById('setBtn').addEventListener('click', () => {
  const key = keyInput.value.trim();
  const value = valueInput.value.trim();
  if (key && value) {
    hashMap.set(key, value);
    updateDisplay(`Set: ${key} = ${value}`);
  } else {
    alert("Both key and value are required for 'Set' operation.");
  }
  clearInputs();
});

document.getElementById('getBtn').addEventListener('click', () => {
  const key = keyInput.value.trim();
  if (key) {
    const value = hashMap.get(key);
    const message = value !== null ? `Value for "${key}": ${value}` : `Key "${key}" not found.`;
    updateDisplay(message);
  } else {
    alert("Key is required for 'Get' operation.");
  }
  clearInputs();
});

document.getElementById('hasBtn').addEventListener('click', () => {
  const key = keyInput.value.trim();
  if (key) {
    const exists = hashMap.has(key);
    updateDisplay(`Key "${key}" exists: ${exists}`);
  } else {
    alert("Key is required for 'Has' operation.");
  }
  clearInputs();
});

document.getElementById('removeBtn').addEventListener('click', () => {
  const key = keyInput.value.trim();
  if (key) {
    const removed = hashMap.remove(key);
    const message = removed ? `Removed key "${key}".` : `Key "${key}" not found.`;
    updateDisplay(message);
  } else {
    alert("Key is required for 'Remove' operation.");
  }
  clearInputs();
});

document.getElementById('lengthBtn').addEventListener('click', () => {
  const length = hashMap.length();
  updateDisplay(`Number of entries in HashMap: ${length}`);
});

document.getElementById('clearBtn').addEventListener('click', () => {
  hashMap.clear();
  updateDisplay("HashMap cleared.");
});

document.getElementById('keysBtn').addEventListener('click', () => {
  const keys = hashMap.keys();
  updateDisplay(`Keys: ${keys.join(', ')}`);
});

document.getElementById('valuesBtn').addEventListener('click', () => {
  const values = hashMap.values();
  updateDisplay(`Values: ${values.join(', ')}`);
});

document.getElementById('entriesBtn').addEventListener('click', () => {
  const entries = hashMap.entries();
  const formattedEntries = entries.map(entry => `[${entry[0]}, ${entry[1]}]`).join(', ');
  updateDisplay(`Entries: ${formattedEntries}`);
});

function updateDisplay(text) {
  resultDisplay.textContent = text;
}

function clearInputs() {
  keyInput.value = '';
  valueInput.value = '';
}
