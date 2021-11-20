// Field dimention

let h = 4;
let w = 4;
let field = [];
let count = 1;
let size = h * w;
let nodo = 1;

let myAarray = new Array(4);

for (let i = 0; i < h; i++) {
  field[i] = new Array(w);
  for (let j = 0; j < w; j++) {
    field[i][j] = count;
    count++;
  }
}
console.log("Field: ");
console.table(field);

var myArr = Array(size);
const listEdges = new Map();



for (const node of myArr) {
  let arrAdj = getAdjacents(nodo);
  listEdges.set(nodo, arrAdj);
  nodo++;
}
console.log("Adjacentes: ");
console.log(listEdges);

function getAdjacents(node) {
  let result = [];
  let operators = [1, 4];

  for (const val of operators) {
    let sum = node + val;
    let rest = node - val;

    if (sum > 0 && sum < size) {
      if (node % 4 === 0) {
        // Right corner
        if (val !== 1) {
          result.push(sum);
        }
      } else {
        result.push(sum);
      }
    }

    if (rest > 0 && rest < size) {
      if (node % 4 === 1) {
        // Left corner
        if (val !== 1) {
          result.push(rest);
        }
      } else {
        result.push(rest);
      }
    }
  }
  return result;
}

// for (let i = 1; i <= 16; i++) {
//   console.log("4 Module " + i + " : " + (i % 4));
// }

console.log("holi");
//console.log(list);

// ============================//
// ============================//

const adjacencylist = new Map();

function addNode(node) {
  adjacencylist.set(node, []);
}

function addEdge(nodeorigin, nodedestine) {
  adjacencylist.get(nodeorigin).push(nodedestine);
  adjacencylist.get(nodedestine).push(nodeorigin);
}

//nodes.forEach(addNode);
//routes.forEach(route => addEdge(..route))
