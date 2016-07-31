$(document).ready(function() {

var player; 
var defender;
var playerHealth;
var defenderHealth;
var stats;
var statusUpdate; 
var attackAdd;
var startingAttackPower;
var keepPlaying = true;

  // set up the characters
    function character(name, healthPoints, counterAttackPower, attackPower, startingAttackPower) {
      this.name = name;
      this.healthPoints = healthPoints;
      this.counterAttackPower = counterAttackPower; 
      this.attackPower = attackPower;
      this.startingAttackPower = startingAttackPower;
    };
     
        var ike = new character('Ike Broflovski', 140, 14, 3, 3);
        var maggie = new character('Maggie Simpson', 160, 16, 5, 5);
        var michelle = new character('Michelle Tanner', 200, 11, 6, 6);
        var stewie = new character('Stewie Griffin', 125, 13, 10, 10);
       
        $("#ike").data("character", ike);
        $("#maggie").data("character", maggie);
        $("#michelle").data("character", michelle);
        $("#stewie").data("character", stewie);

        keepPlaying = true;

    //Pick who represents "you"

    function pickPlayer() {
      $(document).on("click", ".playerArea", function () {

        player = $(this).data('character');
        $(this).removeClass('newArea');
    
        $('.playerArea').not(this).each(function(){
          $(this).removeClass('playerArea');
          $(this).addClass('newArea');
          $('.newArea').find('span').removeClass('playerHealth').addClass('neutralHealth');

          $(this).css( 'border-color', 'red'); 
          $(this).clone().appendTo($('.enemyArea'));
          $(this).remove();
          
        });
    });
  }
  
  pickPlayer();

      //choose your first opponent, on the click, moving them to the defender area

      function pickDefender () {  

      $(document).on("click", ".newArea", function () {  
        $('#statusUpdate').html('');
        $('#win-loss').html('');

        $("#ike").data("character", ike);
        $("#maggie").data("character", maggie);
        $("#michelle").data("character", michelle);
        $("#stewie").data("character", stewie);
        
        defender = $(this).data('character');
         $(this).removeClass('newArea');
         $(this).css( 'border-color', 'black'); 
         $(this).clone().appendTo($('#defenderArea'));
         $('#defenderArea').find('span').removeClass('neutralHealth').addClass('defenderHealth');
         $(this).remove(); 
        });
    }


  pickDefender();

    //fight your opponents until you either run out of hp or you reducce all the enemy hp to 0

    function attack() {

        $('#attack').on('click', function() {
              defenderHealth = defender.healthPoints;
              attackPower = player.attackPower;

          if((defender.healthPoints > 0) && (player.healthPoints > 0)){  
          attackAdd = player.attackPower;
              defender.healthPoints-= attackAdd;    
         
            $('#attack').attr('click', function() { 
              
              $('.defenderHealth').html('Health Points: ' + defender.healthPoints);
             
              var counterAttack = defender.counterAttackPower;
              player.healthPoints -= counterAttack;
              playerHealth = player.healthPoints;
              $('.playerHealth').html('Health Points: ' + playerHealth);
              $('#statusUpdate').html(defender.name + ' hit for ' + attackAdd + ' and ' + player.name + ' hit for ' + counterAttack + '!');


              if(defender.healthPoints <= 0 ) {
                $('.defenderHealth').html('Health Points: 0')
                $('#statusUpdate').html('You killed the baby!' + '<br />' +  
                'You\'re a terrible person.' + '<br />' + '' + '<br />' + 'Now get over it and click on a new opponent.');
                $('#defenderArea').empty();
                keepPlaying = true;
              }
              if(playerHealth <= 0) {
                $('#win-loss').html('Loser!');
                $('#statusUpdate').html('It\'s all over: you\'re dead.')
                $('.enemyArea').empty();
                keepPlaying = false;
              }

              player.attackPower += player.startingAttackPower;
             
              });
          
              if ( ($(".neutralHealth").length ==0) && ($("#defenderHealth").length ==0) && playerHealth > 0) {
                $('#defenderArea').empty();
                $('#statusUpdate').html('You have vanquished the evil toddlers!')
                $('#win-loss').html('*** Winner ***');
              }
            };
            
          });
      };
            attack();

});