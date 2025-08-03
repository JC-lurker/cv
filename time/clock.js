(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"clock_atlas_1", frames: [[1020,514,61,59],[636,514,382,141],[0,636,382,141],[1020,575,61,59],[1316,0,413,505],[0,0,800,510],[1083,514,61,32],[1316,507,390,332],[384,636,234,131],[620,657,444,49],[802,0,512,512],[0,512,634,122]]}
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



(lib.CachedBmp_4 = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bell = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.clock_1 = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.message = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.triangle = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.window = function() {
	this.initialize(ss["clock_atlas_1"]);
	this.gotoAndStop(11);
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


(lib.win = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.window();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,634,122);


(lib.tint = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.145)").s().p("AMxDlIAAisIAygxIAQARIAADlQgJAgggAJgAJEEnQghgJgIggIBCgZIDEAAIAZBCgAGIDlIAAisIAygxIAQARIAADlQgJAgggAJgACbEnQghgJgIggIBCgZIDEAAIAZBCgAizDlIAAisIAygxIAQARIAADlQgJAgggAJgAmgEnQghgJgIggIBCgZIDEAAIAZBCgApcDlIAAisIAygxIAQARIAADlQgJAgggAJgAtJEnQghgJgIggIBCgZIDEAAIAZBCgAIbAZIAQgRIAyAxIAACcIhCAZgAByAZIAQgRIAyAxIAACcIhCAZgAnJAZIAQgRIAyAxIAACcIhCAZgAtyAZIAQgRIAyAxIAACcIhCAZgAggCkIAAhCIBBAAIAABCgAJdAhIghghIAhggIDUAAIAhAgIghAhgAC0AhIghghIAhggIDUAAIAhAgIghAhgAmHAhIghghIAhggIDUAAIAhAgIghAhgAswAhIghghIAhggIDUAAIAhAgIghAhgAMxg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgAIbgXIAAjVIBCAZIAACbIgyAxgAGIg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgABygXIAAjVIBCAZIAACbIgyAxgAizg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgAnJgXIAAjVIBCAZIAACbIgyAxgApcg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgAtygXIAAjVIBCAZIAACbIgyAxgAgghhIAAhCIBBAAIAABCgAJdjkIhBgYQAIghAhgJID1AAIgZBCgAC0jkIhBgYQAIghAhgJID1AAIgZBCgAmHjkIhBgYQAIghAhgJID1AAIgZBCgAswjkIhBgYQAIghAhgJID1AAIgZBCg");
	this.shape.setTransform(88.275,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tint, new cjs.Rectangle(0,0,176.6,59), null);


(lib.set_button = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.triangle();
	this.instance.setTransform(0,0,0.0588,0.0588);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.1,30.1);


(lib.pm = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D597A").s().p("AiYCAIAAj/IExAAIAAD/g");
	this.shape.setTransform(15.3,12.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,29.5);


(lib.msbox = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.message();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,131);


(lib.header = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.title();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,444,49);


(lib.clockface = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.clock_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,332);


(lib.blinker = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.765)").s().p("AggCkIAAhCIBBAAIAABCgAgghhIAAhCIBBAAIAABCg");
	this.shape.setTransform(3.275,16.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},13).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.6,32.8);


(lib.bbb = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bell();
	this.instance.setTransform(0,0,0.2317,0.2317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.7,117);


(lib.bb = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,32);


(lib.b = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(172,133,33,0.498)").ss(5,1,1).p("ADSBPIBHhAAgBAPIAFhdAjZBPIg/hH");
	this.shape.setTransform(28.075,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(172,133,33,0.498)").ss(5,1,1).p("ADSBPIBHhAAkYAIIA/BHAgBAPIAFhd");
	this.shape_1.setTransform(28.075,7.2);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(172,133,33,0.498)").ss(5,1,1).p("ADSBPIBHg/AkYAIIA/BHAgBAQIAFhe");
	this.shape_2.setTransform(28.075,6.5);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(172,133,33,0.498)").ss(5,1,1).p("ADSBPIBHhAAjZBPIg/hHAgBAPIAFhd");
	this.shape_3.setTransform(28.075,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:0.9}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{y:10.9}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(9).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:5.8},0).to({_off:true},1).wait(1).to({_off:false,y:4.4},0).to({_off:true},1).wait(1).to({_off:false,y:3},0).to({_off:true},1).wait(3).to({_off:false,y:1.9},0).wait(1).to({y:2.9},0).wait(1).to({y:3.9},0).wait(1).to({y:4.9},0).wait(1).to({y:5.9},0).wait(1).to({y:6.9},0).wait(1).to({y:7.9},0).wait(1).to({y:8.9},0).wait(1).to({y:9.9},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(10).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:5.1},0).to({_off:true},1).wait(1).to({_off:false,y:3.7},0).to({_off:true},1).wait(1).to({_off:false,y:2.3},0).wait(1).to({y:1.6},0).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-9.5,61.2,30.8);


(lib.am = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D597A").s().p("AiYCAIAAj/IExAAIAAD/g");
	this.shape.setTransform(15.3,12.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,29.5);


(lib._9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.757)").s().p("ABqDlIAAisIAygxIAQARIAADlQgJAgggAJgAiCEnQghgJgIggIBCgZIDDAAIAZBCgAhpAhIghghIAhggIDTAAIAhAgIghAhgABqg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgAirgXIAAjVIBCAZIAACbIgyAxgAhpjkIhBgYQAIghAhgJID0AAIgZBCg");
	this.shape.setTransform(17.175,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib._8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.757)").s().p("ABqDlIAAisIAygxIAQARIAADlQgJAgggAJgAiCEnQghgJgIggIBCgZIDDAAIAZBCgAirAZIAQgRIAyAxIAACcIhCAZgAhpAhIghghIAhggIDTAAIAhAgIghAhgABqg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgAirgXIAAjVIBCAZIAACbIgyAxgAhpjkIhBgYQAIghAhgJID0AAIgZBCg");
	this.shape.setTransform(17.175,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib._7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.757)").s().p("ABqDlIAAisIAygxIAQARIAADlQgJAgggAJgABqg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgAirgXIAAjVIBCAZIAACbIgyAxgAhpjkIhBgYQAIghAhgJID0AAIgZBCg");
	this.shape.setTransform(17.175,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib._6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.757)").s().p("ABqDlIAAisIAygxIAQARIAADlQgJAgggAJgAiCEnQghgJgIggIBCgZIDDAAIAZBCgAirAZIAQgRIAyAxIAACcIhCAZgAhpAhIghghIAhggIDTAAIAhAgIghAhgAirgXIAAjVIBCAZIAACbIgyAxgAhpjkIhBgYQAIghAhgJIEMAAIgYBCg");
	this.shape.setTransform(17.175,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib._5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.757)").s().p("ABqDlIAAisIAygxIAQARIAADlQgJAgggAJgAiCEnQghgJgIggIBCgZIDDAAIAZBCgAhpAhIghghIAhggIDTAAIAhAgIghAhgAirgXIAAjVIBCAZIAACbIgyAxgAhpjkIhBgYQAIghAhgJIEMAAIgYBCg");
	this.shape.setTransform(17.175,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib._4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.757)").s().p("ABqDlIAAisIAygxIAQARIAADlQgJAgggAJgAhpAhIghghIAhggIDTAAIAhAgIghAhgABqg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgAirgXIAAjuIBCAZIAAC0IgyAxg");
	this.shape.setTransform(17.175,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib._3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.757)").s().p("ABqDlIAAisIAygxIAQARIAADlQgJAgggAJgAiCEnQghgJgIggIBCgZIDDAAIAZBCgAhpAhIghghIAhggIDTAAIAhAgIghAhgABqg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgAhpjkIhBgYQAIghAhgJID0AAIgZBCg");
	this.shape.setTransform(17.175,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib._2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.757)").s().p("AiCEnQghgJgIggIBCgZIDcAAIAYBCgAirAZIAQgRIAyAxIAACcIhCAZgAhpAhIghghIAhggIDTAAIAhAgIghAhgABqg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgAhpjkIhBgYQAIghAhgJID0AAIgZBCg");
	this.shape.setTransform(17.175,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib._1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.757)").s().p("AggDlIAAisIAwgxIARARIAADlQgJAggfAJgAggg4IAAisIAZhCQAfAJAJAhIAADlIgRAQg");
	this.shape.setTransform(3.275,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.6,59);


(lib._0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,255,102,0.761)").s().p("ABqDlIAAisIAygxIAQARIAADlQgJAgggAJgAiCEnQghgJgIggIBCgZIDDAAIAZBCgAirAZIAQgRIAyAxIAACcIhCAZgABqg4IAAisIAZhCQAgAJAJAhIAADlIgQAQgAirgXIAAjVIBCAZIAACbIgyAxgAhpjkIhBgYQAIghAhgJID0AAIgZBCg");
	this.shape.setTransform(17.175,29.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib.tenths_hours = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// _
	this.instance = new lib._1("synched",0);
	this.instance.setTransform(31,29.4,1,1,0,0,0,3.2,29.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// _
	this.instance_1 = new lib._0("synched",0);
	this.instance_1.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib.tenth_mins = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// _
	this.instance = new lib._5("synched",0);
	this.instance.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1));

	// _
	this.instance_1 = new lib._4("synched",0);
	this.instance_1.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// _
	this.instance_2 = new lib._3("synched",0);
	this.instance_2.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// _
	this.instance_3 = new lib._2("synched",0);
	this.instance_3.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// _
	this.instance_4 = new lib._1("synched",0);
	this.instance_4.setTransform(31,29.4,1,1,0,0,0,3.2,29.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true},1).wait(4));

	// _
	this.instance_5 = new lib._0("synched",0);
	this.instance_5.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib.ones_mins = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// _
	this.instance = new lib._9("synched",0);
	this.instance.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1));

	// _
	this.instance_1 = new lib._8("synched",0);
	this.instance_1.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({_off:true},1).wait(1));

	// _
	this.instance_2 = new lib._7("synched",0);
	this.instance_2.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({_off:true},1).wait(2));

	// _
	this.instance_3 = new lib._6("synched",0);
	this.instance_3.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({_off:true},1).wait(3));

	// _
	this.instance_4 = new lib._5("synched",0);
	this.instance_4.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({_off:true},1).wait(4));

	// _
	this.instance_5 = new lib._4("synched",0);
	this.instance_5.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({_off:true},1).wait(5));

	// _
	this.instance_6 = new lib._3("synched",0);
	this.instance_6.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({_off:true},1).wait(6));

	// _
	this.instance_7 = new lib._2("synched",0);
	this.instance_7.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({_off:true},1).wait(7));

	// _
	this.instance_8 = new lib._1("synched",0);
	this.instance_8.setTransform(31,29.4,1,1,0,0,0,3.2,29.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true},1).wait(8));

	// _
	this.instance_9 = new lib._0("synched",0);
	this.instance_9.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib.ones_hours = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// _
	this.instance = new lib._9("synched",0);
	this.instance.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1));

	// _
	this.instance_1 = new lib._8("synched",0);
	this.instance_1.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({_off:true},1).wait(1));

	// _
	this.instance_2 = new lib._7("synched",0);
	this.instance_2.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({_off:true},1).wait(2));

	// _
	this.instance_3 = new lib._6("synched",0);
	this.instance_3.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({_off:true},1).wait(3));

	// _
	this.instance_4 = new lib._5("synched",0);
	this.instance_4.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({_off:true},1).wait(4));

	// _
	this.instance_5 = new lib._4("synched",0);
	this.instance_5.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({_off:true},1).wait(5));

	// _
	this.instance_6 = new lib._3("synched",0);
	this.instance_6.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({_off:true},1).wait(6));

	// _
	this.instance_7 = new lib._2("synched",0);
	this.instance_7.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({_off:true},1).wait(7));

	// _
	this.instance_8 = new lib._1("synched",0);
	this.instance_8.setTransform(31,29.4,1,1,0,0,0,3.2,29.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true},1).wait(8));

	// _
	this.instance_9 = new lib._0("synched",0);
	this.instance_9.setTransform(17.2,29.4,1,1,0,0,0,17.2,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.4,59);


(lib.error_mc2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_99 = function() {
		var _this = this;
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.parent.error_mc2.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(18.05,15.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Layer_1
	this.instance_1 = new lib.msbox("synched",0);
	this.instance_1.setTransform(117,65.5,1,1,0,0,0,117,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({startPosition:0},0).to({alpha:0},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,131);


(lib.error_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_99 = function() {
		var _this = this;
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.parent.error_mc1.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(18.05,15.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Layer_1
	this.instance_1 = new lib.msbox("synched",0);
	this.instance_1.setTransform(117,65.5,1,1,0,0,0,117,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({startPosition:0},0).to({alpha:0},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,131);


(lib.btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bb("synched",0);
	this.instance.setTransform(30.5,16,1,1,0,0,0,30.5,16);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,65,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:14},0).wait(1).to({y:17},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(0.7,0.7,0.7,1,76.5,0,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-2, y:-2, w:65, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-2, y:-2, w:65, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:2, x:-2, y:-2, w:65, h:36});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,61,35);


(lib.bell_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bbb("synched",0);
	this.instance.setTransform(47.9,58.5,1,1,-14.9992,0,0,47.9,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:14.9998,x:47.85,y:58.6},4).to({rotation:-14.9992,x:47.9,y:58.5},3).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9966").s().p("AhiBjQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5QAAA6gpApQgpApg6AAQg5AAgpgpg");
	this.shape.setTransform(33.85,113.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:40.35,y:114.15},0).wait(1).to({x:46.85,y:114.95},0).wait(1).to({x:53.3,y:115.7},0).wait(1).to({x:59.8,y:116.45},0).wait(1).to({x:52.15,y:116.1},0).wait(1).to({x:44.5,y:115.75},0).wait(1).to({x:36.85,y:115.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-10.3,122.7,140.8);


(lib.correct = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_29 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer_3
	this.correctMessage = new cjs.Text("", "28px 'Arial Rounded MT Bold'", "#FF9966");
	this.correctMessage.name = "correctMessage";
	this.correctMessage.textAlign = "center";
	this.correctMessage.lineHeight = 34;
	this.correctMessage.lineWidth = 627;
	this.correctMessage.parent = this;
	this.correctMessage.setTransform(407.6,281.05);
	this.correctMessage._off = true;

	this.timeline.addTween(cjs.Tween.get(this.correctMessage).wait(14).to({_off:false},0).wait(16));

	// Layer_2
	this.instance = new lib.bell_1();
	this.instance.setTransform(396.85,160.5,0.1686,0.1686,0,0,0,47.8,58.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:47.9,scaleX:1,scaleY:1,x:396.9},5).wait(16));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8446E8").s().p("AibBjIAAjGIE3AAIAADGg");
	this.shape.setTransform(400,255.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8446E8").s().p("ApGF0IAArnISNAAIAALng");
	this.shape_1.setTransform(400,255.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8446E8").s().p("AvxKEIAA0HIfjAAIAAUHg");
	this.shape_2.setTransform(400,255.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8446E8").s().p("A2dOUIAA8nMAs7AAAIAAcng");
	this.shape_3.setTransform(400,255.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8446E8").s().p("A9HSlMAAAglJMA6PAAAMAAAAlJg");
	this.shape_4.setTransform(400,255.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8446E8").s().p("EgjzAW1MAAAgtpMBHnAAAMAAAAtpg");
	this.shape_5.setTransform(400,255.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8446E8").s().p("EgqdAbFMAAAg2JMBU8AAAMAAAA2Jg");
	this.shape_6.setTransform(400,255.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8446E8").s().p("EgxJAfWMAAAg+qMBiTAAAMAAAA+qg");
	this.shape_7.setTransform(400,255);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8446E8").s().p("Eg30AjmMAAAhHLMBvpAAAMAAABHLg");
	this.shape_8.setTransform(400,255.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8446E8").s().p("Eg+fAn2MAAAhPrMB8/AAAMAAABPrg");
	this.shape_9.setTransform(400,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,510);


// stage content:
(lib.clock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,59];
	// timeline functions:
	this.frame_0 = function() {
		this.error_mc1.visible = false;
		this.error_mc2.visible = false;
		this.correctMc.visible = false;
		
		// Function to generate a random number between min and max
		function getRandomNumber(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		// Generate a random number between 100 and 700
		var randomHour = getRandomNumber(7, 9);
		
		// Define your list (array) of items
		var minutes = ["10", "15", "20"];
		
		// Function to get a random item from the list
		function getRandomItems(arr) {
			var randomIndex = Math.floor(Math.random() * arr.length);
			return arr[randomIndex];
		}
		
		// Get a random item from the list
		var randomMinutes1 = getRandomItems(minutes);
		var randomMinutes2 = getRandomItems(minutes);
		
		// Define your list (array) of items
		var time = ["quarter to", "quarter past", "half past", "10 to", "10 past", "20 to", "20 past"];
		var actualindigits = ["45", "15", "30", "50", "10", "40", "20"];
		
		
		// Get a random item from the list
		var timeMin = getRandomItems(time);
		
		var actualMin = actualindigits.at(time.indexOf(timeMin));
		
		function getHour() {
			if (timeMin.endsWith("to")) {
				return randomHour - 1;
			} else {
				return randomHour
			}
		}
		
		var actualHour = getHour();
		
		
		this.message.text = "She needs to arrive at school at " + timeMin + " " + randomHour + " in the morning. It takes her " + randomMinutes1 + " mintues to get dressed and " + randomMinutes2 + " mintues to travel."
		
		
		this.am.alpha = 0.2;
		var day = "PM";
		var attempt;
		
		
		function calculateStartTime(endTime, difference) {
		    // Convert 12-hour time format to minutes (including AM/PM)
		    function timeToMinutes(time) {
		        let [timePart, modifier] = time.split(' ');
		        let [hours, minutes] = timePart.split(':').map(Number);
		
		        if (modifier === 'PM' && hours !== 12) {
		            hours += 12;
		        }
		        if (modifier === 'AM' && hours === 12) {
		            hours = 0;
		        }
		
		        return hours * 60 + minutes;
		    }
		
		    // Convert minutes back to 12-hour HH:MM format with AM/PM
		    function minutesToTime(minutes) {
		        let hours = Math.floor(minutes / 60) % 24;
		        let mins = minutes % 60;
		        const modifier = hours >= 12 ? 'PM' : 'AM';
		
		        hours = hours % 12;
		        hours = hours ? hours : 12; // Convert hour '0' to '12'
		
		        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')} ${modifier}`;
		    }
		
		    const endMinutes = timeToMinutes(endTime);
		    const diffMinutes = timeToMinutes(difference);
		
		    // Calculate the start time in minutes
		    let startMinutes = endMinutes - diffMinutes;
		
		    // Handle case where startMinutes is negative (crossing midnight)
		    if (startMinutes < 0) {
		        startMinutes += 24 * 60; // Add a full day in minutes
		    }
		
		    return minutesToTime(startMinutes);
		}
		
		
		var endTime = String(actualHour) + ":" + String(actualMin) + " AM";
		var difference = "0:" + String(Number(randomMinutes1) + Number(randomMinutes2));
		var answer = calculateStartTime(endTime, difference);
		
		
		//alert(answer);
		
		
		var _this = this;
		
		_this.am.on('click', function () {
			_this.am.alpha = 1;
			_this.pm.alpha = 0.2;
			day = "AM";
		});
		
		_this.pm.on('click', function () {
			_this.pm.alpha = 1;
			_this.am.alpha = 0.2;
			day = "PM";
		});
		
		_this.set_btn_up1.on('click', function () {
			_this.one_mins.gotoAndStop(_this.one_mins.currentFrame + 1);
		});
		
		_this.set_btn_down1.on('click', function () {
			_this.one_mins.gotoAndStop(_this.one_mins.currentFrame - 1);
		});
		
		_this.set_btn_up2.on('click', function () {
			_this.tenth_mins.gotoAndStop(_this.tenth_mins.currentFrame + 1);
		});
		
		_this.set_btn_down2.on('click', function () {
			_this.tenth_mins.gotoAndStop(_this.tenth_mins.currentFrame - 1);
		});
		
		_this.set_btn_up3.on('click', function () {
			_this.one_hour.gotoAndStop(_this.one_hour.currentFrame + 1);
		});
		
		_this.set_btn_down3.on('click', function () {
			_this.one_hour.gotoAndStop(_this.one_hour.currentFrame - 1);
		});
		
		_this.set_btn_up4.on('click', function () {
			_this.tenth_hour.gotoAndStop(_this.tenth_hour.currentFrame + 1);
		});
		
		_this.set_btn_down4.on('click', function () {
			_this.tenth_hour.gotoAndStop(_this.tenth_hour.currentFrame - 1);
		});
		
		_this.setalarm.on('click', function () {
			attempt = String(_this.tenth_hour.currentFrame) + String(_this.one_hour.currentFrame) + ':' + String(_this.tenth_mins.currentFrame) + String(_this.one_mins.currentFrame) + ' ' + day;
			if (attempt == answer) {
			_this.correctMc.correctMessage.text = "Thanks to you, Emily gets to school on time. The alarm should be set for " + answer +".\n You have set the alarm at the exact time."
			_this.correctMc.visible = true;
			_this.correctMc.gotoAndPlay();
			} else if (day == "PM") {
			_this.error_mc1.visible = true;
			_this.error_mc1.gotoAndPlay();
			} else if (attempt != answer){
			_this.error_mc2.visible = true;
			_this.error_mc2.gotoAndPlay();
			}
		});
	}
	this.frame_59 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// correct
	this.correctMc = new lib.correct();
	this.correctMc.name = "correctMc";
	this.correctMc.setTransform(400,255,1,1,0,0,0,400,255);
	this.correctMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.correctMc).wait(21).to({_off:false},0).wait(39));

	// error
	this.error_mc2 = new lib.error_mc2();
	this.error_mc2.name = "error_mc2";
	this.error_mc2.setTransform(616,273.5,1,1,0,0,0,117,65.5);

	this.error_mc1 = new lib.error_mc();
	this.error_mc1.name = "error_mc1";
	this.error_mc1.setTransform(616,273.5,1,1,0,0,0,117,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.error_mc1},{t:this.error_mc2}]},21).wait(39));

	// ampm
	this.pm = new lib.pm();
	this.pm.name = "pm";
	this.pm.setTransform(412.3,272.75);
	new cjs.ButtonHelper(this.pm, 0, 1, 2, false, new lib.pm(), 3);

	this.am = new lib.am();
	this.am.name = "am";
	this.am.setTransform(392.45,287.45,1,1,0,0,0,15.3,14.7);
	new cjs.ButtonHelper(this.am, 0, 1, 2, false, new lib.am(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.am},{t:this.pm}]},21).wait(39));

	// up
	this.set_btn_down4 = new lib.set_button();
	this.set_btn_down4.name = "set_btn_down4";
	this.set_btn_down4.setTransform(337.2,418.6,1,1,180,0,0,15.1,15.1);
	new cjs.ButtonHelper(this.set_btn_down4, 0, 1, 1);

	this.set_btn_up4 = new lib.set_button();
	this.set_btn_up4.name = "set_btn_up4";
	this.set_btn_up4.setTransform(337.3,317.3,1,1,0,0,0,15.1,15.1);
	new cjs.ButtonHelper(this.set_btn_up4, 0, 1, 1);

	this.set_btn_down3 = new lib.set_button();
	this.set_btn_down3.name = "set_btn_down3";
	this.set_btn_down3.setTransform(380.4,418.6,1,1,180,0,0,15.1,15.1);
	new cjs.ButtonHelper(this.set_btn_down3, 0, 1, 1);

	this.set_btn_up3 = new lib.set_button();
	this.set_btn_up3.name = "set_btn_up3";
	this.set_btn_up3.setTransform(380.5,317.3,1,1,0,0,0,15.1,15.1);
	new cjs.ButtonHelper(this.set_btn_up3, 0, 1, 1);

	this.set_btn_down2 = new lib.set_button();
	this.set_btn_down2.name = "set_btn_down2";
	this.set_btn_down2.setTransform(436.55,418.6,1,1,180,0,0,15.1,15.1);
	new cjs.ButtonHelper(this.set_btn_down2, 0, 1, 1);

	this.set_btn_up2 = new lib.set_button();
	this.set_btn_up2.name = "set_btn_up2";
	this.set_btn_up2.setTransform(436.65,317.3,1,1,0,0,0,15.1,15.1);
	new cjs.ButtonHelper(this.set_btn_up2, 0, 1, 1);

	this.set_btn_down1 = new lib.set_button();
	this.set_btn_down1.name = "set_btn_down1";
	this.set_btn_down1.setTransform(479.75,418.6,1,1,180,0,0,15.1,15.1);
	new cjs.ButtonHelper(this.set_btn_down1, 0, 1, 1);

	this.set_btn_up1 = new lib.set_button();
	this.set_btn_up1.name = "set_btn_up1";
	this.set_btn_up1.setTransform(479.85,317.3,1,1,0,0,0,15.1,15.1);
	new cjs.ButtonHelper(this.set_btn_up1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.set_btn_up1},{t:this.set_btn_down1},{t:this.set_btn_up2},{t:this.set_btn_down2},{t:this.set_btn_up3},{t:this.set_btn_down3},{t:this.set_btn_up4},{t:this.set_btn_down4}]},21).wait(39));

	// dDigits
	this.tenth_hour = new lib.tenths_hours();
	this.tenth_hour.name = "tenth_hour";
	this.tenth_hour.setTransform(337.45,368.85,1,1,0,0,0,17.2,29.4);

	this.one_hour = new lib.ones_hours();
	this.one_hour.name = "one_hour";
	this.one_hour.setTransform(379.9,368.85,1,1,0,0,0,17.2,29.4);

	this.tenth_mins = new lib.tenth_mins();
	this.tenth_mins.name = "tenth_mins";
	this.tenth_mins.setTransform(437.15,368.85,1,1,0,0,0,17.2,29.4);

	this.one_mins = new lib.ones_mins();
	this.one_mins.name = "one_mins";
	this.one_mins.setTransform(479.65,368.85,1,1,0,0,0,17.2,29.4);

	this.instance = new lib.blinker();
	this.instance.setTransform(408.45,368.9,1,1,0,0,0,3.2,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.one_mins},{t:this.tenth_mins},{t:this.one_hour},{t:this.tenth_hour}]},21).wait(39));

	// digits
	this.instance_1 = new lib.tint();
	this.instance_1.setTransform(408.45,368.8,1,1,0,0,0,88.2,29.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).wait(39));

	// b
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(423.6,175,1,1,0,0,0,28.1,7.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).wait(39));

	// btn
	this.setalarm = new lib.btn();
	this.setalarm.name = "setalarm";
	this.setalarm.setTransform(424.8,203,1,1,0,0,0,30.5,16);
	this.setalarm._off = true;
	new cjs.ButtonHelper(this.setalarm, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.setalarm).wait(21).to({_off:false},0).wait(39));
	this.setalarm.addEventListener("tick", AdobeAn.handleFilterCache);

	// clock
	this.instance_3 = new lib.clockface("synched",0);
	this.instance_3.setTransform(415.05,309,0.0874,0.0874,0,0,0,195,165.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({regY:166,scaleX:1,scaleY:1,x:415},6).wait(39));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B0C52").s().p("AziCRQoHg8AAhVQAAhUIHg8QIGg8LcAAQLdAAIHA8QIGA8AABUQAABVoGA8QoHA8rdAAQrcAAoGg8g");
	this.shape.setTransform(417,457.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21).to({_off:false},0).wait(39));

	// txt
	this.message = new cjs.Text("She needs to arrive at school at {TIME}.\nIt takes her 15 minutes to get dressed and 15 minutes to travel.", "18px 'Arial Rounded MT Bold'", "#3B0C52");
	this.message.name = "message";
	this.message.textAlign = "center";
	this.message.lineHeight = 23;
	this.message.lineWidth = 555;
	this.message.parent = this;
	this.message.setTransform(418.45,86.05);
	this.message._off = true;

	this.timeline.addTween(cjs.Tween.get(this.message).wait(21).to({_off:false},0).wait(39));

	// header
	this.instance_4 = new lib.header("synched",0);
	this.instance_4.setTransform(423,-51.5,1,1,0,0,0,222,24.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({y:53.5},7).wait(45));

	// win
	this.instance_5 = new lib.win("synched",0);
	this.instance_5.setTransform(416.05,111.1,0.148,0.148,0,0,0,317.2,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:317,regY:61,scaleX:1,scaleY:1,x:416,y:111},9).wait(51));

	// bg
	this.instance_6 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,179,400,331);
// library properties:
lib.properties = {
	id: '82BC14900733438CAEC28F23F52610C4',
	width: 800,
	height: 510,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/clock_atlas_1.png?1725849693150", id:"clock_atlas_1"}
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
an.compositions['82BC14900733438CAEC28F23F52610C4'] = {
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