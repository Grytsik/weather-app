const Icons = (icon) => {
  switch (icon) {
    case 'Clouds':
      icon = `icons/clouds.svg`;
      console.log('auraaa');
      break;
    default:
      icon = '../../img/clear-day.svg';
      break;
  }
};

export default Icons;
