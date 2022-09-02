import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const Multistep = () => {
    const [formStep, setFormStep] = useState(0);
    const { watch, register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'all' })

    const completeButton = () => {
        setFormStep(formStep => formStep + 1)
    }

    const renderButton = () => {

        if (formStep > 2) {
            return undefined
        } else if (formStep === 2) {
            return (<button
                disabled={!isValid}

                type="submit"
                className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                Submit
            </button>)
        }
        else {
            return (< button
                disabled={!isValid}
                onClick={completeButton}
                type="button"
                className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                Next
            </button >)
        }

    }

    const handleForm = (values) => {
        window.alert(JSON.stringify(values, null, 2))
        completeButton();
    }
    return (
        <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
            <div
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
                    height: "28rem",
                }}
                className="absolute bg-green-800 inset-x-0 top-0"
            ></div>
            <div className="mx-auto z-10 mt-4 text-center">
                <h1 className="text-white text-5xl font-semibold">
                    Welcome to <span className="text-yellow-500">the Club</span>
                </h1>
                <p className="text-green-200 mt-2">
                    Become a new member in 3 easy steps
                </p>
            </div>
            <div className="max-w-xl w-full mt-10 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
                <div className="px-16 py-10">
                    <form onSubmit={handleSubmit(handleForm)}>
                        {formStep >= 0 && (
                            <section className={formStep === 0 ? 'block' : 'hidden'}>
                                <h2 className="font-semibold text-3xl mb-8">
                                    Personal Information
                                </h2>
                                <label htmlFor="username">Username</label>
                                <input
                                    // className='text-input'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id="username"
                                    name="username"
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: "Username is Required"
                                        },

                                    })}
                                ></input>
                                {errors.username && <p className='label-text-alt text-red-500'>{errors.username.message}</p>}

                            </section>)
                        }

                        {formStep >= 1 && (
                            <section className={formStep === 1 ? 'block' : 'hidden'}>
                                <h2 className="font-semibold text-3xl mb-8">Billing Information</h2>
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: "Address is Required"
                                        },

                                    })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors.address && <p className='label-text-alt text-red-500'>{errors.address.message}</p>}
                            </section>)
                        }
                        {formStep >= 2 && (
                            <section className={formStep === 2 ? 'block' : 'hidden'}>
                                <h2 className="font-semibold text-3xl mb-8">Legal Information</h2>
                                <div className="block mt-6">
                                    <input
                                        name="toc"
                                        className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                                        type="checkbox"
                                        {...register("toc", {
                                            required: true,

                                        })}
                                    />
                                    <span>
                                        I accept the{" "}
                                        <a className="text-blue-400 underline" href="/">
                                            Terms and Conditions
                                        </a>
                                        .
                                    </span>
                                </div>
                                <div className="block mt-6">
                                    <input
                                        name="pp"
                                        className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                                        type="checkbox"
                                        {...register("pp", {
                                            required: true,

                                        })}
                                    />
                                    <span>
                                        I accept the{" "}
                                        <a className="text-blue-400 underline" href="/">
                                            Privacy Policy
                                        </a>
                                        .
                                    </span>
                                </div>
                            </section>)
                        }

                        {formStep === 3 && (
                            <section>
                                <h2 className="font-semibold text-3xl mb-8">
                                    Successfully Submitted Your Information...
                                </h2>

                            </section>

                        )
                        }

                        {renderButton()}

                        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Multistep;