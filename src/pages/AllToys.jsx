import { useLoaderData } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import TableRow from "../component/TableRow";
import { useState } from "react";
import useTitle from "../hooks/useTitle";


const AllToys = () => {
    useTitle("All Toys");
    const allToysData = useLoaderData()
    const [query, setQuery] = useState("")

    return (
        <div>


            <Navbar></Navbar>
            <div className=" w-72 ml-12 mb-12">
                <input type="text" placeholder="Search" className="input input-bordered" onChange={(e) => setQuery(e.target.value)} />
            </div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>

                            </th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            allToysData.filter(data => data.name.toLowerCase().includes(query)).map((atr) => <TableRow key={atr._id} atr={atr}></TableRow>)
                        }

                    </tbody>

                </table>
            </div>







            <Footer></Footer>
        </div>
    );
};

export default AllToys;