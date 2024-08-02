function setup() {
  createCanvas(400, 400);
  background(0,0,0);

  let seedX = 200;
  let seedY = 400;
  let step = 30;
  maxGenerations=7;
  
  
  stroke(255);
  strokeWeight(5);
  branch(seedX, seedY, step,maxGenerations);
}

function branch(seedX, seedY, step, maxGenerations) {
   maxGenerations=maxGenerations-1;
  if (maxGenerations > 0) {
   
    let whereToGrowX = seedX;
    let whereToGrowY = seedY - step;

    let whereToGoLeftX = seedX - step;
    let whereToGoLeftY = seedY - step - step;

    line(seedX, seedY, whereToGrowX, whereToGrowY);

    let pointLeftX = whereToGrowX - step;
    let pointLeftY = whereToGrowY - step;

    line(whereToGrowX, whereToGrowY, pointLeftX, pointLeftY);
    branch(pointLeftX,pointLeftY,step, maxGenerations);
    

    let pointRightX = whereToGrowX + step;
    let pointRightY = whereToGrowY - step;

    line(whereToGrowX, whereToGrowY, pointRightX, pointRightY);
    branch(pointRightX,pointRightY,step, maxGenerations);
    
  }
}