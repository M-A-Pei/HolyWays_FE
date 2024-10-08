
const styles = {
    input: {
        width: "100%",
        padding: "12px 20px",
        backgroundColor: "#f1f1f1",
        marginBottom: "10px",
        border: "solid 2px #ccc",
    },
    button: {
        width: "100%",
        padding: "12px 20px",
        backgroundColor: "#bf2626",
        marginTop: "20px"
    }
}
export default function Login() {
    return (
        <div>
            <h1 className="mb-4">Login</h1>
            <form>
                <div className="form-group">
                    <input type="email" style={styles.input} className="form-control" placeholder="Enter email" />
                    <input type="password" style={styles.input} className="form-control" placeholder="Enter password" />
                    <button type="submit" style={styles.button} className="btn text-light">Login</button>
                </div>
            </form>
        </div>
    )
}
