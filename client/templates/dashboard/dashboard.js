Template.dashboard.rendered = function() {

};

Template.dashboard.helpers({
  addSale: function(){
     return Sale.find();

  },

});

Template.dashboard.events({
  "submit form": function(event, template){
     event.preventDefault();
     var saleName = event.target.saleName.value;
     var saleLoc = event.target.saleLoc.value;
     var address = event.target.address.value;
     var address2 = event.target.address2.value;
     var zip = event.target.zip.value;
     var saleDesc = event.target.saleDesc.value;

  Sale.insert({
    saleName:saleName,
    location:saleLoc,
    address:address,
    address2:address2,
    zip:zip,
    description:saleDesc
  });
  event.target.saleName.value ="";
  event.target.saleLoc.value ="";
  event.target.address.value ="";
  event.target.address2.value ="";
  event.target.zip.value ="";
  event.target.saleDesc.value = "";
  return false;
  }
});
