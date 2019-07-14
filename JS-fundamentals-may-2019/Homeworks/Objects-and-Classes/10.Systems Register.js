function solve(arr) {
  let systems = new Map();

  arr.forEach(el => {
    let [system, component, subcomponent] = el.split(' | ');
    if (!systems.has(system)) {
      systems.set(system, new Map());
    }
    if (!systems.get(system).has(component)) {
      systems.get(system).set(component, []);
    }
    systems.get(system).get(component).push(subcomponent);
  });

  let sortedSystem = [...systems.keys()]
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => systems.get(b).size - systems.get(a).size);

  for (const systemName of sortedSystem) {
    console.log(systemName);
    //Array.from -->>
    // let componets =  [...systems.get(systemName)].forEach(e => console.log(`|||${e[0]}`));
    let sortedComponets = [...systems.get(systemName).keys()]
      .sort((a, b) => systems.get(systemName).get(b).length - systems.get(systemName).get(a).length);

    for (const componentName of sortedComponets) {
      console.log(`|||${componentName}`);
      for (const subComponentName of systems.get(systemName).get(componentName)) {
        console.log(`||||||${subComponentName}`)
      }
    }
  }
}

solve([
  'SULS | Main Site | Home Page',
  'SULS | Main Site | Login Page',
  'SULS | Main Site | Register Page',
  'SULS | Judge Site | Login Page',
  'SULS | Judge Site | Submittion Page',
  'Lambda | CoreA | A23',
  'SULS | Digital Site | Login Page',
  'Lambda | CoreB | B24',
  'Lambda | CoreA | A24',
  'Lambda | CoreA | A25',
  'Lambda | CoreC | C4',
  'Indice | Session | Default Storage',
  'Indice | Session | Default Security']);