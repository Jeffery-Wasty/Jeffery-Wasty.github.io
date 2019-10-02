var showAddArtist = () => {
  let add_artist_box = document.getElementById('add-artist-box');
  add_artist_box.style.display =
    !add_artist_box.style.display || add_artist_box.style.display == 'none'
      ? 'block'
      : 'none';
  document.getElementById('artist-form').reset();
};

var deleteArtist = the_button => {
  the_button.parentElement.parentElement.remove();
};

var addArtist = () => {
  var h5 = document.createElement('h5');
  h5.classList = 'mb-1';
  let name_info = document.getElementById('name-field');
  h5.textContent = name_info.value;

  var div_inner = document.createElement('div');
  div_inner.classList = 'd-flex w-100 justify-content-between';
  div_inner.appendChild(h5);

  var p = document.createElement('p');
  p.classList = 'mb-1';
  let about_info = document.getElementById('about-field');
  p.textContent = about_info.value;

  var delete_button = document.createElement('button');
  delete_button.classList = 'delete-button btn btn-danger';
  delete_button.style.paddingLeft = '5%';
  delete_button.style.paddingRight = '5%';
  delete_button.type = 'button';
  delete_button.onclick = function() {
    deleteArtist(this);
  };
  delete_button.textContent = 'Delete';

  var div_outer = document.createElement('div');
  div_outer.classList = 'content';
  div_outer.appendChild(div_inner);
  div_outer.appendChild(p);

  var img = document.createElement('img');
  let img_url = document.getElementById('image-field');
  img.classList = 'artist-image';
  img.src = img_url.value;

  var div_outermost = document.createElement('div');
  div_outermost.classList = 'artist-box';
  div_outermost.appendChild(img);
  div_outermost.appendChild(div_outer);
  div_outermost.appendChild(delete_button);

  var a = document.createElement('a');
  a.href = '#';
  a.classList =
    'list-group-item list-group-item-action flex-column align-items-start';
  a.appendChild(div_outermost);

  let artistList = document.getElementById('artist-list');
  artistList.appendChild(a);
};
