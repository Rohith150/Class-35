class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2', 'Car Racing Game');
        title.position(400, 50);
        var input = createInput('name');
        input.position(400,150);
        var button = createButton('Play');
        button.position(450,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.updateCount(playerCount);
            player.update(name);
            var greeting = createElement('h2');
            greeting.html("Hello " + name);
            greeting.position(400,150);
        });
    }
}
