//Database for the WSU Black Soccer Players
const coach = [["Renan Mougenot", "Head Coach"], ["Mansour Al Hajri", "Assistant Coach"], ["Justin Foster", "Goalkeeper Coach"]];
const forward = [["Agustin Torena", "#"], ["Aziz Alarady", "#"], ["Belal Glab", "#"], ["Brandon Pearce", "#28"],["Emmanuel Perez", "#11"], 
["Gabe Juarez", "#18"], ["Jumaah Alfaihani", "#94"], ["Luis Arce", "#30"], ["Will Naughton", "#45"]];
const mid = [["Asher Jensen", "#"], ["Charly Nuñez", "#"], ["Jake Williams", "#19"], ["Luis Jordan", "#17"],["Riley Wright", "#10"], 
["Teegan Smith", "#18"]];
const def = [["Ethan Barnette", "#3"], ["James Patten", "#14"], ["Jorge Benitez", "#26"], ["Kaden Hecker", "#22"],["Kolton Kitchin", "#24"]];
const gk = [["Tyler Bagley", "#2"]];


const printplayers = () =>{
    console.log("Coaches:");
    console.table(coach);

    console.log("Forwards: ");
    console.table(forward);

    console.log("Midfielders: ");
    console.table(mid);

    console.log("Defenders: ");
    console.table(def);

    console.log("Goalkeepers: ");
    console.table(gk);
}