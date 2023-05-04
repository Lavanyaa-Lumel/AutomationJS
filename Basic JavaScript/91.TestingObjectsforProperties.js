function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp))
    {
      return obj[checkProp];
    }
    else
    {
      return "Not found";  }
  }
  let val=checkObj({"gift":"pony","pet":"kitten","bed":"sleigh"},"gift");
  console.log(val);

  