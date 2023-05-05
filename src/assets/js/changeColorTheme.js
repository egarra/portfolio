const changeColorTheme = (trigger) => {
  const btns = document.querySelectorAll(trigger);

  const colorObj = {
    primaryBgColor: '#111827',
    secondaryBgColor: '#172135',
    primaryLightBgColor: 'white',
    secondaryLightBgColor: '#abadb2',
  };

  let dark = true;
  
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
    if (dark) {
      dark = false;
      document.documentElement.style.setProperty(
        '--primary-bg-color',
        colorObj.primaryLightBgColor,
      );
      document.documentElement.style.setProperty(
        '--primary-light-bg-color',
        colorObj.primaryBgColor,
      );
      document.documentElement.style.setProperty(
        '--secondary-bg-color',
        colorObj.secondaryLightBgColor,
      );
      document.documentElement.style.setProperty(
        '--accent-text-color', 
        colorObj.primaryBgColor
      );
    } else {
      dark = true;
      
      document.documentElement.style.setProperty(
        '--primary-bg-color', 
        colorObj.primaryBgColor
      );
      document.documentElement.style.setProperty(
        '--primary-light-bg-color',
        colorObj.primaryLightBgColor,
      );
      document.documentElement.style.setProperty(
        '--secondary-bg-color', 
        colorObj.secondaryBgColor
      );
      document.documentElement.style.setProperty(
        '--accent-text-color',
        colorObj.secondaryLightBgColor,
      );
    }
  });
  })
};

changeColorTheme('.menu__btn');
