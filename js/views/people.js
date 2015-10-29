function processData(data) {
  return data.map(function(item){
    return `
      <li class="person-list-item" data-person-id="${item.objectId}">
        <span>${item.Name}</span>:  friends call me:  <span>${item.nickname}</span>
      </li>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="people-list">
      <h1>People</h1>
      <ul>${processData(data)}</ul>
      <button class="add-user">Add Contact</button>
    </div>
  `;
}