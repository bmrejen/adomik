import { makeStyles } from "@material-ui/core/styles"
import { DataGrid } from "@mui/x-data-grid"
import { mapKeyToName } from "./../utils"
import { appear } from "./../animations/appear"

const rowsPerPage = 10

const useStyles = makeStyles((theme) => {
  const styles = {
    "@keyframes appear": appear,
    root: {
      "& .MuiDataGrid-columnHeaderWrapper": {
        background: theme.palette.primary.light
      },
      "& .MuiDataGrid-columnHeaderTitle": {
        margin: "auto",
        fontWeight: "600",
        textAlign: "center"
      },
      "& .MuiDataGrid-row": {
        animation: "$appear 1s ease-in-out backwards"
      }
    }
  }

  for (let i = 1; i <= rowsPerPage; i++) {
    styles.root[`& .MuiDataGrid-row:nth-child(${i})`] = { "animation-delay": `${i * 0.1}s` }
  }
  console.log(styles.root)
  return styles
})

export default function DataTable({ items }) {
  const classes = useStyles()
  if (!items || items.length === 0) {
    return <div>Loading...</div>
  }
  const columns = Object.keys(items[0]).map((key) => ({
    field: key,
    headerName: mapKeyToName(key),
    width: 160
  }))

  const rows = [...items]

  return (
    <div style={{ height: 650, width: "100%" }}>
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        checkboxSelection
      />
    </div>
  )
}
