let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function CreateTreeFromObj(obj) {
  const ul = document.createElement('ul');
  for (let key in obj) {
    const li = document.createElement('li');
    li.textContent = key;
    ul.append(li);
    if (Object.keys(obj[key]).length !== 0) {
      li.append(CreateTreeFromObj(obj[key]));
    }
  }
  // ul.append()
  return ul;
}

function createTree(container, data) {
  container.append(CreateTreeFromObj(data));
}

createTree(document.getElementById('tree'), data);