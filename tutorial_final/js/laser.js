game.Laser = me.Renderable.extend({
    init: function (x, y) {
        this._super(me.Renderable, "init", [x, y, game.Laser.width, game.Laser.height]);
        this.z = 5;
        this.body = new me.Body(this);
        this.body.addShape(new me.PolyShape(0, 0, [
            new me.Vector2d(0, 0), new me.Vector2d(this.width, 0),
            new me.Vector2d(this.width, this.height), new me.Vector2d(0, this.height)
        ]));
    },

    draw: function (renderer) {
        var color = renderer.getColor();
        renderer.setColor('#5EFF7E');
        renderer.fillRect(this.pos.x, this.pos.y, this.width, this.height);
        renderer.setColor(color);
    },

    update: function (time) {
        this._super(me.Renderable, "update", [time]);
        this.pos.y -= 750 * me.timer.getDelta() / 1000;
        if (this.pos.y + this.height <= 0) {
            me.game.world.removeChild(this);
        }
    }
});

game.Laser.width = 5;
game.Laser.height = 28;