var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.color = Object.getPrototypeOf(HoneyMakerBee.prototype).color;
  this.food = Object.getPrototypeOf(HoneyMakerBee.prototype).food;
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.eat = function() {
  Object.getPrototypeOf(HoneyMakerBee.prototype).eat;
};

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
};