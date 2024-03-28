const text = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,

  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,

  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,

  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,

  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
    I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,

  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,

  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,

  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,

  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const item = document.querySelector("#items");
const dataContainer = document.querySelector("#data");
const generate = () => {
  dataContainer.innerHTML = `<div id="warning"><p>Please Enter a Valid Input</p></div>`;
  if (isNaN(item.value) || item.value < 0) {
    // const randomIndex = Math.floor(Math.random() * text.length)
    // dataContainer.innerHTML = `<p> ${text[randomIndex]} </p>`
    dataContainer.innerHTML = `<div id="warning"><p>Please Enter a Valid Input</p></div>`;
  } else if (item.value > 9) {
    const localText = shuffle(text);
    let data1 = localText;
    let data2 = [];
    for (let i = 0; i < item.value - 9; i++) {
      const randomIndex = Math.floor(Math.random() * text.length);
      data2.push(`${text[randomIndex]}`);
    }
    const data = data1.concat(data2);
    displayPara(data);
  } else {
    const localText = shuffle(text);
    const data = localText.slice(0, item.value);
    displayPara(data);
    // const paras = data.map((d) => {
    //   return `<p> ${d} </p>`;
    // });
    // console.log(parars);
    // console.log(parars.join(""));
    // dataContainer.innerHTML = paras.join("");

    // array to string
  }
};
const displayPara = (data) => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    data[i] = `<div> ${i + 1}. <p>${
      data[i]
    }</p> <img class="copy-btn" src="copy.svg" /></div>`;
  }
  dataContainer.innerHTML = data.join("");
  // Now that data is prepared, we'll add event listeners to each copy button
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      copyButtons.forEach((button , index) => {
        button.src = "copy.svg";
      });
      document.querySelectorAll("p").forEach((e)=>{e.style.backgroundColor = "#dededf";})
      button.src = "copied.svg";

      document.querySelectorAll("p")[index].style.backgroundColor = "rgb(182 182 199)";
      // Getting the text to copy
      const textToCopy = document.querySelectorAll("p")[index].innerText;
      
      // Create a temporary textarea element to hold the text to copy
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = textToCopy;

      // Append the textarea to the body
      document.body.appendChild(tempTextArea);

      // Select the text in the textarea
      tempTextArea.select();

      // Copy the selected text
      document.execCommand("copy");

      // Remove the temporary textarea
      document.body.removeChild(tempTextArea);
    });
  });
};

// generate();
