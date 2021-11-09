import { User } from "./"

export default function UserList({ users }) {
  return users.map((user) => <User key={user.id} user={user} />)
}
