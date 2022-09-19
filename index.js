function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return `This one is on me!`;
  }
  else if (feet > 400 && feet < 2001){
    return `That will be twenty bucks.`
  }
  else if (feet > 2000 && feet < 2499){
    return `I will gladly take your thirty bucks.`;
  }
  else if (feet > 2500){
    return `No can do.`
  }
}

function ternaryCheckCity(desiredLocation){
 return desiredLocation === "NYC"?"Ok, sounds good." :"No go.";
}

function switchOnCharmFromTip(tipAmount){
 switch(tipAmount){
  case 'generous':
    return `Thank you so much.`
  case 'not as generous':
    return `Thank you.`
  case 'thanks for everything':
    return `Bye.`
 }
}