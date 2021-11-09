export default function _mapApiUserToUser({ id, ville, prenom, nom, right }) {
  return { id, city: ville, firstName: prenom, lastName: nom, rights: right }
}
