function node()
{
	this.value;
	this.right;
	this.left;
}

function BinarySearchTree(){
	this.root;

	this.walk = function(visitor)
	{
		var iterate = function(node)
		{
			if(node.left)
			{
				iterate(node.left);
			}

			visitor(node);

			if(node.right)
			{
				iterate(node.right);
			}
		};

		iterate(this.root);
	}

	this.toArray =  function()
	{
		result = [];
		this.walk(function(node){
			result.push(node.value);
		});

		return result;
	}

	this.insert = function(value)
	{
		if(!this.root)
		{
			this.root = new node();
			this.root.value = value;
			return;
		}

		currentNode = this.root;
		while(true)
		{
			if( value < currentNode.value )
			{
				if(currentNode.left)
				{
					currentNode = currentNode.left;
					continue;
				}

				currentNode.left = new node();
				currentNode.left.value = value;
				return;
			}
			else if( value > currentNode.value )
			{
				if(currentNode.right)
				{
					currentNode = currentNode.right;
					continue;
				}

				currentNode.right = new node();
				currentNode.right.value = value;
				return;
			}
			else
			{
				//we have found the value!, not inserting anything
				return;
			}
		}
	}
}

var bst =new BinarySearchTree();

/*
bst.insert(2);
bst.insert(1);
bst.insert(4);
bst.insert(3);
bst.insert(8);
bst.insert(5);
bst.insert(7);
bst.insert(6);
*/


for(var i = 0; i < 100; i++)
{
	bst.insert( Math.floor( Math.random()*100 ) );
}

document.writeln(bst.toArray().toString()); // prints 9 11 17 65