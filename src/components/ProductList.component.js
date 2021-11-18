import { useState } from "react"
import { TabGroup, DataTable } from "./"

export default function ProductList({ products }) {
  const [reports, benchmarks] = products
  const [selectedMenu, setSelectedMenu] = useState(reports.code)

  if (products.length === 0) return <p>No products found</p>
  const items = selectedMenu === "report" ? reports.cities : benchmarks.cities

  return (
    <>
      <TabGroup
        products={products}
        setSelectedMenu={setSelectedMenu}
        selectedMenu={selectedMenu}
      ></TabGroup>
      <DataTable items={items} selectedMenu={selectedMenu} />
    </>
  )
}
