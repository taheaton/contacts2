export default function(data) {
  return `
    <div class="person">
      
    <img src="${data.picture}">
    <ul class = "stuff">
      <li class='name'><i class="fa fa-user"></i>${data.Name}
      </li><br>
      <li class='nickname'><i class="fa fa-facebook-official"></i>  Vous appeler ${data.nickname}
      </li><br>
      <li class='phone'><i class="fa fa-phone"></i>  ${data.phone}
      </li><br>
      <li class='Hobby'><i class="fa fa-heart"></i>  ${data.Hobby}
      </li><br>
      <li class='residence'><i class="fa fa-home"></i>  ${data.residence}
      </li><br>
      <li class='drinkofchoice'><i class="fa fa-glass"></i>  ${data.drinkofchoice}
      </li><br></ul>
      <button class="back-button" data-to="people">
        <i class="fa fa-arrow-left">  back</i>
      </button>
    </div>
  `;
}