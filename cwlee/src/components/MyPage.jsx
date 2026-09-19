import { useAuth } from "../context/AuthContext";

function MyPage() {
    const { currentUser, logout } = useAuth();

    return (
        <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold mb-8">
                마이페이지
            </h1>

            {/* 프로필 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-4">
                    {/* 프로필 아이콘 */}
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="w-8 h-8 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0"
                            />
                        </svg>
                    </div>

                    {/* 사용자 정보 */}
                    <div>
                        <p className="text-lg font-semibold">
                            {currentUser.username}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            로그인 중
                        </p>
                    </div>
                </div>
            </div>

            {/* 계정 정보 */}
            <h2 className="text-sm font-semibold text-gray-500 mb-3">
                계정 정보
            </h2>

            <div className="bg-white border border-gray-200 rounded-2xl px-5 mb-8">
                <div className="flex justify-between items-center py-4">
                    <span className="text-sm text-gray-500">
                        아이디
                    </span>

                    <span className="text-sm font-medium">
                        {currentUser.username}
                    </span>
                </div>
            </div>

            {/* 로그아웃 */}
            <button
                onClick={logout}
                className="w-full bg-red-500 py-3 rounded-xl text-white hover:bg-red-600"
            >
                로그아웃
            </button>
        </div>
    );
}

export default MyPage;