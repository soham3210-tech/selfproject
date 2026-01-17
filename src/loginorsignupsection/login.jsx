import { useEffect } from "react";
import "./login.css";
import monsterImg from "../assets/cute_monster.png";

function LoginSignup() {
    useEffect(() => {
        // =========================
        // Eye follow cursor logic
        // =========================
        const eyes = document.querySelectorAll(".eye");

        const handleMouseMove = (e) => {
            eyes.forEach((eye) => {
                const pupil = eye.querySelector(".pupil");
                const rect = eye.getBoundingClientRect();

                const eyeX = rect.left + rect.width / 2;
                const eyeY = rect.top + rect.height / 2;

                const dx = e.clientX - eyeX;
                const dy = e.clientY - eyeY;

                const angle = Math.atan2(dy, dx);
                const radius = 5;

                pupil.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius
                    }px)`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        // =========================
        // Login / Signup toggle
        // =========================
        const toggleForm = document.getElementById("toggleForm");
        const toggleLogin = document.getElementById("toggleLogin");
        const loginContainer = document.querySelector(
            ".form-container:not(.hidden)"
        );
        const signupContainer = document.getElementById("signupContainer");

        toggleForm?.addEventListener("click", () => {
            loginContainer.classList.add("hidden");
            signupContainer.classList.remove("hidden");
        });

        toggleLogin?.addEventListener("click", () => {
            signupContainer.classList.add("hidden");
            loginContainer.classList.remove("hidden");
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="container" style={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            {/* Character */}
            <div className="shinchan-container">
                <img src={monsterImg} alt="Cute Monster" className="shinchan-img" style={{ marginTop: "1px" }} />
                <div className="eyes-wrapper" style={{ marginBottom: "3px", marginleft: "3px" }}>
                    <div className="eye left-eye" style={{ marginLeft: "16px", }}>
                        <div className="pupil"></div>
                    </div>
                    <div className="eye right-eye" style={{ marginRight: "15px" }}>
                        <div className="pupil"></div>
                    </div>
                </div>
            </div>

            {/* Login */}
            <div className="form-container">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <span id="toggleForm">Signup</span>
                </p>
            </div>

            {/* Signup */}
            <div className="form-container hidden" id="signupContainer">
                <h2>Signup</h2>
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Signup</button>
                </form>
                <p>
                    Already have an account? <span id="toggleLogin">Login</span>
                </p>
            </div>
        </div>
    );
}

export default LoginSignup;
