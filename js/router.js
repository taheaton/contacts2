import Backbone from 'backbone';
import $ from 'jquery';

import {
  Person as PersonModel,
  People as PeopleCollection
} from './resources';

import {
  People as PeopleView, //views
  Person as PersonView, 
  Spinner,
  AddNew as AddNewView
} from './views';

export default Backbone.Router.extend({

  routes: {
    ""            : "redirectToPeople",
    "people"      : "showPeople",
    "person/:id"  : "showPerson",
    "addnew"      : "addNew"
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new PeopleCollection();

    this.$el.on('click', '.person-list-item', (event) => {
      let $li = $(event.currentTarget);
      let personId = $li.data('person-id'); //data-person-id
      this.navigate(`person/${personId}`, {trigger: true});
    });

    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');  
      this.navigate(route, {trigger: true});
    });

    this.$el.on('click', '.add-user', (event) => {
      
      this.navigate("addnew", {trigger: true});
    });

    this.$el.on('click', '.addUser', (event) => { 
      
      let Name = $('.Name').val();
      let residence = $('.residence').val();
      let email = $('.email').val();
      let phone = $('.phone').val();
      let nickname = $('.nickname').val();
      let Hobby = $('.Hobby').val();
      let drinkofchoice = $('.drinkofchoice').val();
      let picture = $('.picture').val();
      
      let newUser = new PersonModel ({
      Name: Name,
      email: email,
      phone: phone,
      residence: residence,
      nickname: nickname,
      Hobby: Hobby,
      drinkofchoice: drinkofchoice,
      picture: picture,
      }); 
      

      this.collection.add(newUser); 
      newUser.save().then(() => { 
        
        this.navigate("", {trigger:true}); 
      }); 

     });  
   
}, 

  start() {
    Backbone.history.start();
    return this;
  }, 

  showSpinner() {
    this.$el.html( Spinner() );
  }, 

  redirectToPeople() {
    this.navigate('people', {
      replace: true,
      trigger: true
    });
  }, 

  showPeople() {
    this.showSpinner();

    this.collection.fetch().then(() => {

      this.$el.html(
        PeopleView(
          this.collection.toJSON()
        )
      );
    });
  }, 

  showPerson(id) {
    let person = this.collection.get(id);

    if (person) {
      this.$el.html(
        PersonView(
          person.toJSON()
        )
      );
    } else {
      this.showSpinner();
      person = this.collection.add({objectId: id});
      person.fetch().then(() => {
        this.$el.html(
          PersonView(
            person.toJSON()
          )
        );
      });
    }
  }, 

  addNew() { 
    
    this.showSpinner();
    this.$el.html(
      AddNewView(
        ) 
      ) 
    
  } 

}); 