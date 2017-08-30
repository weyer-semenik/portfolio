var aboutOverlay = document.getElementById('js-aboutOverlay'),
    projectOverlay = document.getElementById('js-projectOverlay'),
    cvOverlay = document.getElementById('js-cvOverlay'),
    socialOverlay = document.getElementById('js-socialOverlay'),
    overlayHome = document.getElementsByClassName('overlay-home'),
    overlayAbout = document.getElementsByClassName('overlay-about'),
    overlayProject = document.getElementsByClassName('overlay-project'),
    overlayCV = document.getElementsByClassName('overlay-cv'),
    overlaySocial = document.getElementsByClassName('overlay-social'),
    overlayHomeHeader = document.getElementById('js-overlayHomeHeader'),
    overlayHomeList = document.getElementById('js-overlayHomeList');

aboutOverlay.addEventListener('click', function () { menuStateChoose('about'); });
projectOverlay.addEventListener('click', function () { menuStateChoose('project'); });
cvOverlay.addEventListener('click', function () { menuStateChoose('cv'); });
socialOverlay.addEventListener('click', function () { menuStateChoose('social'); });

function menuStateChoose(e) {
    menuState = e;
    console.log(e);
    setMenuState();
}

var menuState = 'home';

function setMenuState() {
    switch (menuState) {
        case 'about':
            overlayHome[0].style.display = 'none';
            overlayAbout[0].style.display = 'block';
            overlayProject[0].style.display = 'none';
            overlayCV[0].style.display = 'none';
            overlaySocial[0].style.display = 'none';
            break;
        case 'project':
            overlayHome[0].style.display = 'none';
            overlayAbout[0].style.display = 'none';
            overlayProject[0].style.display = 'block';
            overlayCV[0].style.display = 'none';
            overlaySocial[0].style.display = 'none';
            break;
        case 'cv':
            overlayHome[0].style.display = 'none';
            overlayAbout[0].style.display = 'none';
            overlayProject[0].style.display = 'none';
            overlayCV[0].style.display = 'block';
            overlaySocial[0].style.display = 'none';
            break;
        case 'social':
            overlayHomeHeader.style.display = 'none';
            overlayAbout[0].style.display = 'none';
            overlayProject[0].style.display = 'none';
            overlayCV[0].style.display = 'none';
            overlaySocial[0].style.display = 'block';
            break;
        case 'home':
        default:
            overlayHomeHeader.style.display = 'block';
            overlayAbout[0].style.display = 'none';
            overlayProject[0].style.display = 'none';
            overlayCV[0].style.display = 'none';
            overlaySocial[0].style.display = 'none';
    }
}

setMenuState();

