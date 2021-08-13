function scuberGreetingForFeet(feet){
  let response;
  if (feet <= 400){
    response = 'This one is on me!';
  }
  else if (feet > 2000 && feet <= 2500){
    response = 'I will gladly take your thirty bucks.';
  }
  else if(feet > 2500 ){
    response = 'No can do.';
  }
  return response;
}

function ternaryCheckCity(city){
  let saying = (city === 'NYC') ? "Ok, sounds good." : "No go.";
  return saying;

}

function switchOnCharmFromTip(tip){
  let charmResponse;
  switch (tip){
    case 'generous':
      charmResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      charmResponse = 'Thank you.';
      break;
    default:
      charmResponse = 'Bye.';
      break;
  }
  return charmResponse;
  
}