//Database for the players
const game = [["Aziz Alarady"],["Brandon Pearce"],["Emmanuel Perez"], ["Jumaah Alfaihani"], ["Charly Nuñez"],["Jake Williams"],["Riley Wright"],
["Ethan Barnette"],["James Patten"],["Jorge Benitez"],["Kolton Kitchin"],["Tyler Bagley"], ["Hunter Spencer"], ["Santiago Tano"], ["Sergio Payá"], ["Thaddeus Pappadakis"]];
const fillup = [["Asher Jensen"], ["Belal Glab"], ["Gabe Juarez"], ["Kaden Hecker"], ["Kontey Simpore"],["Said Isa"],["Teegan Smith"], ["Patrick"]];
const practice = [["Luis Calla"], ["Luis Arce"], ["Agustin Torena"], ["Bernardo"], ["Mo"],["Will Naughton"]];



const print_roster = () =>{
    console.log("Game Squad: ");
    console.table(game);
    
    console.log("Second Squad: ");
    console.table(fillup);

    console.log("Practice Squad: ");
    console.table(practice);

    calculate_numbers();

}

const calculate_numbers = () =>{

    let game_size = game.length;
    let roster_size = fillup.length;
    let practice_size = practice.length;

    console.table("Game Roster Size: " + game_size);
    console.table("Second Roster Size: " + roster_size);
    console.table("Practice Roster Size: " + practice_size);

    console.log("Total Traveling Roster Size: " + (game_size + roster_size));
    console.log("Addition Roster Size: " + (26 - (game_size + roster_size)));

}