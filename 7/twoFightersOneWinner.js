// **I found this one...odd. I kept getting an error for using a { with an else statement and its only passed if I used two else if statements. Maybe it's something I am not understanding. **

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.



// My Solution

function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0)  {
      fighter2.health -= fighter1.damagePerAttack;
      fighter1.health -= fighter2.damagePerAttack;
    }
    
  
    if(fighter1.health <= 0 && fighter2.health <= 0){
      return firstAttacker;
      }
    else if (fighter1.health <= 0){
      return fighter2.name;
      }
    else if (fighter2.health <= 0){
      return fighter1.name;
      }
  }
  