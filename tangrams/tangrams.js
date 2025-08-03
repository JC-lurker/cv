(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"tangrams_atlas_1", frames: [[1160,1519,65,70],[0,0,1175,1215],[1160,1435,731,82],[0,1435,1158,115],[0,1217,1232,216]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_7 = function() {
	this.initialize(ss["tangrams_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["tangrams_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["tangrams_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["tangrams_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["tangrams_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AQGBwQgGgHAAgMIAAhHQAAgVgGgLQgGgLgRAAQgMAAgJAHQgJAHgFALQgDAJAAAaIAAA2QAAANgGAGQgGAHgKAAQgJgBgGgGQgFgHAAgMIAAh7QAAgMAEgGQAGgGAJAAQAGAAAEADQAFADADAEQACAGAAAIIAAAEQAMgOANgHQAOgHAQAAQASAAANAHQANAIAHANQAEAIABAJIACBmQAAANgHAGQgFAHgKAAQgJgBgGgGgAL6BwQgPgGgLgLQgMgNgGgPQgFgQgBgTQABgUAFgPQAHgQALgLQALgLAPgHQAQgGATAAQAUAAAPAGQAQAHAMALQALAMAGAPQAFAPAAAUQAAATgFAQQgHAQgLAMQgLALgQAHQgPAFgUABQgTAAgQgHgAMHgQQgKAGgEAMQgGANAAARQAAAQAGANQAEAMAKAHQAKAGAMAAQAUAAALgOQAMgOAAgaQAAgagMgOQgLgOgUAAQgMAAgKAGgAKCBwQgGgHAAgMIAAh6QAAgMAGgHQAGgGAJAAQAJAAAHAGQAFAHABALIAAB7QgBANgFAGQgHAHgJAAQgJgBgGgGgAIjBwQgKgHgDgMQgEgMAAgUIAAhRIgFAAQgKAAgEgEQgFgEgBgHQABgHAFgEQAEgFALABIAEAAIAAgqQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAHAGQAFAEABAGIABAuIAQAAQAIgBAFAFQAFAEAAAHQAAAJgHADQgGADgNAAIgIAAIABBeQAAAFADADQADADAHABIAVgDQAEAAAFAEQADAEAAAGQABAKgLAGQgMAGgVAAQgUgBgKgGgAG/BwQgGgGAAgLIAAgGQgIAJgJAHQgHAGgLAEQgJADgNAAQgQAAgMgGQgMgHgHgLQgIgOAAgZIAAhUQAAgNAFgGQAHgGAJAAQAJAAAHAGQAFAHABAMIAABEQAAAPACAJQADALAGAFQAHAGALAAQALAAAJgHQAJgFAFgLQAEgJgBgeIAAg0QAAgMAHgHQAFgGAJAAQAKAAAGAGQAGAGAAANIAAB7QAAAMgGAHQgFAFgJABQgJAAgFgHgAD6BwQgGgHgBgMIAAi5QABgMAGgHQAFgGAKgBQAJABAGAGQAGAHAAAMIAAC5QAAANgGAGQgGAHgJAAQgKgBgFgGgABaBwQgPgGgMgLQgLgNgGgPQgFgQAAgTQAAgUAFgPQAHgQAKgLQAMgLAPgHQAQgGATAAQATAAAQAGQAQAHALALQAMAMAGAPQAFAPAAAUQAAATgFAQQgHAQgLAMQgLALgQAHQgQAFgTABQgUAAgPgHgABngQQgJAGgGAMQgFANAAARQAAAQAFANQAGAMAJAHQAKAGAMAAQATAAAMgOQAMgOAAgaQAAgagMgOQgMgOgTAAQgMAAgKAGgAhjBwQgQgIgHgKQgIgKAAgMQAAgHAEgFQAGgEAIAAQAGAAAEADIAHAJQAGAMAJAFQAJAGAQAAQANAAAIgGQAJgGgBgHQABgLgJgFQgJgGgTgEQgXgFgNgHQgOgFgIgLQgIgJAAgOQAAgNAHgLQAIgMAPgGQAOgHAWAAQARAAANAEQANADAIAGQAKAGADAGQAEAIABAGQgBAIgEAEQgEAEgJAAQgHAAgEgDIgLgLQgFgHgHgDQgGgEgLAAQgMAAgIAFQgHAFAAAHQAAAHAGADQAFAFAKACIAaAIQAUAEAMAHQAMAGAGAKQAHAJAAALQAAATgIAMQgJANgQAGQgRAHgYAAQgXgBgRgGgAk7ByQgGgFgDgHIgdhmIgYBUQgFARgGAJQgFAIgNABQgIAAgEgDQgGgDgDgFIgGgMIgmhxQgFgOAAgFQAAgHAGgFQAFgGAIAAQALAAADAGQAEAGAEAOIAcBfIAfhqQACgGAFgEQAGgFAKAAQAJAAAGAFQAFAEACAGIAgBqIAghtQACgFADgDQAFgEAHAAQAIAAAGAGQAFAEABAIQgBAGgFANIgqB5QgCAFgFAFQgFAFgKAAQgJgBgGgEgApnBwQgPgGgLgLQgMgNgFgPQgGgQgBgTQABgUAGgPQAFgQAMgLQALgLAPgHQAQgGATAAQAUAAAPAGQAQAHAMALQAKAMAHAPQAFAPAAAUQAAATgFAQQgHAQgLAMQgLALgQAHQgPAFgUABQgUAAgPgHgApagQQgKAGgEAMQgGANAAARQAAAQAGANQAEAMAKAHQAJAGANAAQAUAAALgOQAMgOgBgaQABgagMgOQgLgOgUAAQgNAAgJAGgArjBdIAAhIQAAgVgGgKQgGgLgRAAQgMAAgIAHQgKAGgEAKQgDAKAAAYIAAA5QgBAMgFAHQgGAHgLAAQgUAAAAgaIAAi5QAAgMAFgHQAFgGAKgBQALABAGAGQAFAHABAMIAABAQAHgKAIgFQAIgFAJgDQAJgDAMAAQAQAAANAHQAMAGAHAOQAFAHABAKIACBnQgBANgFAGQgGAHgKAAQgVAAAAgagAwGBpQgQgJgJgPQgLgPABgPQAAgIAFgHQAGgFAJAAQAIAAAFAEQAFAFADAJQAFALAFAIQAFAHAJAEQAJAGAQAAQAUAAANgKQANgKAAgOQAAgLgHgHQgHgIgLgDIgdgIQgagHgQgHQgQgHgKgNQgKgNAAgVQAAgSAKgPQALgOATgJQAUgHAagBQAVABAQAFQAPAFAKAJQAKAJAFAJQAEAKABAIQgBAJgFAGQgGAHgJAAQgIAAgEgEQgEgEgFgJQgGgNgJgHQgJgHgTAAQgSgBgLAJQgLAHAAAMQAAAGADAFQAFAFAGAEIANAGIAXAFQATAFAPAGQAQAFALAHQALAIAGALQAHANAAARQAAAVgLAQQgLAQgVAKQgUAKgcAAQgjAAgVgOgAKDhQQgHgFAAgKQAAgJAHgGQAGgFAIgBQAJABAHAFQAFAFABAKQgBAKgFAFQgHAGgJAAQgIAAgGgGg");
	this.shape.setTransform(138.4,25.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AVXEdIgbAAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIACAAIAAgIQgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAAhQABAKgIAIQgHAHgKAAIAAAAgATsEdIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgARfEdIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAPUEdIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgANHEdIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAK8EdIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAIwEdIg9AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAGjEdIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAEYEdIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgACLEdIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAAAEdIg8AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA8AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAiMEdIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAkXEdIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAmkEdIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAovEdIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAq8EdIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAtIEdIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAvTEdIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAxgEdIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAzrEdIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgA1VD7QgLAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAVXCsQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA1VBvQgLAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAVXAgQgLAAgHgHQgIgIABgKIAAg7QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA7QABAKgIAIQgHAHgKAAIAAAAgA1VgcQgLAAgHgHQgIgIAAgKIAAg8QAAgKAIgIQAHgHALAAQAKAAAHAHQAIAIAAAKIAAA8QAAAKgIAIQgHAHgKAAIAAAAgAVXhrQgLAAgHgHQgIgIABgKIAAg8QgBgKAIgIQAHgHALAAQAKAAAHAHQAIAIgBAKIAAA8QABAKgIAIQgHAHgKAAIAAAAgA1VioQgLAAgHgHQgIgIAAgKIAAg8IABgDIgBgDQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgjAAIAAApQAAAKgIAIQgHAHgKAAIAAAAgAVJjqIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIAAAKQAAAKgIAIIgEAEQgGADgHAAIgBAAgAS+jqIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAQxjqIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAOmjqIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAMajqIg9AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAKNjqIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAICjqIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAF1jqIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgADqjqIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgABdjqIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAgtjqIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAi6jqIg8AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA8AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAgAlFjqIg8AAQgLAAgHgHQgIgIAAgKQAAgKAIgIQAHgHALAAIA8AAQAKAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIAAAAgAnRjqIg9AAQgKAAgHgHQgIgIABgKQgBgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgApejqIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgArpjqIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAt2jqIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIgBAKQABAKgIAIQgHAHgKAAIgBAAgAwBjqIg9AAQgKAAgHgHQgIgIAAgKQAAgKAIgIQAHgHAKAAIA9AAQAKAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIAAAAgAyOjqIg7AAQgLAAgHgHQgIgIABgKQgBgKAIgIQAHgHALAAIA7AAQALAAAHAHQAIAIAAAKQAAAKgIAIQgHAHgKAAIgBAAg");
	this.shape_1.setTransform(136.65,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AUFEEQAAgKgIgIQgHgHgKAAIg9AAQgKAAgHAHQgIAIAAAKIgdAAQAAgKgIgIQgHgHgLAAIg7AAQgLAAgHAHQgIAIABAKIgfAAQABgKgIgIQgHgHgKAAIg8AAQgLAAgHAHQgIAIAAAKIgdAAQAAgKgIgIQgHgHgLAAIg8AAQgKAAgHAHQgIAIABAKIgfAAQABgKgIgIQgHgHgKAAIg8AAQgLAAgHAHQgIAIAAAKIgdAAQAAgKgIgIQgHgHgKAAIg9AAQgKAAgHAHQgIAIABAKIgfAAQABgKgIgIQgHgHgLAAIg7AAQgLAAgHAHQgIAIABAKIgeAAQAAgKgIgIQgHgHgKAAIg9AAQgKAAgHAHQgIAIAAAKIgeAAQABgKgIgIQgHgHgLAAIg7AAQgLAAgHAHQgIAIABAKIgeAAQAAgKgIgIQgHgHgKAAIg8AAQgKAAgHAHQgIAIAAAKIgdAAQAAgKgIgIQgHgHgLAAIg7AAQgLAAgHAHQgIAIABAKIgfAAQABgKgIgIQgHgHgKAAIg8AAQgLAAgHAHQgIAIAAAKIgdAAQAAgKgIgIQgHgHgLAAIg8AAQgKAAgHAHQgIAIABAKIgfAAQABgKgIgIQgHgHgKAAIg8AAQgLAAgHAHQgIAIAAAKIgdAAQAAgKgIgIQgHgHgLAAIg8AAQgKAAgHAHQgIAIABAKIgfAAQABgKgIgIQgHgHgLAAIg7AAQgLAAgHAHQgIAIABAKIgeAAQAAgKgIgIQgHgHgKAAIg9AAQgKAAgHAHQgIAIAAAKIgeAAQABgKgIgIQgHgHgLAAIg7AAQgLAAgHAHQgIAIABAKIgeAAQAAgKgIgIQgHgHgKAAIg9AAQgKAAgHAHQgIAIAAAKIgVAAIAAgJQALAAAHgHQAIgIAAgKIAAg8QAAgKgIgIQgHgHgLAAIAAgeQALAAAHgHQAIgIAAgKIAAg8QAAgKgIgIQgHgHgLAAIAAgdQALAAAHgHQAIgIAAgKIAAg8QAAgKgIgIQgHgHgLAAIAAgeQALAAAHgHQAIgIAAgKIAAgpIAjAAQAKAAAHgHQAIgIgBgKIAfAAQgBAKAIAIQAHAHALAAIA7AAQALAAAHgHQAIgIgBgKIAeAAQAAAKAIAIQAHAHAKAAIA9AAQAKAAAHgHQAIgIAAgKIAeAAQgBAKAIAIQAHAHALAAIA7AAQALAAAHgHQAIgIgBgKIAeAAQAAAKAIAIQAHAHAKAAIA9AAQAKAAAHgHQAIgIAAgKIAdAAQAAAKAIAIQAHAHALAAIA7AAQALAAAHgHQAIgIgBgKIAfAAQgBAKAIAIQAHAHAKAAIA8AAQALAAAHgHQAIgIAAgKIAdAAQAAAKAIAIQAHAHALAAIA8AAQAKAAAHgHQAIgIgBgKIAfAAQgBAKAIAIQAHAHAKAAIA8AAQALAAAHgHQAIgIAAgKIAdAAQAAAKAIAIQAHAHAKAAIA9AAQAKAAAHgHQAIgIgBgKIAeAAQgBAKAIAIQAHAHALAAIA7AAQALAAAHgHQAIgIgBgKIAeAAQAAAKAIAIQAHAHAKAAIA9AAQAKAAAHgHQAIgIAAgKIAeAAQgBAKAIAIQAHAHALAAIA7AAQALAAAHgHQAIgIgBgKIAeAAQAAAKAIAIQAHAHAKAAIA9AAQAKAAAHgHQAIgIAAgKIAeAAQgBAKAIAIQAHAHALAAIA7AAQALAAAHgHQAIgIgBgKIAfAAQgBAKAIAIQAHAHAKAAIA9AAQAKAAAHgHQAIgIAAgKIAdAAQAAAKAIAIQAHAHALAAIA8AAQAKAAAHgHQAIgIgBgKIAfAAQgBAKAIAIQAHAHAKAAIA8AAQALAAAHgHQAIgIAAgKIAdAAQAAAKAIAIQAHAHALAAIA8AAQAKAAAHgHQAIgIgBgKIAfAAQgBAKAIAIQAHAHALAAIA7AAQAIAAAGgDIAAAUQgLAAgHAHQgIAIABAKIAAA8QgBAKAIAIQAHAHALAAIAAAeQgLAAgHAHQgIAIABAKIAAA7QgBAKAIAIQAHAHALAAIAAAeQgLAAgHAHQgIAIABAKIAAA8QgBAKAIAIQAHAHALAAIAAAeQgLAAgHAHQgIAIABAKIAAAIIgCAAQgLAAgHAHQgIAIABAKg");
	this.shape_2.setTransform(136.65,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,278.3,57);


(lib.s7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73B462").s().p("AgDJcIy2zCIS7ALIS4TCg");
	this.shape.setTransform(120.975,61.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s7, new cjs.Rectangle(0,0,242,122.9), null);


(lib.s6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#512F7B").s().p("AtYAAINYtYINZNYItZNZg");
	this.shape.setTransform(85.725,85.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s6, new cjs.Rectangle(0,0,171.5,171.5), null);


(lib.s5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B82376").s().p("AmstZINYNZItYNag");
	this.shape.setTransform(42.85,85.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s5, new cjs.Rectangle(0,0,85.7,171.5), null);


(lib.s4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B14F").s().p("AmsAAINZtZIAAazg");
	this.shape.setTransform(42.875,85.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s4, new cjs.Rectangle(0,0,85.8,171.5), null);


(lib.s3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3586C5").s().p("AtZNCIAA6bIazazg");
	this.shape.setTransform(85.775,85.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s3, new cjs.Rectangle(0,0,171.6,171.6), null);


(lib.s2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2345F").s().p("A6ztZMA1nAAAI60azg");
	this.shape.setTransform(171.575,85.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s2, new cjs.Rectangle(0,0,343.2,171.6), null);


(lib.s1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB714F").s().p("A6zNaIaz6zIa0azg");
	this.shape.setTransform(171.575,85.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s1, new cjs.Rectangle(0,0,343.2,171.6), null);


(lib.rotatebtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(3.45,3.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjbDcIAAm3IG3AAIAAG3g");
	this.shape.setTransform(22,22);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.dotted = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-1.6,-2.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dotted, new cjs.Rectangle(-1.6,-2.5,587.5,607.5), null);


(lib.pc7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-21.3,-21);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73B462").s().p("AmiGrIAD6aINCNFIAAaag");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc7, new cjs.Rectangle(-41.8,-126.4,83.69999999999999,252.9), null);


(lib.pc6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-20.8,-21.55);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#512F7B").s().p("AtNAAINNtNINONNItONOg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc6, new cjs.Rectangle(-84.5,-84.5,169.1,169.1), null);


(lib.pc5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-22,-21.75);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B82376").s().p("AmmAAINNtNIgEabg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc5, new cjs.Rectangle(-42.2,-84.5,84.5,169.1), null);


(lib.pc4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-23.8,-24.95);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B14F").s().p("AtTmqIamAIItNNNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc4, new cjs.Rectangle(-85.1,-42.7,170.3,85.4), null);


(lib.pc3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(0.55,-38.95);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3586C5").s().p("AtHtEIaPgJIAAabg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc3, new cjs.Rectangle(-84,-84.5,168,169.1), null);


(lib.pc2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-23.75,-24);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2345F").s().p("A6bNOIab6bIacabg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc2, new cjs.Rectangle(-169.1,-84.5,338.29999999999995,169.1), null);


(lib.pc1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-21.75,-23);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB714F").s().p("AtN6aIabaaI6babg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc1, new cjs.Rectangle(-84.5,-169.1,169.1,338.29999999999995), null);


// stage content:
(lib.tangrams = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		let p1 = new lib.pc1();
		let p2 = new lib.pc2();
		let p3 = new lib.pc3();
		let p4 = new lib.pc4();
		let p5 = new lib.pc5();
		let p6 = new lib.pc6();
		let p7 = new lib.pc7();
		this.addChild(p1);
		this.addChild(p2);
		this.addChild(p3);
		this.addChild(p4);
		this.addChild(p5);
		this.addChild(p6);
		this.addChild(p7);
		
		p1.x = 905
		p1.y = 526
		
		p2.x = 990
		p2.y = 610
		
		p3.x = 1075
		p3.y = 441
		
		p4.x = 905
		p4.y = 400
		
		p5.x = 1032
		p5.y = 526
		
		p6.x = 990
		p6.y = 441
		
		p7.x = 1116
		p7.y = 568
		
		
		
		_this = this;
		
		
		var puzzlepieces = [p1, p2, p3, p4, p5, p6, p7];
		//var pcs = [this.p1_t, this.p2_t, this.p3_t, this.p4_t, this.p5_t, this.p6_t, this.p7_t];
		var dropspots = [this.s1, this.s2, this.s3, this.s4, this.s5, this.s6, this.s7];
		var startA = [];
		var startDrag = startDragF.bind(this);
		var stopDrag = stopDragF.bind(this);
		var startRotate = startRotateF.bind(this);
		
		
		/**
		for (var i = 0; i < pcs.length; i++) {
			startA[i] = [pcs[i].x, pcs[i].y];
			alert(startA[i]);
		}
		**/
		
		//var stage = new createjs.Stage('myCanvasId');
		//createjs.Touch.enable(stage, false, true);
		//stage.preventSelection = false;
		//stage.enableMouseOver();
		createjs.Touch.enable(stage);
		
		for (var i = 0; i < puzzlepieces.length; i++) {
			startA[i] = [puzzlepieces[i].x, puzzlepieces[i].y];
			puzzlepieces[i].addEventListener("touchmove", startDrag);
			
			puzzlepieces[i].addEventListener("pressmove", startDrag);
			puzzlepieces[i].addEventListener("pressup", stopDrag);
			puzzlepieces[i].addEventListener("mousedown", onMouseDown);
			puzzlepieces[i].rbtn.addEventListener("click", startRotate);
			puzzlepieces[i].rbtn.visible = false;
			dropspots[i].alpha = 0;
		}
		
		function startDragF(e) {
			var p = stage.globalToLocal(e.stageX, e.stageY);
			e.currentTarget.x = p.x;
			e.currentTarget.y = p.y;
			
		}
		
		function stopDragF(e) {
			var i = puzzlepieces.indexOf(e.currentTarget);
			var pt = e.currentTarget.localToLocal(0, 0, dropspots[i]);
			/**
			if (dropspots[i].hitTest(pt.x, pt.y)) {
				e.currentTarget.x = dropspots[i].x;
				e.currentTarget.y = dropspots[i].y;
				e.currentTarget.removeEventListener("pressmove", startDrag);
				e.currentTarget.mouseEnabled = false;
			} else {
				e.currentTarget.x = startA[i][0];
				e.currentTarget.y = startA[i][1];
			}
		**/
		}
		
		function onMouseDown(e) {
			//alert(_this.getNumChildren());
			_this.setChildIndex(e.currentTarget, _this.getNumChildren() - 1);
			
				var i = puzzlepieces.indexOf(e.currentTarget);
			for (var num = 0; num < puzzlepieces.length; num++) {
			puzzlepieces[num].rbtn.visible = false;
			}
			puzzlepieces[i].rbtn.visible = true;
		
		}
		
		
		
		
		function startRotateF(e) {
			var i = puzzlepieces.indexOf(e.currentTarget.parent);
			puzzlepieces[i].rotation += 45;
		}
		
		
		
		this.hsol.visible = false;
		this.sol.visible = true;
		
		
		this.sol.addEventListener("click", showSol);
		this.hsol.addEventListener("click", hideSol);
		
		function showSol() {
		
			_this.s1.alpha = 1;
			_this.s2.alpha = 1;
			_this.s3.alpha = 1;
			_this.s4.alpha = 1;
			_this.s5.alpha = 1;
			_this.s6.alpha = 1;
			_this.s7.alpha = 1;
			_this.sol.visible = false;
			_this.hsol.visible = true;
		
		}
		
		function hideSol() {
			_this.s1.alpha = 0;
			_this.s2.alpha = 0;
			_this.s3.alpha = 0;
			_this.s4.alpha = 0;
			_this.s5.alpha = 0;
			_this.s6.alpha = 0;
			_this.s7.alpha = 0;
			_this.sol.visible = true;
			_this.hsol.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pz
	this.p7_t = new lib.pc7();
	this.p7_t.name = "p7_t";
	this.p7_t.setTransform(1967.45,605.1);

	this.p6_t = new lib.pc6();
	this.p6_t.name = "p6_t";
	this.p6_t.setTransform(1841,479.95);

	this.p5_t = new lib.pc5();
	this.p5_t.name = "p5_t";
	this.p5_t.setTransform(1925.5,648.75,1,1,0,0,0,42.2,84.5);

	this.p4_t = new lib.pc4();
	this.p4_t.name = "p4_t";
	this.p4_t.setTransform(1756.85,437);

	this.p3_t = new lib.pc3();
	this.p3_t.name = "p3_t";
	this.p3_t.setTransform(1925.8,478.85);

	this.p2_t = new lib.pc2();
	this.p2_t.name = "p2_t";
	this.p2_t.setTransform(1841.85,649.1);

	this.p1_t = new lib.pc1();
	this.p1_t.name = "p1_t";
	this.p1_t.setTransform(1757.25,564.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p1_t},{t:this.p2_t},{t:this.p3_t},{t:this.p4_t},{t:this.p5_t},{t:this.p6_t},{t:this.p7_t}]}).wait(1));

	// dp
	this.s7 = new lib.s7();
	this.s7.name = "s7";
	this.s7.setTransform(184.25,789.6,1,1,0,0,0,121,61.5);

	this.s6 = new lib.s6();
	this.s6.name = "s6";
	this.s6.setTransform(476.75,422.75,1,1,0,0,0,85.7,85.8);

	this.s5 = new lib.s5();
	this.s5.name = "s5";
	this.s5.setTransform(433.95,337,1,1,0,0,0,42.9,85.8);

	this.s4 = new lib.s4();
	this.s4.name = "s4";
	this.s4.setTransform(519.65,337,1,1,0,0,0,42.9,85.8);

	this.s3 = new lib.s3();
	this.s3.name = "s3";
	this.s3.setTransform(391,767.7,1,1,0,0,0,85.8,85.8);

	this.s2 = new lib.s2();
	this.s2.name = "s2";
	this.s2.setTransform(476.8,767.7,1,1,0,0,0,171.6,85.8);

	this.s1 = new lib.s1();
	this.s1.name = "s1";
	this.s1.setTransform(476.8,596.15,1,1,0,0,0,171.6,85.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s1},{t:this.s2},{t:this.s3},{t:this.s4},{t:this.s5},{t:this.s6},{t:this.s7}]}).wait(1));

	// dot
	this.instance = new lib.dotted();
	this.instance.setTransform(355.85,552.3,1,1,0,0,0,292.6,301.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.hsol = new lib.sol();
	this.hsol.name = "hsol";
	this.hsol.setTransform(950.5,841.2);

	this.sol = new lib.sol();
	this.sol.name = "sol";
	this.sol.setTransform(950.5,841.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sol},{t:this.hsol}]}).wait(1));

	// Wording
	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(858.25,774.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(665.2,149.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(627.85,41.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(701.7,521.7,1309.3,374);
// library properties:
lib.properties = {
	id: 'DF8B9106FDC34B75B08D9441DB893B1B',
	width: 1280,
	height: 960,
	fps: 24,
	color: "#7A5E6B",
	opacity: 1.00,
	manifest: [
		{src:"images/tangrams_atlas_1.png?1718271625828", id:"tangrams_atlas_1"},
		{src:"sounds/audk.mp3?1718271625848", id:"audk"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DF8B9106FDC34B75B08D9441DB893B1B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;