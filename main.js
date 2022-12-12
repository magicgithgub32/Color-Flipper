import "./style.css";

const COLOR_PALETTE = {
  "#E83151": "Amaranth",
  "#541388": "Blue Violet Color Wheel",
  "#150578": "Navy Blue",
  "#453750": "English Violet",
  "#FC2F00": "Scarlet",
};

const addOptionsToColorPicker = () => {

const colorPickerSelect = document.querySelector('#color-picker');

Object.keys(COLOR_PALETTE).forEach((color) => {
  const option = document.createElement('option');
  option.value = color;
  option.innerText = COLOR_PALETTE[color];

  colorPickerSelect.append(option);
});
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');

  colorPickerSelect.addEventListener('change', (ev) => {
    const newColor = ev.target.value;

    document.body.style.backgroundColor = newColor;

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-';
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
