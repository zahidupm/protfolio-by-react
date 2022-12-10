import React from 'react';
import Bookis from '../../../assets/img/bookis.png';
import Journalist from '../../../assets/img/journalist.png';
import Learning from '../../../assets/img/learning.png';
import useTitle from '../../../hooks/useTitle';

const Projects = () => {
    useTitle('Projects')
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Projects
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                    
                    </p>
                </div>
                {/* content */}
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                        <div className="lg:py-6 lg:pr-16">
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-4 text-gray-600"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="12"
                                    y1="2"
                                    x2="12"
                                    y2="22"
                                    />
                                    <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="19,15 12,22 5,15"
                                    />
                                </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold">Bookis | https://books-world-e44b0.web.app/</p>
                            <p className="text-gray-700">
                                All recipes are written using certain conventions, which define
                                the characteristics of common ingredients. The rules vary from
                                place to place.
                            </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-4 text-gray-600"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="12"
                                    y1="2"
                                    x2="12"
                                    y2="22"
                                    />
                                    <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="19,15 12,22 5,15"
                                    />
                                </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold">Step 2</p>
                            <p className="text-gray-700">
                                The first mate and his Skipper too will do their very best to
                                make the others comfortable in their tropic island nest. Michael
                                Knight a young loner.
                            </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-4 text-gray-600"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="12"
                                    y1="2"
                                    x2="12"
                                    y2="22"
                                    />
                                    <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="19,15 12,22 5,15"
                                    />
                                </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold">Step 3</p>
                            <p className="text-gray-700">
                                If one examines precultural libertarianism, one is faced with a
                                choice: either accept rationalism or conclude that context is a
                                product.
                            </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-6 text-gray-600"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <polyline
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    points="6,12 10,16 18,8"
                                    />
                                </svg>
                                </div>
                            </div>
                            </div>
                            <div className="pt-1">
                            <p className="mb-2 text-lg font-bold">Success</p>
                            <p className="text-gray-700" />
                            </div>
                        </div>
                        </div>
                        <div className="relative">
                        <img
                            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                            src={Bookis}
                            alt=""
                        />
                        </div>
                    </div>
                    </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                        <div className="lg:py-6 lg:pr-16">
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-4 text-gray-600"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="12"
                                    y1="2"
                                    x2="12"
                                    y2="22"
                                    />
                                    <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="19,15 12,22 5,15"
                                    />
                                </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold">Express Journalist | https://journalist-services.web.app/</p>
                            <p className="text-gray-700">
                                All recipes are written using certain conventions, which define
                                the characteristics of common ingredients. The rules vary from
                                place to place.
                            </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-4 text-gray-600"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="12"
                                    y1="2"
                                    x2="12"
                                    y2="22"
                                    />
                                    <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="19,15 12,22 5,15"
                                    />
                                </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold">Step 2</p>
                            <p className="text-gray-700">
                                The first mate and his Skipper too will do their very best to
                                make the others comfortable in their tropic island nest. Michael
                                Knight a young loner.
                            </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-4 text-gray-600"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="12"
                                    y1="2"
                                    x2="12"
                                    y2="22"
                                    />
                                    <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="19,15 12,22 5,15"
                                    />
                                </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold">Step 3</p>
                            <p className="text-gray-700">
                                If one examines precultural libertarianism, one is faced with a
                                choice: either accept rationalism or conclude that context is a
                                product.
                            </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-6 text-gray-600"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <polyline
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    points="6,12 10,16 18,8"
                                    />
                                </svg>
                                </div>
                            </div>
                            </div>
                            <div className="pt-1">
                            <p className="mb-2 text-lg font-bold">Success</p>
                            <p className="text-gray-700" />
                            </div>
                        </div>
                        </div>
                        <div className="relative">
                        <img
                            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                            src={Journalist}
                            alt=""
                        />
                        </div>
                    </div>
                    </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                        <div className="lg:py-6 lg:pr-16">
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-4 text-gray-600"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="12"
                                    y1="2"
                                    x2="12"
                                    y2="22"
                                    />
                                    <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="19,15 12,22 5,15"
                                    />
                                </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold">Dream Learning | https://learning-platform-36621.web.app/</p>
                            <p className="text-gray-700">
                                All recipes are written using certain conventions, which define
                                the characteristics of common ingredients. The rules vary from
                                place to place.
                            </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-4 text-gray-600"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="12"
                                    y1="2"
                                    x2="12"
                                    y2="22"
                                    />
                                    <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="19,15 12,22 5,15"
                                    />
                                </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold">Step 2</p>
                            <p className="text-gray-700">
                                The first mate and his Skipper too will do their very best to
                                make the others comfortable in their tropic island nest. Michael
                                Knight a young loner.
                            </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-4 text-gray-600"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="12"
                                    y1="2"
                                    x2="12"
                                    y2="22"
                                    />
                                    <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="19,15 12,22 5,15"
                                    />
                                </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold">Step 3</p>
                            <p className="text-gray-700">
                                If one examines precultural libertarianism, one is faced with a
                                choice: either accept rationalism or conclude that context is a
                                product.
                            </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                <svg
                                    className="w-6 text-gray-600"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <polyline
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    points="6,12 10,16 18,8"
                                    />
                                </svg>
                                </div>
                            </div>
                            </div>
                            <div className="pt-1">
                            <p className="mb-2 text-lg font-bold">Success</p>
                            <p className="text-gray-700" />
                            </div>
                        </div>
                        </div>
                        <div className="relative">
                        <img
                            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                            src={Learning}
                            alt=""
                        />
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Projects;