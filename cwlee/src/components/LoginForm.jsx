import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function LoginForm({ onSwitchToSignup }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { login } = useAuth();

    function handleSubmit(event) {
        event.preventDefault();

        const success = login(username, password);

        if (!success) {
            setMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
        }
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">로그인</h1>
                <p className="text-sm text-gray-500">
                    계정에 로그인해주세요.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                        아이디
                    </label>

                    <input
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-gray-600"
                        placeholder="아이디를 입력하세요"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-medium mb-2">
                        비밀번호
                    </label>

                    <input
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-gray-600"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>

                {message && (
                    <p className="text-sm text-red-500 mb-4">
                        {message}
                    </p>
                )}

                <button
                    className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800"
                    type="submit"
                >
                    로그인
                </button>
            </form>

            <p className="text-sm text-center text-gray-500 mt-6">
                아직 계정이 없으신가요?{" "}
                <button
                    type="button"
                    className="text-gray-900 font-medium"
                    onClick={onSwitchToSignup}
                >
                    회원가입
                </button>
            </p>
        </div>
    );
}

export default LoginForm;