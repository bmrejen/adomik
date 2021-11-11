import { makeStyles } from "@material-ui/core/styles"
import { DataGrid } from "@mui/x-data-grid"
import { mapKeyToName } from "./../utils"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDataGrid-columnHeaderWrapper": {
      background: theme.palette.primary.light
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      margin: "auto",
      fontWeight: "600",
      textAlign: "center"
    }
  }
}))

export default function DataTable({ items }) {
  const classes = useStyles()
  const columns = Object.keys(items[0]).map((key) => ({
    field: key,
    headerName: mapKeyToName(key),
    width: 160
  }))

  const rows = [...items]
  if (!items || items.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ height: 650, width: "100%" }}>
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}
