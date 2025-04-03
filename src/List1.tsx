import React from "react";
import "./App.css";
import { FunctionComponent } from "react";

const List1: FunctionComponent = () => {
    return (
        <>
            <p><strong>Kaylie's favorite thrifts:</strong></p>
            <ul>
                <li style="color:red">Grime (356 Shrewsbury St, Worcester, MA)</li>
                <li>Crompton Collective (138 Green St, Worcester, MA)</li>
                <li>Salvation Army (72 Cambridge St, Worcester, MA)</li>
                <li>Krazy Bargains (26395 E Baseline St, San Bernardino, CA)</li>
                <li>Eco Thrift (961 N E St, San Bernardino, CA)</li>
            </ul>
            <br />
        </>
    )
}