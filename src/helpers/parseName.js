const parseName = (name) => {
  const formattedName = name
    .split('+')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
    
  return formattedName;
};

export default parseName;