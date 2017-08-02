    var service = new GameService()
var rockMeter = service.getrockMeter
//Private
function GameController() {
    

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

this.rockButton = function () {
    console.log(service)
    service.rockButton()
    update()

}


this.guitarSoloButton = function () {
    service.guitarSoloButton()
    update()
}

this.stageDiveButton = function () {
    service.stageDiveButton()
    update()
}

this.resetButton = function () {
    service.resetButton()
    update()
}

this.addMyMods = function (name) {
    service.addMyMods(name)
    update()
}

this.allMyMods = function () {
    service.allMyMods(name)
    update()
}
}
