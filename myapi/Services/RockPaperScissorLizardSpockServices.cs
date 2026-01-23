using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services
{
    public class RockPaperScissorLizardSpockServices
    {
        
    private readonly Random _random = new Random();
        public string GetResponse(string UserResponse)
        {
            string[] hands = ["rock", "paper", "scissor", "lizard", "spock"];
            string CPU = hands[_random.Next(0, 5)];
         
            UserResponse = UserResponse.ToLower();
            if (!hands.Contains(UserResponse))
            {
                return "Invalid choice! Please choose Rock, Paper, Scissors, Lizard, or Spock.";
            }

            if (UserResponse == CPU)
            {
                return $"Tie! You both chose {CPU}.";
            }

          
            return (UserResponse, CPU) switch
            {
                ("scissors", "paper")  => "Scissors cuts Paper. You win!",
                ("paper", "rock")      => "Paper covers Rock. You win!",
                ("rock", "lizard")     => "Rock crushes Lizard. You win!",
                ("lizard", "spock")    => "Lizard poisons Spock. You win!",
                ("spock", "scissors")  => "Spock smashes Scissors. You win!",
                ("scissors", "lizard") => "Scissors decapitates Lizard. You win!",
                ("lizard", "paper")    => "Lizard eats Paper. You win!",
                ("paper", "spock")     => "Paper disproves Spock. You win!",
                ("spock", "rock")      => "Spock vaporizes Rock. You win!",
                ("rock", "scissors")   => "Rock crushes Scissors. You win!",
                
               
                _ => $"{CPU} beats {UserResponse}. CPU wins!"
            };
        }
    }
}
        

    
