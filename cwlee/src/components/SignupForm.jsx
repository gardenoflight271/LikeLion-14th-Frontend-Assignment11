import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function SignupForm({ onSwitchToLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { signup } = useAuth();

    function handleSubmit(event) {
        event.preventDefault();

        const success = signup(username, password);

        if (!success) {
            setMessage("이미 존재하는 아이디입니다.");
            return;
        }

        setMessage("가입이 완료되었습니다! 로그인 화면으로 이동합니다.");
        setTimeout(() => onSwitchToLogin(), 1000);
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">회원가입</h1>
                <p className="text-sm text-gray-500">
                    새로운 계정을 만들어주세요.
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
                    <p className="text-sm text-gray-500 mb-4">
                        {message}
                    </p>
                )}

                <button
                    className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800"
                    type="submit"
                >
                    가입하기
                </button>
            </form>

            <p className="text-sm text-center text-gray-500 mt-6">
                이미 계정이 있으신가요?{" "}
                <button
                    type="button"
                    className="text-gray-900 font-medium"
                    onClick={onSwitchToLogin}
                >
                    로그인
                </button>
            </p>
        </div>
    );
}

export default SignupForm;