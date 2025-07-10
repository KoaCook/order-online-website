import { X } from 'react-feather';
import { useForm } from 'react-hook-form';

const PhoneInput = ({ getData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        getData(data.phone);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="px-5 mt-4 flex w-full">
                <div className="flex-1">
                    <div className="flex items-center pr-2.5 h-12 rounded-l-lg border-l border-b border-t border-solid border-[#dbdbdb] dark:text-white caret-primary dark:border-[#292929]">
                        <input
                            type="tel"
                            className="h-full text-[15px] outline-none pl-2.5 rounded-l-lg flex-1 dark:bg-transparent"
                            placeholder="Số điện thoại"
                            {...register('phone', {
                                required: 'Vui lòng nhập số điện thoại',
                                pattern: {
                                    value: /^0\d{9}$/,
                                    message: 'Số điện thoại không hợp lệ',
                                },
                            })}
                        />
                        <button className="w-8 h-8 px-1.5 text-primary">
                            <X size={22} />
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    className="min-w-16 h-12 rounded-r-lg bg-primary text-white text-sm px-4 ripple-primary"
                >
                    TÌM KIẾM
                </button>
            </form>
            {errors.phone && (
                <div className="text-red-500 text-sm ml-8 mt-1.5">{errors.phone.message}</div>
            )}
        </>
    );
};

export default PhoneInput;
