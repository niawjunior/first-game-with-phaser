demo.state1 = function(){};
demo.state1.prototype = {
  preload: function(){
    game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png');
    game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png');
    game.load.image('adam', 'assets/sprites/adam.png');
  },
    create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = '#DDDDDD';
		addChangeStateEventListeners();

		var map = game.add.tilemap('field');
		map.addTilesetImage('grassTiles');
		map.addTilesetImage('rockTiles');

		grass = map.createLayer('grass');
		rocks = map.createLayer('rocks');
    },
    update: function(){}
};