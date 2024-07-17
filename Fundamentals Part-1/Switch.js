console.log("Switch Statement");

const day=String(prompt('Enter the Day !!!'));


switch(day)
{
      case 'Monday':
            console.log('Today is Monday');
            console.log('Go to coding Meet up');
            break;
      case 'Tuesday':
            console.log('Today is Tuesday');
            console.log('Go to coding Meet up');
            break;
      case 'Wendsday':
      case 'Thursday':
            console.log('Today is Thursday');
            console.log('Go to coding Meet up');
            break;
      case 'Friday':
      case 'Saturday':
            console.log('Last working day');
            break;
      case 'Sunday':
            console.log('Enjoy the Hoilday ...')
            break;
      default:
            console.log('Not a Valid Option');
}