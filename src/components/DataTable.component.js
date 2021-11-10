import { DataGrid } from "@mui/x-data-grid"
import { mapKeyToName } from "./../utils"

export default function DataTable({ users }) {
  const columns = Object.keys(users[0]).map((key) => ({
    field: key,
    headerName: mapKeyToName(key),
    width: 160
  }))

  const rows = []
  users.forEach((user) => {
    const myobj = {}
    Object.keys(user).forEach((key) => {
      myobj[key] = user[key]
    })
    rows.push(myobj)
  })

  return (
    <div style={{ height: 650, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}
