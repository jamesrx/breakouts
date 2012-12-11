goog.provide('breakout.scenes.Menu');

goog.require('goog.events');

goog.require('lime.Label');

goog.require('breakout.scenes.LogoScene');
goog.require('breakout.scenes.Play');

breakout.scenes.Menu = function() {
	breakout.scenes.LogoScene.call(this);

	var s = breakout.director.getSize();

	this.addText('click mouse to start', s.width / 2, s.height / 2 + 60);
	this.addText('during the game:\nuse L/R arrow keys to skip levels', s.width / 2, s.height / 2 + 140);

	goog.events.listen(this, ['mousedown'], this._onMouseDown, this);
};

goog.inherits(breakout.scenes.Menu, breakout.scenes.LogoScene);

goog.object.extend(breakout.scenes.Menu.prototype, {
	_onMouseDown: function(e) {
		breakout.director.replaceScene(new breakout.scenes.Play());
	}
});


