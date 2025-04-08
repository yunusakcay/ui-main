
const toggleMenu = () => {
    const burgerMenu = document.querySelector(".navbar_icon");
    const src = burgerMenu.getAttribute('src');
    const iconName = src === 'assets/burger-menu.svg' ?
        'assets/close.svg'
        :
        'assets/burger-menu.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    const navigation = document.querySelector('.nav_link');

    navigation.classList.toggle(
        'nav_link--mobile'
    );
};



