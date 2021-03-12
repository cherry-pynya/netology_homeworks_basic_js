const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(weapon => weapon.name)  
}

function getCountReliableWeapons(durabilityMinimal) {
    return (weapons.filter(a => a.durability > durabilityMinimal)).length
}

function hasReliableWeapons(durabilityMinimal) {
    return weapons.some(a => a.durability > durabilityMinimal)
}

function getReliableWeaponsNames(durabilityMinimal) {
    return (weapons.filter(name => name.durability > durabilityMinimal)).map(weapon => weapon.name) 
}

function getTotalDamage() {
    return (weapons.map(weapon => weapon.attack)).reduce((a, b) => a + b)
}

//задание 2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i])) {
      return true}

      return false
      
  }

  function memorize(fn, limit) {
      let memory = []

      return function(...args) {
        let res = memory.find(cell => compareArrays(cell.args, args))
        if (res) {
          return res.result;
        }
      

      let newRes = fn(...args);

      if (memory.length === limit) {
        memory.shift();
      }

      memory.push({
        args: args,
        result: newRes
      });

      return newRes
        
    }
  }