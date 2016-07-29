$(document).ready(function() {

  // $playerArea = $('playerArea');
  // $enemyArea = $('enemyArea');
  // $defenderArea = $('defenderArea');
  // $stats = $('#battle-stats');
  // $characters = $('#ike, #maggie, #michelle, #stewie');
  // $update = $('#update');
  // $attack = $('#attack');

var player = '';
var defender = '';
stats = '';

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

        $("#ike").data("character", ike);
        $("#maggie").data("character", maggie);
        $("#michelle").data("character", michelle);
        $("#stewie").data("character", stewie);
  
  console.log(maggie.name + ' ' + maggie.attackPower + ' ' + maggie.healthPoints);
  console.log(stewie);

  console.log('These are ike\'s heath Points: ' + ike.healthPoints);

  


function pickPlayer() {
    $(document).on("click", ".playerArea", function () {
      player = $(this).data("character");
      // event.preventDefault();
      // player = $( ).data("character");
      console.log('Player: ' + player);
      $(this).removeClass('newArea');
    
      $('.playerArea').not(this).each(function(){
        $(this).removeClass('playerArea');
        $(this).addClass('newArea');
        $(this).css( 'border-color', 'red'); 
        $(this).clone().appendTo($('.enemyArea'));
        $(this).remove(); 
       
      
      });
    });
}
    pickPlayer();

 
    function pickDefender () {     
  
        $(document).on("click", ".newArea", function () {
          defender = $(this).data("character");
         // event.preventDefault();
         console.log('Defender: ' + defender);
         
         $(this).removeClass('newArea');
         $('<span id="character-health"></span>').appendTo('#defender')

         $(this).css( 'border-color', 'black'); 
         $(this).clone().appendTo($('#defenderArea'));
         $(this).remove(); 
      
        });
    }

    pickDefender();


        $('#attack').on('click', function() {
          console.log('Defender: ' + defender);
          console.log('Player: ' + player);
          // console.log('Ike\'s hp ' + ike.healthPoints + ' maggie\'s hp ' + maggie.healthPoints);

          // var player = maggie;
          // var defender = ike;
                    // console.log('Defender\'s hp ' + defender.healthPoints + ' Player\'s hp ' + player.healthPoints);


          if(( defender.healthPoints > 0) && (player.healthPoints > 0)){      
         
            $('#attack').attr('click', function() { 
              var attackAdd = (player.attackPower *= 2);
              defender.healthPoints-= attackAdd;
              console.log( 'Defender hit for ' + attackAdd + ' points.' );
              $('#ike-health').html('Health Points: ' + (defender.healthPoints));

              var counterAttack = defender.counterAttackPower;
              player.healthPoints -= counterAttack;
              $('#maggie-health').html('Health Points: ' + (player.healthPoints));
              console.log('Player hit for ' + counterAttack);
            
            $('#statusUpdate').html('Defender hit for ' + attackAdd + ' and Player hit for ' + counterAttack + '!');

            if(defender.healthPoints <= 0 ) {
              $('#ike-health').html('Health Points: 0')
              $('#statusUpdate').html('You killed the baby!' + '<br />' +  
              'You\'re a terrible person.' + '<br />' + '' + '<br />' + 'Now get over it and click on a new opponent.');
              $('#win-loss').html('*** Winner ***');
              $('#defenderArea').empty();
            }
            else if(player.healthPoints <= 0) {
              $('#statusUpdate').html('It\'s all over: you\'re dead.')
              $('#win-loss').html('Loser!');
            }

      });

        // function pickNewDefender () {

        //     $('.enemyArea').on('click', function () {
        //       $('#statusUpdate').html('Next!');
        //       $('#win-loss').html('');

        //       if($('#stewie').on('click')){
        //         $('#stewie').css( 'border-color', 'black')
        //         $('#stewie').clone().appendTo($('#defenderArea'))
        //         $('#stewie').appendTo('#defender')
        //         $('#stewie').remove()
        //         console.log('stewie chosen');
        //         defender = stewie;
        //       }
        //       else if($('#maggie').on('click')) {
        //       $('#maggie').css( 'border-color', 'black')
        //       $('#maggie').clone().appendTo($('#defenderArea'))
        //       $('#maggie').remove()
        //       $('#maggie').appendTo('#defender')
        //       console.log('maggie chosen');
        //       }
        //       else if($('#michelle').on('click')) {
        //         $('#michelle').css( 'border-color', 'black')
        //         $('#michelle').clone().appendTo($('#defenderArea'))
        //         $('#michelle').remove()
        //         $('#michelle').appendTo('#defender')
        //         console.log('michelle chosen');
        //       }
        //       else {
        //         $('#ike').css( 'border-color', 'black')
        //         $('#ike').clone().appendTo($('#defenderArea'))
        //         $('#ike').remove()
        //         $('#ike').appendTo('#defender')
        //         console.log('ike chosen');
        //       }
        //     });   
        //   };
        //   pickNewDefender ();
          };

        });


      //       $('#attack').on('click', function() {
      //       console.log('Stewie\'s hp ' + stewie.healthPoints + ' maggie\'s hp ' + maggie.healthPoints);

      //     // var player = maggie;
      //     // var defender = stewie;
      //               console.log('Defender\'s hp ' + defender.healthPoints + ' Player\'s hp ' + player.healthPoints);


      //     if(( defender.healthPoints > 0) && (player.healthPoints > 0)){      
         
      //       $('#attack').attr('click', function() { 
      //         var attackAdd = (player.attackPower *= 2);
      //         defender.healthPoints-= attackAdd;
      //         console.log( 'Defender hit for ' + attackAdd + ' points.' );
      //         $('#defender-health').html('Health Points: ' + (defender.healthPoints));

      //         var counterAttack = defender.counterAttackPower;
      //         player.healthPoints -= counterAttack;
      //         $('#player-health').html('Health Points: ' + (player.healthPoints));
      //         console.log('Player hit for ' + counterAttack);
            
      //       $('#statusUpdate').html('Defender hit for ' + attackAdd + ' and Player hit for ' + counterAttack + '!');

      //       if(defender.healthPoints <= 0 ) {
      //         $('#defender-health').html('Health Points: 0')
      //         $('#statusUpdate').html('You killed the baby!' + '<br />' +  
      //         'You\'re a terrible person.' + '<br />' + '' + '<br />' + 'Now get over it and click on a new opponent.');
      //         $('#win-loss').html('*** Winner ***');
      //       }
      //       else if(player.healthPoints <= 0) {
      //         $('#statusUpdate').html('It\'s all over: you\'re dead.')
      //         $('#win-loss').html('Loser!');
      //       }
      //     });
      //   };
      // });
});
  

