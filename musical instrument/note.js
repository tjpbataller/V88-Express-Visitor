class Note
{
    constructor(name, pitch = 1)
    {
        this.namelist = 
        {
            piano: 
            {
                "do":"piano/do.mp3",
                "re":"piano/re.mp3",
                "mi":"piano/mi.mp3",
                "fa":"piano/fa.mp3",
                "sol":"piano/sol.mp3",
                "la":"piano/la.mp3",
                "ti":"piano/ti.mp3",
            }
            ,
            xylo:
            {
                "do":"xylo/1.wav",
                "re":"xylo/2.wav",
                "mi":"xylo/3.wav",
                "fa":"xylo/4.wav",
                "sol":"xylo/5.wav",
                "la":"xylo/6.wav",
                "ti":"xylo/7.wav"
            }
        }
            ;
        this.name = name;
        this.pitch = pitch;
    }
    show(name, instrument)
    {
        console.log(`Note {name: "${name}", pitch: ${this.pitch}}`);
        return this.namelist[instrument][name];
    }
}
class Instrument
{
    constructor()
    {
        this.record = [];
    }
    addNote(name, pitch)
    {
        this.record.push(
            {
                name: name,
                pitch: pitch
            }
        );
    }
    removeLastNote()
    {
        this.record.pop();
    }
    shuffleRecord()
    {

    }
}

document.querySelectorAll("button").forEach(function(el)
{
    el.addEventListener("click",function(ev)
    {
        ev.stopPropagation();
        let key = this.getAttribute("data-note");
        let device = this.parentElement.id;
        let pitch = Math.floor(Math.random() * 7) + 1;
        let instrument = new Instrument;
        instrument.addNote(key, pitch);
        let note = new Note(key, pitch);
        let link = note.show(key, device);
        let audio = new Audio(link);
        audio.play();
    },false);
})