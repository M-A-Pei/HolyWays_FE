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
export default function Register() {
    return (
        <div>
            <h1 className="mb-4">Register</h1>
            <form>
                <div className="form-group">
                    <input type="email" style={styles.input} className="form-control" placeholder="Enter email" />
                    <input type="password" style={styles.input} className="form-control" placeholder="Enter password" />
                    <input type="text" style={styles.input} className="form-control" placeholder="Full Name" />

                    <button type="submit" style={styles.button} className="btn text-light">Register</button>
                </div>
            </form>
        </div>
    )
}
