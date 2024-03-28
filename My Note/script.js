
let add = document.querySelector(".addNote");
let main = document.querySelector(".main")

const saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea")
    const data = []
    console.log(notes)
    notes.forEach(
        (note) =>{data.push(note.value)}
    )
    // console.log(data)
    if (data.length === 0) {
        localStorage.removeItem("Notes")
    } else {    
    localStorage.setItem("Notes" , JSON.stringify(data))
    }
}

add.addEventListener("click" , ()=>{
   addNote();
});

add.addEventListener("mouseover" , ()=>{
    add.querySelector("img").src = "assests/plus2.svg"
    add.querySelector("span").style.color = "B4B4B8"
});
add.addEventListener("mouseout" , ()=>{
    add.querySelector("img").src = "assests/plus.svg"
    add.querySelector("span").style.color = "white"
});


const addNote = (text = "") =>{
let note =  document.createElement("div")
note.classList.add("note")
 note.innerHTML = 
 `
            <div class="tool">
                <div><img src="assests/save.svg" alt="Save" class="saveIcon" width="18px"></div>
                <div><img src="assests/trash.svg" alt="Trash" class="trashIcon" width="18px"></div>
            </div>
            <textarea>${text}</textarea>
        </div>
 `
note.querySelector(".trashIcon").addEventListener("click" , ()=>{
      note.remove();
       saveNotes();
 })

note.querySelector(".saveIcon").addEventListener("click" , ()=>{
      saveNotes();
 })

note.querySelector("textarea").addEventListener("focusout" , ()=>{
      saveNotes();
 })
 note.querySelector(".saveIcon").addEventListener("mouseover" , ()=>{
    note.querySelector(".saveIcon").src = "assests/save2.svg"
 })
 note.querySelector(".saveIcon").addEventListener("mouseout" , ()=>{
    note.querySelector(".saveIcon").src = "assests/save.svg"
 })
 note.querySelector(".trashIcon").addEventListener("mouseover" , ()=>{
      note.querySelector(".trashIcon").src = "assests/trash2.svg"
 })
 note.querySelector(".trashIcon").addEventListener("mouseout" , ()=>{
      note.querySelector(".trashIcon").src = "assests/trash.svg"
 })

   main.appendChild(note)
    saveNotes();
}

(
    function() {
     const lsNotes = JSON.parse(localStorage.getItem("Notes"))
    //  console.log(lsNotes)
    if (lsNotes == null) {
        addNote()
    } else {
       lsNotes.forEach(
        (lsNotes)=>{
           addNote(lsNotes)
        }
      ) 
    } 
    } 
)()
    
