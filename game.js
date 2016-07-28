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
     
        var ike = new character("Ike Broflovski", 140, 6, 7);
        var maggie = new character("Maggie Simpson", 160, 8, 10);
        var michelle = new character("Michelle Tanner", 200, 5, 10);
        var stewie = new character("Stewie Griffin", 125, 7, 20);
  
  console.log(maggie.name + " " + maggie.attackPower + " " + maggie.healthPoints);
  console.log(stewie);

  console.log("These are ike's heath Points: " + ike.healthPoints);

    $('.playerArea').click(function () {
      $(this).removeClass("playerArea");

        if ($(this).attr('id') == "ike") {
           $('#ike').appendTo('#player');
        }
        if ($(this).attr('id') == "maggie") {
          $('#maggie').appendTo('#player');
        }
        if ($(this).attr('id') == "michelle") {
          $('#michelle').appendTo('#player');
        }
        if ($(this).attr('id') == "stewie") {
          $('#stewie').appendTo('#player');
        }

          console.log(player + ' chosen');

      $('.playerArea').not(this).each(function(){
        
        $(this).css( "border-color", "red"); 
        $(this).removeClass("playerArea");
        // $(this).addClass("enemyArea");
        $(this).clone().appendTo($('.enemyArea'));
        $(this).remove(); 
      });
    });

      //this takes the first in line (so Ike, no matter what.)
      
        $('.enemyArea').click(function () {
          
          if($('#ike').on('click')) {
            $('#ike').css( "border-color", "black"); 
            $('#ike').clone().appendTo($('#defenderArea'));
            $('#ike').remove(); 
            $('#ike').appendTo('#defender');
            console.log('ike chosen');
          }
          else if($('#maggie').on('click')) {
            $('#maggie').css( "border-color", "black");
            $('#maggie').clone().appendTo($('#defenderArea'));
            $('#maggie').remove();
            $('#maggie').appendTo('#defender');
            console.log('maggie chosen');
          }
          else if($('#michelle').on('click')) {
            $('#michelle').css( "border-color", "black");
            $('#michelle').clone().appendTo($('#defenderArea'));
            $('#michelle').remove();
            $('#michelle').appendTo('#defender');
            console.log('michelle chosen');
          }
          else {
            $('#stewie').css( "border-color", "black");
            $('#stewie').clone().appendTo($('#defenderArea'));
            $('#stewie').appendTo('#defender');
            $('#stewie').remove();
            console.log('stewie chosen');
          }
         
  
        });


      $('#attack').click(function() {
        console.log("Ike's hp " + ike.healthPoints + " maggie's hp " + maggie.healthPoints);

  // debugger;
        if(( ike.healthPoints > 0) && (maggie.healthPoints > 0)){      
          var attackStart = maggie.attackPower;
          var attackAdd = attackStart + attackStart;
          
          $('#attack').attr('click', function() { 
            var addPower = attackStart + attackAdd;
            $('addPower').append($('addPower'))
            ike.healthPoints-= addPower;
            console.log( 'Ike hit for ' + addPower + ' points.' );
            document.getElementById("ike-health").innerHTML = 'Health Points: ' + (ike.healthPoints)
  

            var counterAttack = 5;
            maggie.healthPoints -= counterAttack;
            document.getElementById("maggie-health").innerHTML = 'Health Points: ' + (maggie.healthPoints)
            console.log('Maggie hit for ' + counterAttack);
            
            document.getElementById('statusUpdate').innerHTML = 'Ike hit for ' + addPower + ' and Maggie hit for ' + counterAttack + "!";

            if(ike.healthPoints <= 0 ) {
              document.getElementById("ike-health").innerHTML = 'Health Points: 0' + (ike.healthPoints)
              document.getElementById('statusUpdate').innerHTML = 'You killed the baby!' + '<br />' +  
              'You\'re a terrible person.' + '<br />' + '' + '<br />' + 'Now get over it and pick a new opponent.';
              document.getElementById('win-loss').innerHTML = '*** Winner ***';
            }
            else if(maggie.healthPoints <= 0) {
              document.getElementById('statusUpdate').innerHTML = 'It\'s all over: you\'re dead.';
              document.getElementById('win-loss').innerHTML = 'Loser!';
            }

            //return health poin
            $('.enemyArea').click(function () {
              document.getElementById('statusUpdate').innerHTML = '';
              document.getElementById('win-loss').innerHTML = '';

              $("#ike").remove();

              if($('#stewie').on('click')){
                $('#stewie').css( "border-color", "black");
                $('#stewie').clone().appendTo($('#defenderArea'));
                $('#stewie').appendTo('#defender');
                $('#stewie').remove();
                console.log('stewie chosen');
              }
              else if($('#maggie').on('click')) {
              $('#maggie').css( "border-color", "black");
              $('#maggie').clone().appendTo($('#defenderArea'));
              $('#maggie').remove();
              $('#maggie').appendTo('#defender');
              console.log('maggie chosen');
              }
              else if($('#michelle').on('click')) {
                $('#michelle').css( "border-color", "black");
                $('#michelle').clone().appendTo($('#defenderArea'));
                $('#michelle').remove();
                $('#michelle').appendTo('#defender');
                console.log('michelle chosen');
              } 
              else {
                $('#ike').css( "border-color", "black"); 
                $('#ike').clone().appendTo($('#defenderArea'));
                $('#ike').remove(); 
                $('#ike').appendTo('#defender');
                console.log('ike chosen');
              }

            });
          });
        };
      });
});
  

