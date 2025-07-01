import Button from '@/components/Button';
import branches from '@/constants/branches';
import React from 'react';

const DiningMethod = () => {
    return (
        <div>
            <div className="pt-6 pb-4">
                <div className="px-5 h-[406px]">
                    <div className="text-sm font-semibold mb-2.5 pr-5">Chi nhánh đến lấy</div>
                    <div className="flex flex-wrap gap-[20px]">
                        {branches.map(branch => {
                            const checked = true;
                            return (
                                <label
                                    key={branch.id}
                                    className={`flex items-center cursor-pointer p-3 border rounded-lg transition group ${
                                        checked && 'border-primary'
                                    }`}
                                    style={{
                                        flex: '1 1 calc(50% - 10px)',
                                        maxWidth: 'calc(50% - 10px)',
                                    }}
                                >
                                    {/* Custom large radio */}
                                    <span className="mr-4 flex items-center">
                                        <span className="relative flex items-center justify-center w-7 h-7">
                                            <input
                                                type="radio"
                                                name="branch"
                                                value={branch.id}
                                                checked={checked}
                                                className="absolute w-6 h-6 opacity-0 cursor-pointer"
                                            />
                                            <span
                                                className={`block w-6 h-6 rounded-full border transition-colors duration-200
                                            ${checked ? 'border-primary' : 'border-gray-400'}`}
                                            />
                                            {checked && (
                                                <span className="absolute w-3 h-3 bg-primary rounded-full"></span>
                                            )}
                                        </span>
                                    </span>
                                    {/* Branch info */}
                                    <div>
                                        <div className="font-medium text-sm text-gray-900 group-hover:text-primary">
                                            {branch.name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {branch.address}
                                        </div>
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                </div>
                <div className="flex justify-center mt-6 shadow-[0_-3px_6px_rgba(0,0,0,.1)] pt-4">
                    <div className="w-[368px]">
                        <Button>ĐỒNG Ý</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiningMethod;
