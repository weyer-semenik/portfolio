const aboutOverlay = document.getElementById('js-aboutOverlay'),
    projectOverlay = document.getElementById('js-projectOverlay'),
    socialOverlay = document.getElementById('js-socialOverlay'),
    overlayHome = document.getElementsByClassName('overlay-home'),
    overlayAbout = document.getElementsByClassName('overlay-about'),
    overlayProject = document.getElementsByClassName('overlay-project'),
    overlaySocial = document.getElementsByClassName('overlay-social'),
    overlayHomeHeader = document.getElementById('js-overlayHomeHeader'),
    overlayHomeList = document.getElementById('js-overlayHomeList');

function menuStateChoose(e) {
        menuState = e;
        console.log(e);
        setMenuState();
    }

aboutOverlay.addEventListener('click', function () { menuStateChoose('about'); });
projectOverlay.addEventListener('click', function () { menuStateChoose('project'); });
socialOverlay.addEventListener('click', function () { menuStateChoose('social'); });

var menuState = 'home';

function setMenuState() {
    switch (menuState) {
        case 'about':
            overlayHomeHeader.style.display = 'none';
            overlayAbout[0].style.display = 'block';
            overlayProject[0].style.display = 'none';
            overlaySocial[0].style.display = 'none';
            break;
        case 'project':
            overlayHomeHeader.style.display = 'none';
            overlayAbout[0].style.display = 'none';
            overlayProject[0].style.display = 'flex';
            overlaySocial[0].style.display = 'none';
            break;
        case 'social':
            overlayHomeHeader.style.display = 'none';
            overlayAbout[0].style.display = 'none';
            overlayProject[0].style.display = 'none';
            overlaySocial[0].style.display = 'block';
            break;
        case 'home':
        default:
            overlayHomeHeader.style.display = 'block';
            overlayAbout[0].style.display = 'none';
            overlayProject[0].style.display = 'none';
            overlaySocial[0].style.display = 'none';
    }
}

setMenuState();

