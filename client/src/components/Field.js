// JavaScript source code
const Field = () =>
{
    return (
        <div>
            <div id="header"><h1>Coogs Cafe</h1></div>
            <div id="field">            
                <form>
                    <label title="16 digits">
                        <pre>Credit Card:      <input type="text" /></pre>
                    </label>
                    <br />
                    <label title="YYYY-MM-00">
                        <pre>Exp. YYYY-MM-00:  <input type="text" /></pre>
                    </label>
                    <br />
                    <label title="3 digits">
                        <pre>CVV:              <input type="text" /></pre>
                    </label>
                    <br/>
                    <div>
                        <pre>
                            A minimum of $10 will be charged for guests that do not check in.
                            <br />                     
                            A hold fee will be charged for reservations made on Federal holidays.
                        </pre>
                    </div>
                    <div>
                        <button type="Submit">Submit</button>
                        <button type="Reset">Reset</button>
                    </div>
                </form>            
            </div>
            
        </div>
    )
}

export default Field;