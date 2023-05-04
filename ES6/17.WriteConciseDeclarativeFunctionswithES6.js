/*const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);*/

  const bicycle = {
    gear : 2,
    setGear(newGear){
         return this.gear = newGear;
        }
  };
  console.log(bicycle.setGear(48));
  console.log(bicycle.gear);

