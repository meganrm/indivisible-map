import moment from 'moment';

class Point {
  constructor(eventOrGroup) {
    this.type = 'Feature';
    this.geometry = {
      type: 'Point',
      coordinates: [Number(eventOrGroup.longitude), Number(eventOrGroup.latitude)],
    };
    this.properties = {
      icon: eventOrGroup.icon || 'host-group',
      address: eventOrGroup.address1 || eventOrGroup.city,
      startsAt: eventOrGroup.starts_at ? moment(eventOrGroup.starts_at).format('MMMM Do YYYY, h:mm a') : '',
      title: eventOrGroup.title || eventOrGroup.name,
      venue: eventOrGroup.venue || '',
    };
  }
}

export default Point;
