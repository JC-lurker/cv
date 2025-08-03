(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"tangrams_heart_atlas_1", frames: [[360,417,65,70],[0,417,358,333],[0,0,415,415]]},
		{name:"tangrams_heart_atlas_2", frames: [[883,0,587,587],[883,589,830,414],[0,1593,830,415],[832,1422,415,415],[1298,1005,416,415],[1249,1422,415,415],[0,0,881,881],[0,883,708,708],[710,1005,586,415],[1472,0,414,587]]}
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



(lib.CachedBmp_2 = function() {
	this.initialize(ss["tangrams_heart_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["tangrams_heart_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.initialize(ss["tangrams_heart_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.initialize(ss["tangrams_heart_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.initialize(ss["tangrams_heart_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.initialize(ss["tangrams_heart_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.initialize(ss["tangrams_heart_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.initialize(ss["tangrams_heart_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.initialize(ss["tangrams_heart_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["tangrams_heart_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["tangrams_heart_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["tangrams_heart_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["tangrams_heart_atlas_2"]);
	this.gotoAndStop(9);
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
	this.instance = new lib.Bitmap10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s6, new cjs.Rectangle(0,0,587,587), null);


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
	this.instance = new lib.Bitmap10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s5, new cjs.Rectangle(0,0,587,587), null);


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
	this.instance = new lib.Bitmap9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,414,587);


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
	this.instance = new lib.Bitmap8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,586,415);


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
	this.instance = new lib.Bitmap4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,881,881);


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
	this.instance = new lib.Bitmap6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,708,708);


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
	this.instance = new lib.CachedBmp_2();
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

	// Layer_2
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-20.75,-21.45);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-52,-52,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc6, new cjs.Rectangle(-52,-52,103.8,103.8), null);


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

	// Layer_2
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-20.75,-21.45);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(-52,-52,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc5, new cjs.Rectangle(-52,-52,103.8,103.8), null);


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

	// Layer_2
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-17.75,-24.45);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-52,-52,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc4, new cjs.Rectangle(-52,-52,104,103.8), null);


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

	// Layer_2
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-21.7,-22.4);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-52,-52,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc3, new cjs.Rectangle(-52,-52,103.8,103.8), null);


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

	// Layer_2
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-20.75,-20.45);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-104,-52,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc2, new cjs.Rectangle(-104,-52,207.5,103.8), null);


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

	// Layer_2
	this.rbtn = new lib.rotatebtn();
	this.rbtn.name = "rbtn";
	this.rbtn.setTransform(-21.75,-21.95);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.rotatebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-104,-52,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pc1, new cjs.Rectangle(-104,-52,207.5,103.5), null);


// stage content:
(lib.tangrams_heart = function(mode,startPosition,loop,reversed) {
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
		
		this.addChild(p1);
		this.addChild(p2);
		this.addChild(p3);
		this.addChild(p4);
		this.addChild(p5);
		this.addChild(p6);
		
		
		p1.x = 580
		p1.y = 180
		
		
		p2.x = 580
		p2.y = 288
		
		p3.x = 635
		p3.y = 504
		
		p4.x = 527
		p4.y = 504
		
		p5.x = 527
		p5.y = 396
		
		p6.x = 635
		p6.y = 396
		
		
		
		
		_this = this;
		createjs.Touch.enable(stage);
		
		
		var puzzlepieces = [p1, p2, p3, p4, p5, p6];
		//var pcs = [this.p1_t, this.p2_t, this.p3_t, this.p4_t, this.p5_t, this.p6_t];
		var dropspots = [this.s1, this.s2, this.s3, this.s4, this.s5, this.s6];
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
		
		
		
		for (var i = 0; i < puzzlepieces.length; i++) {
			startA[i] = [puzzlepieces[i].x, puzzlepieces[i].y];
			puzzlepieces[i].addEventListener("pressmove", startDrag);
			puzzlepieces[i].addEventListener("touchmove", startDrag);
			puzzlepieces[i].addEventListener("pressup", stopDrag);
			puzzlepieces[i].addEventListener("touchend", stopDrag);
			puzzlepieces[i].addEventListener("mousedown", onMouseDown);
			puzzlepieces[i].addEventListener("mouseover", onMouseOver);
			puzzlepieces[i].addEventListener("mouseout", onMouseOut);
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
		}
		
		function onMouseOver(e) {
			var i = puzzlepieces.indexOf(e.currentTarget);
			puzzlepieces[i].rbtn.visible = true;
		}
		
		
		function onMouseOut(e) {
			var i = puzzlepieces.indexOf(e.currentTarget);
			puzzlepieces[i].rbtn.visible = false;
		}
		
		
		function startRotateF(e) {
			var i = puzzlepieces.indexOf(e.currentTarget.parent);
			puzzlepieces[i].rotation += 45;
		}
		var _this = this;
		/*
		Mousing over the specified symbol instance executes a function.
		'3' is the number of the times event should be triggered.
		*/
		stage.enableMouseOver(3);
		_this.sol.on('mouseover', function () {
			/*
		Makes the specified object visible or invisible.
		*/
			_this.s1.alpha = 1;
			_this.s2.alpha = 1;
			_this.s3.alpha = 1;
			_this.s4.alpha = 1;
			_this.s5.alpha = 1;
			_this.s6.alpha = 1;
			_this.s7.alpha = 1;
		
		});
		
		_this.sol.on('mouseout', function () {
			/*
		Makes the specified object visible or invisible.
		*/
			_this.s1.alpha = 0;
			_this.s2.alpha = 0;
			_this.s3.alpha = 0;
			_this.s4.alpha = 0;
			_this.s5.alpha = 0;
			_this.s6.alpha = 0;
			_this.s7.alpha = 0;
		
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pz
	this.p6_t = new lib.pc6();
	this.p6_t.name = "p6_t";
	this.p6_t.setTransform(1047.85,399.8);

	this.p5_t = new lib.pc5();
	this.p5_t.name = "p5_t";
	this.p5_t.setTransform(940,399.7,1,1,0,0,0,-0.1,-0.1);

	this.p4_t = new lib.pc4();
	this.p4_t.name = "p4_t";
	this.p4_t.setTransform(939.85,507.8,1,1,0,0,0,0,-0.1);

	this.p3_t = new lib.pc3();
	this.p3_t.name = "p3_t";
	this.p3_t.setTransform(1047.85,507.9);

	this.p2_t = new lib.pc2();
	this.p2_t.name = "p2_t";
	this.p2_t.setTransform(994.1,292.05);

	this.p1_t = new lib.pc1();
	this.p1_t.name = "p1_t";
	this.p1_t.setTransform(993.9,183.95,1,1,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p1_t},{t:this.p2_t},{t:this.p3_t},{t:this.p4_t},{t:this.p5_t},{t:this.p6_t}]}).wait(1));

	// dp
	this.s6 = new lib.s6();
	this.s6.name = "s6";
	this.s6.setTransform(280.65,337.9,0.25,0.25,0,0,0,293.6,293.4);

	this.s5 = new lib.s5();
	this.s5.name = "s5";
	this.s5.setTransform(208.4,410.3,0.25,0.25,0,0,0,293.6,293.4);

	this.s4 = new lib.s4();
	this.s4.name = "s4";
	this.s4.setTransform(330.75,262.8,0.25,0.25,0,0,0,207,293.4);
	new cjs.ButtonHelper(this.s4, 0, 1, 1);

	this.s3 = new lib.s3();
	this.s3.name = "s3";
	this.s3.setTransform(280.75,211.75,0.25,0.25,0,0,0,293,207.6);
	new cjs.ButtonHelper(this.s3, 0, 1, 1);

	this.s2 = new lib.s2();
	this.s2.name = "s2";
	this.s2.setTransform(171.5,300.15,0.25,0.25,0,0,0,440.4,440.4);
	new cjs.ButtonHelper(this.s2, 0, 1, 1);

	this.s1 = new lib.s1();
	this.s1.name = "s1";
	this.s1.setTransform(118.95,248.35,0.25,0.25,0,0,0,353.8,354);
	new cjs.ButtonHelper(this.s1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s1},{t:this.s2},{t:this.s3},{t:this.s4},{t:this.s5},{t:this.s6}]}).wait(1));

	// dot
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(27,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.sol = new lib.sol();
	this.sol.name = "sol";
	this.sol.setTransform(112.05,522.7,0.7106,0.7106);
	new cjs.ButtonHelper(this.sol, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.sol).wait(1));

	// Wording
	this.text = new cjs.Text("Semi-circles and quarter circles.", "36px 'Arial Rounded MT Bold'", "#333333");
	this.text.lineHeight = 44;
	this.text.lineWidth = 590;
	this.text.parent = this;
	this.text.setTransform(78,35.75);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(402,333.8,697.5999999999999,227.7);
// library properties:
lib.properties = {
	id: 'DF8B9106FDC34B75B08D9441DB893B1B',
	width: 750,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/tangrams_heart_atlas_1.png?1718266867043", id:"tangrams_heart_atlas_1"},
		{src:"images/tangrams_heart_atlas_2.png?1718266867044", id:"tangrams_heart_atlas_2"}
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