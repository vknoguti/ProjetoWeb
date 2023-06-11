import { useState } from "react";
import AddProduct from "../../components/addProduct";
import DeleteProduct from "../../components/deleteProduct";
import EditProduct from "../../components/editProduct";
import ShowStock from "../../components/showStock";
import './adminProducts.css'

const AdminProducts = () => {
  const [activePage, setActivePage] = useState("addProduct");

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case "addProduct":
        return <AddProduct />;
      case "seeStock":
        return <ShowStock />;
      case "deleteProduct":
        return <DeleteProduct />;
      case "editProduct":
        return <EditProduct />;
      default:
        return <AddProduct />;
    }
  };

  return (
    <>
        <div className="prod-options">
                <button onClick={() => handlePageClick("addProduct")}>Add</button>
                <button onClick={() => handlePageClick("deleteProduct")}>Delete</button>
                <button onClick={() => handlePageClick("editProduct")}>Edit</button>
                <button onClick={() => handlePageClick("seeStock")}>Stock</button>
        </div>
        {renderPage()}
    </>
  );
};

export default AdminProducts;