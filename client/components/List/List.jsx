import "./list.css";

const List = ({ data }) => {
    return (
        <div className="list">

            <table>
                <thead>
                    <tr className="header">
                        <th>Index</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Created At</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data?.map((i, index) => (
                            <tr className="body" key={index}>
                                <td className="index">{index + 1}</td>
                                <td>{i?.name}</td>
                                <td>{i?.address}</td>
                                <td className="date">{i?.createdAt}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

            {
                data.length === 6 && (
                    <h4>No Data Available...</h4>
                )
            }
        </div>
    )
}

export default List;