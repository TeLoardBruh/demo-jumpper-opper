function toggleOpenSideBar() {
  document.getElementById('main').style.marginLeft = '250px';

  document.getElementsByClassName('side-bar-logo-area')[0].style.width =
    '300px';
}

function closeToggleSideBarFromOutSide(event) {
  const getElement = document.getElementById('main');

  if (getElement === event.target.parentNode) {
    document.getElementById('main').style.marginLeft = '0px';

    document.getElementsByClassName('side-bar-logo-area')[0].style.width =
      '0px';
  }
}

document.addEventListener('click', closeToggleSideBarFromOutSide);
