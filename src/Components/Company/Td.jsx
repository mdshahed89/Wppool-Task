import React from "react";

function Td({ com, tic, ver, price, mar, rev, gross, ev, ytd }) {
  return (
    <tr className="hover:bg-gray-50 transition duration-300">
      <td className="py-4 text-center border-b">{com} </td>
      <td className="py-4 text-center border-b">{tic} </td>
      <td className="py-4 text-center border-b">{ver} </td>
      <td className="py-4 text-center border-b">{price} </td>
      <td className="py-4 text-center border-b">{mar} </td>
      <td className="py-4 text-center border-b">{rev} </td>
      <td className="py-4 text-center border-b">{gross} </td>
      <td className="py-4 text-center border-b">{ev} </td>
      <td className="py-4 text-center border-b">{ytd} </td>
    </tr>
  );
}

export default Td;
