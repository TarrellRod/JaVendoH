Sale = new Mongo.Collection("sale");
Sale.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true; 
  },
  remove: function(){
    return true;
  }
});
