import React from 'react';

const ErrorAlert = ({
    message = 'Đã xảy ra lỗi khi tải dữ liệu.',
    onReload,
    onReport,
    showReload = true,
    showReport = false,
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-center text-red-500">
            <div className="mb-4">{message}</div>
            <div className="flex gap-4">
                {showReload && (
                    <button
                        className="border border-solid border-primary rounded-md h-10 px-4 text-sm text-primary ripple"
                        onClick={onReload || (() => window.location.reload())}
                    >
                        Tải lại trang
                    </button>
                )}
                {showReport && (
                    <button
                        className="border border-solid border-gray-400 rounded-md h-10 px-4 text-sm text-gray-700 ripple"
                        onClick={onReport}
                    >
                        Báo lỗi
                    </button>
                )}
            </div>
        </div>
    );
};

export default ErrorAlert;
