// Создать класс - структуру бинарного дерева.
// Написать метод обхода дерева (любой)

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinaryTreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node.value);
      this.inOrderTraversal(node.right, callback);
    }
  }
}

const tree = new BinaryTree();
    tree.insert(8);
    tree.insert(3);
    tree.insert(10);
    tree.insert(1);
    tree.insert(6);
    tree.insert(14);
    tree.insert(4);
    tree.insert(7);
    tree.insert(13);

tree.inOrderTraversal(tree.root, (value) => {
//   console.log(value);
});


// Написать метод который принимает на вход стрингу и возвращает все возможные варианты строк состоящие из тех же элементов входной стринги
// input String str = "QWR"
// out QWR WRQ RQW RWQ WQR QRW 

function getAllPermutations(str) {
    const result = [];
  
    if (str.length === 1) {
      result.push(str);
      return result;
    }
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const remainingChars = str.slice(0, i) + str.slice(i + 1);
      const permutations = getAllPermutations(remainingChars);
  
      for (let j = 0; j < permutations.length; j++) {
        result.push(char + permutations[j]);
      }
    }
  
    return result;
  }
  
  const str = "QWR";
  const permutations = getAllPermutations(str);
  
  console.log(permutations);
  
