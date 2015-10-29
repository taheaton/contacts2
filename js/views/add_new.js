export default function(data) {
  return `
    <button class="back-button" data-to="people">
        <i class="fa fa-arrow-left"></i>
    </button>

    <div class="people-list">
     <h1>Add a Contact</h1>
     <form>
      <input type="text" class="Name" placeholder="Name" val="">
      <br>
      <input type="text" class="picture" placeholder="picture" val="">
      <br>
      <input type="text" class="email" placeholder="email">
      <br> 
      <input type="text" class="phone" placeholder="phone"> 
      <br>
      <input type="text" class="residence" placeholder="residence">
      <input type="text" class="nickname" placeholder="nickname">
      <br> 
      <input type="text" class="Hobby" placeholder="Hobby"> 
      <br>
      <input type="text" class="drinkofchoice" placeholder="drinkofchoice">  
     </form>


      
      <button class="addUser" type="submit">Add Contact</button>
    </div>
  `;
}