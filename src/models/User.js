export default class User {
  constructor({ id, city, firstName, lastName, rights }) {
    Object.assign(this, { id, city, firstName, lastName, rights })
  }
}
