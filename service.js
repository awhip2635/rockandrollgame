//Private
function GameService() {
    var dataStore = this;
    var rockMeter = 0;
    var meterItems = {
        items: []
    }


    function update() {
        if (rockMeter < 100) {
            document.getElementById("changing-bar").style.width = rockMeter + "%";
        }
        else if (rockMeter >= 100) {

            document.getElementById("win").style.display = 'block';
            document.getElementById("first").style.display = 'none';
        }
    }

    //Public
    function getrockMeter() {

    }
    var Obj = function (name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    }
    var instruments = {
        Bass: new Obj('Bass', 20, 'This is an awesome Bass!'),
        Piano: new Obj('Piano', 15, 'This is an awesome Piano!'),
        Drums: new Obj('Drums', 25, 'This is an awesome Drumset!')
    }
    this.addMyMods = function addMods(name) {
        var mod = instruments[name];
        meterItems.items.push(mod);

    }





    this.rockButton = function rockButton() {
        rockMeter += 2 + totalMods();

        update()
    }

    this.guitarSoloButton = function guitarSolo() {
        rockMeter += 5 + totalMods();
        console.log(rockMeter);
        update()
    }

    this.stageDiveButton = function stageDive() {
        rockMeter += 10 + totalMods();
        update()
    }

    this.resetButton = function reset() {
        rockMeter = 0;
       meterItems.items=[];

        document.getElementById("first").style.display = 'block';
        document.getElementById("win").style.display = 'none';
        update()
    }
    function totalMods() {
        var total = 0;
        for (var i = 0; i < meterItems.items.length; i++) {
            var instrument = meterItems.items[i];
            console.log(meterItems)
            total += instrument.modifier
        }
       

        console.log(total);
        return total;

    }

    // function resetMods() {
    //     if (rockMeter=0)
    //     total = 0;
    // }


}


