class Note
{
    constructor(name = "", pitch = 1)
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
        let note = new Note(name, pitch);
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
        console.log(this.record);
    }
    shuffleRecord(array)
    {
        var copy = [], n = array.length, i;

        // While there remain elements to shuffle…
        while (n) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * n--);
      
          // And move it to the new array.
          copy.push(array.splice(i, 1)[0]);
        }
      
        return copy;
    }
    changeNote(index, key, pitch)
    {
        this.record[index] = {name: key, pitch: pitch};
    }
}