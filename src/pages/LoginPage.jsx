import { useForm } from "react-hook-form"

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        // To reset form
        reset({
            username: '',
            password: ''
        })
    }
    return (
        <>
            <form className="mx-4" autoComplete="off">
                {/* 1 */}
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Enter Username 
                    </label>
                    <input 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Name"
                        name="username"
                        {
                            ...register('username', {
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i
                            })
                        }
                    />
                    {errors?.username?.type === "required" && <p className='text-sm text-red-600 mt-2'>This field is required</p>}
                    {errors?.username?.type === "maxLength" && (
                        <p className='text-sm text-red-600 mt-2'>User name cannot exceed 20 characters</p>
                    )}
                    {errors?.username?.type === "pattern" && (
                        <p className='text-sm text-red-600 mt-2'>Alphabetical characters only</p>
                    )}
                </div>

                {/* 2 */}
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input 
                        type="password" 
                        name="password" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        {...register("password",{
                            required:true,
                            minLength:6,
                            maxLength:12
                        })}
                    />
                    {errors?.password?.type === "required" && <p className='text-sm text-red-600 mt-2'>This field is required</p>}
                    {errors?.password?.type === "minLength" && (
                        <p className='text-sm text-red-600 mt-2'>Password should be atleast 6 characters.</p>
                    )}
                    {errors?.password?.type === "maxLength" && (
                        <p className='text-sm text-red-600 mt-2'>Password should not be more than 12 characters.</p>
                    )}
                </div>

                <button 
                    type="submit" 
                    onClick={handleSubmit(onSubmit)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                </button>
            </form>
        </>
    )
}