Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  waitOn:function(){
      Meteor.subscribe('sale');
    },
    data:{
    'sale': function(){
      return Sale.find();
    }
  }
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
