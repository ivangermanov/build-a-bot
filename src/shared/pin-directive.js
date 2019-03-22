// Full syntax
// function applyStyle(element, binding) {
//     Object.keys(binding.value).forEach((position) => {
//         element.style[position] = binding.value[position];
//     });
//     element.style.position = 'absolute';
// }

// export default {
//     bind: (element, binding) => {
//         applyStyle(element, binding);
//     },
//     update: (element, binding) => {
//         applyStyle(element, binding);
//     },
// };

// Shorthand syntax - the above is so common
export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}
