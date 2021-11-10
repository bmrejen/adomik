export default class User {
  constructor({ id, city, firstName, lastName, rights }) {
    Object.assign(this, { id, firstName, lastName, city, rights })
  }
}
