function processData(data) {
  return data.map(function(item){
    return `
      <li class="person-list-item" data-person-id="${item.objectId}">
        <span>${item.Name}</span>:       (nickname:  <span>${item.nickname}</span>
      </li>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="people-list">
      <h1 class="title">My Scary Homies</h1>
      <h2 class = "sub">My Podgies Be Cheezin</h2>
            <button class="add-user">Add Contact</button>
      <ul class="people"${processData(data)}</ul>
    </div>
  `;
}