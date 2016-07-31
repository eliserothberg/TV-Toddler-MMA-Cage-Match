$(document).ready(function() {

var player; 
var defender;
var playerHealth;
var defenderHealth;
stats = '';
statusUpdate = '';
keepPlaying = true;

  // var characters = []
    function character(name, healthPoints, counterAttackPower, attackPower) {
      this.name = name;
      this.healthPoints = healthPoints;
      this.counterAttackPower = counterAttackPower; 
      this.attackPower = attackPower;
    };
     
        var ike = new character('Ike Broflovski', 140, 6, 7);
        var maggie = new character('Maggie Simpson', 160, 8, 10);
        var michelle = new character('Michelle Tanner', 200, 5, 10);
        var stewie = new character('Stewie Griffin', 125, 17, 20);
        var $player = new character();
        var $defender = new character();

        $("#ike").data("character", ike);
        $("#maggie").data("character", maggie);
        $("#michelle").data("character", michelle);
        $("#stewie").data("character", stewie);

        keepPlaying = true;

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

console.log('playerHealth is '+ playerHealth);

 
    function pickDefender () {  

      $(document).on("click", ".newArea", function () {
        statusUpdate = '';   
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

    function attack() {

        $('#attack').on('click', function() {
  
          if((defender.healthPoints > 0) && (player.healthPoints > 0)){      
         
            $('#attack').attr('click', function() { 
              var attackAdd = (player.attackPower *= 2);
              defender.healthPoints-= attackAdd;
              defenderHealth = defender.healthPoints;
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
                $('#win-loss').html('*** Winner ***');
                $('#defenderArea').empty();
                keepPlaying = true;
              }
              else if(player.healthPoints <= 0) {
                $('#statusUpdate').html('It\'s all over: you\'re dead.')
                $('#win-loss').html('Loser!');
                keepPlaying = false;
              }
            });
          };
        });
      };
            
            attack();

});