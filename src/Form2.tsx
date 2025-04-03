const Form2 = () => {
    return (
        <>
            <h2>Best Cake Survey</h2>
            <form>
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id="fullname"/>
                <br/>
                <br/>
                Cake Flavors:
                <br/>
                <input type="checkbox" id="vanilla"/>
                <label htmlFor="vanilla">Vanilla</label>
                <br/>
                <input type="checkbox" id="chocolate"/>
                <label htmlFor="chocolate">Chocolate</label>
                <br/>
                <input type="checkbox" id="strawberry"/>
                <label htmlFor="strawberry">Strawberry</label>
                <br/>
                <input type="checkbox" id="redvelvet"/>
                <label htmlFor="redvelvet">Red Velvet</label>
                <br/>
                <input type="checkbox" id="other"/>
                <label htmlFor="other">Other:</label>
                <input type="text" id="flavor"/>
                <br/>
                <br/>
                Frosting Type:
                <br/>
                <input type="radio" id="creamcheese" name="frosting" value="creamcheese"/>
                <label htmlFor="creamcheese">Cream Cheese</label>
                <input type="radio" id="buttercream" name="frosting" value="buttercream"/>
                <label htmlFor="buttercream">Buttercream</label>
                <input type="radio" id="fudge" name="frosting" value="fudge"/>
                <label htmlFor="fudge">Fudge</label>
                <input type="radio" id="ganache" name="frosting" value="ganache"/>
                <label htmlFor="ganache">Ganache</label>
                <br/>
                <br/>
                <label htmlFor="frostingflavor">Frosting Flavor:</label>
                <input type="text" id="frostingflavor"/>
                <br/>
                <br/>
                <label htmlFor="comments">Comments:</label>
                <br/>
                <textarea rows="4" cols="50" id="comments"></textarea>
                <br/>
                <br/>
                <label htmlFor="shapes">Cake Shape:</label>
                <select id="shapes" name="shapes">
                    <option value="round">Round</option>
                    <option value="square">Square</option>
                    <option value="rectangle">Rectangle</option>
                    <option value="heart">Heart</option>
                </select>
                <br/>
                <br/>
                <br/>
                <button type="button" id="submitbutton">Submit</button>
            </form>
        </>
    )
}

export default Form2;