import "./App.css";

const Table1 = () => {
    return (
        <>
            <table className="collapse">
                <caption><strong>Worcester Thrift Store Review</strong></caption>
                <tr>
                    <td>Name</td>
                    <td>Address</td>
                    <td>Price</td>
                    <td>Variety</td>
                    <td>Quality</td>
                </tr>
                <tr>
                    <td>Grime</td>
                    <td>356 Shrewsbury St</td>
                    <td>Expensive</td>
                    <td>Men's and Women's Clothes</td>
                    <td>High</td>
                </tr>
                <tr>
                    <td>Crompton Collective</td>
                    <td>138 Green St</td>
                    <td>Expensive</td>
                    <td>Vintage Items/Trinkets, No Clothes</td>
                    <td>Average</td>
                </tr>
                <tr>
                    <td>Savers</td>
                    <td>490 Lincoln St</td>
                    <td>Cheap</td>
                    <td>Clothes, Shoes, Accessories, Home Goods</td>
                    <td>Below Average</td>
                </tr>
                <tr>
                    <td>Salvation Army</td>
                    <td>72 Cambridge St</td>
                    <td>Medium</td>
                    <td>Clothes, Shoes, Accessories, Home Goods</td>
                    <td>Average</td>
                </tr>
            </table>
        </>
    )
}

export default Table1;