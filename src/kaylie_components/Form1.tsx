import "../App.css";

const Form1 = () => {
    return (
        <>
            <h2>Worcester Thrifting Survey</h2>
            <form>
                <label htmlFor="fullname">Enter your full name:</label>
                <input type="text" id="fullname"/><br/>
                <label htmlFor="email">Enter your email:</label>
                <input type="email" id="email"/><br/>

                <br/>

                <label>Check the thrift stores you have visited:</label><br/>
                <input type="checkbox" id="grime"/>
                <label htmlFor="grime">Grime</label><br/>
                <input type="checkbox" id="crompton"/>
                <label htmlFor="crompton">Crompton Collective</label><br/>
                <input type="checkbox" id="abbys"/>
                <label htmlFor="abbys">Abby's House</label><br/>
                <input type="checkbox" id="salvation"/>
                <label htmlFor="salvation">Salvation Army</label><br/>
                <input type="checkbox" id="savers"/>
                <label htmlFor="savers">Saver's</label><br/>
                <input type="checkbox" id="goodwill"/>
                <label htmlFor="goodwill">Goodwill</label><br/>
                <input type="checkbox" id="other email"/>
                <label htmlFor="other email">Other:</label>
                <input type="text" id="other text"/><br/>

                <br/>

                <label>Check your personal enjoyment with thrifting in Worcester:</label><br/>
                <input type="radio" id="poor" name="enjoyment"/>
                <label htmlFor="poor">Poor</label>
                <input type="radio" id="somewhat poor" name="enjoyment"/>
                <label htmlFor="somewhat poor">Somewhat Poor</label>
                <input type="radio" id="neutral" name="enjoyment"/>
                <label htmlFor="neutral">Neutral</label>
                <input type="radio" id="somewhat enjoyable" name="enjoyment"/>
                <label htmlFor="somewhat enjoyable">Somewhat Enjoyable</label>
                <input type="radio" id="enjoyable" name="enjoyment"/>
                <label htmlFor="enjoyable">Enjoyable</label><br/>

                <br/>

                <label htmlFor="reason">Choose why you like thrifting:</label>
                <select id="reason" name="reason">
                    <option value="personal">Personal enjoyment</option>
                    <option value="friends">Time with friends</option>
                    <option value="shop">Affordability</option>
                    <option value="other">Other (include why in comments)</option>
                </select><br/>

                <br/>

                <label htmlFor="comments">Comments:</label>
                <br/>
                <textarea rows="2" cols="40" id="comments"></textarea>
                <br/>
                <input type="submit" id="submitButton" value="Submit"/>
            </form>
        </>
    )
}

export default Form1;