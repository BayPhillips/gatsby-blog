import moment from 'moment'

export const DateFormatter = (date) =>
  moment(date).format('MMMM Do YYYY')
