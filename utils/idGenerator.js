const generateCustomId = () => {
    const base = Date.now();
    const rand = Math.floor(Math.random() * 1000);
    return parseInt(`${base}${rand}`);
  };
  
  module.exports = generateCustomId;