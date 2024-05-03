function getObjectStructure(obj) {
    const structure = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const type = typeof value;
  
        if (type === 'object' && value !== null) {
          // Recursive call for nested objects
          structure[key] = getObjectStructure(value);
        } else {
          // Assigning the type of the value
          structure[key] = type.charAt(0).toUpperCase() + type.slice(1);
        }
      }
    }
  
    return structure;
  }
  
  // Example usage:
  const person = { name: "Some name", age: 20, address: { city: "Some city", country: "Some country" } };
  const personStructure = getObjectStructure(person);
  console.log(personStructure);

  