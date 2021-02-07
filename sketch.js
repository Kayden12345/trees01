//variables: A B
//axiom: A
//rules: (A -> AB),(B ->A)

//var axiom = A;
//var rule1 = {
 // a:"A",
 // b: "AB"
//}


//var angle =  0;
//var slider;
var tree,treeImg;
function preload(){
 treeImg = loadAnimation("tree1.PNG","tree2.PNG","tree3.PNG","tree4.PNG","tree.PNG","tree5.PNG","tree6.PNG","tree7.PNG","tree8.PNG","tree9.PNG","tree10.PNG","tree11.PNG","tree12.PNG","tree13.PNG");
}


function setup() {
  createCanvas(400, 400);
  tree=createSprite(200,200,20,20)
  tree.addAnimation("Imagetree",treeImg);

  //slider = createSlider(0,TWO_PI, PI/4,0.01)
}

function draw() {
  background(255);
  text()
  drawSprites()
 
 
  //angle = slider.value();
  //stroke(255);
  //strokeWeight(2)
 // translate(200,height)
  //branch(100);
 // drawSprites();
}

//function branch (len) {
  //line(0,0,0,- len);
 // translate(0,-len);
  //if(len > 4){
  // push()
  // rotate(angle);
 // branch(len * 0.67);
  // pop()
  // push()
  // rotate(-angle);
 //  branch(len * 0.67);
 //  pop()
 //}
  
//}



