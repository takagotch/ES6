let ticket = {
  type: 'subject',
  name: 'tk',
  description: {
    birth: '2018-01-30'
  }
};

let ticket2 = {
  name: '',
  color: '',
  description: {
    food: ''
  }
};

let ticket3 = {
  weight: 42,
  photo: 'http://www.ex.com/img/ticket/.jpg'
};

Object.assign(ticket, ticket2, ticket3);
cosole.log(ticket);

