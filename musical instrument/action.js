window.onload = function()
{
    let instrument = new Instrument;
    let openInstrument = "piano";
    let editKey = "";
    let editIndex = 0;
    let editPitch = 1;
 
    document.querySelectorAll("button").forEach(function(el)
    {
        el.addEventListener("click",function(ev)
        {
            ev.stopPropagation();
            let device = document.getElementById("instrument").value;
            openInstrument = device;
            let key = this.getAttribute("data-note");
            let pitch = Math.floor(Math.random() * 7) + 1;

            if(this.id == "remove")
            {
                instrument.removeLastNote();
                displayToNotes(instrument.record);
                return;
            }
            else if(this.id == "compose")
            {
                instrument.record = [];
                let numb = document.getElementById("number").value;
                let keyList = ["do","re","mi","fa","sol","la","ti"];
                for(let x=0; x<numb; x++)
                {
                    let randKey = Math.floor(Math.random() * 6) + 1;
                    let randPitch = Math.floor(Math.random() * 7) + 1;
                    instrument.addNote(keyList[randKey], randPitch);
                }
                displayToNotes(instrument.record);
                console.log(instrument.record);
                return;
            }
            else if(this.id == "shuffle")
            {
                let arr = instrument.shuffleRecord(instrument.record);
                instrument.record = arr;
                console.log(instrument.record);
                return;
            }
            else if(this.id == "play")
            {
                let x = 0;
                let myInterval = setInterval(function(){
            let pitch = Math.floor(Math.random() * 7) + 1;

                    if(x == instrument.record.length)
                    {
                        clearInterval(myInterval);
                        return;
                    }
                    let key = instrument.record[x].name;
                    let newNote = new Note(key, pitch);
                    let music = newNote.show(key, device);
                    let audi = new Audio(music);
                    audi.play();
                    x++;
                },300)
                return;
            }
            else if(this.id == "save")
            {
                editKey = document.getElementById("key").value;
                editPitch = document.getElementById("pitch").value;
                instrument.changeNote(editIndex, editKey, editPitch)
                displayToNotes(instrument.record);

                deleter.style.display = "none";
                return;
            }
            else if(this.id == "cancel")
            {
                this.parentElement.style.display = "none";
                return;
            }
            instrument.addNote(key, pitch);
            let note = new Note(key, pitch);
            displayToNotes(instrument.record);
            let link = note.show(key, device);
            let audio = new Audio(link);
            audio.play();
        },false);
    })
    document.getElementById("instrument").addEventListener("change",function(ev)
    {
        document.getElementById("notes").innerHTML = "";
        instrument.record = [];
        document.getElementById(openInstrument).style.display = "none";
        document.getElementById(this.value).style.display = "block";
        openInstrument = this.value;
    },false)

    let displayToNotes = function(data)
    {
        let parent = document.getElementById("notes");
        parent.innerHTML = "";
        for(let x=0; x<data.length; x++)
        {
            let newChild = document.createElement("a");
            newChild.setAttribute("href","#");
            newChild.textContent = data[x]["name"];
            newChild.id = x;
            parent.appendChild(newChild);
        }
        let el = document.querySelectorAll("a");
        el.forEach(function(elem){
            elem.addEventListener("click",function(ev)
            {
                ev.stopPropagation();
                let deleter = document.getElementById("deleter");
                deleter.style.display ="block";
                editIndex = parseInt(this.id);

            },false)
        })
    }
}