import { BasicTable, DataTable } from "./"

export default function UserList({ users }) {
  if (!users || users.length === 0) {
    return <div>Loading...</div>
  }
  return <DataTable users={users} />
}
