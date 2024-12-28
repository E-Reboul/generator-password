// ? Best solution "Fisher-Yates Shuffle"

const mixPassword = (password) => {
    const array = password.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  };

export default mixPassword;

// ? Pseudo-aléatoire
// export const mixPassword = (password) => {
//     password = password.split('').sort(() => Math.random() - 0.5).join('');
// }