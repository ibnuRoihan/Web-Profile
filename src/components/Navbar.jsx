import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#home', current: true },
    { name: 'About Me', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-primary">
            {({ open }) => (
                <>
                    <div className="mx-auto w-full">
                        <div className="relative flex h-16 px-8 lg:px-16 items-center justify-between text-white">
                            {/* Navigation desktop Start */}
                            <h3 className="text-base sm:max-lg:text-lg lg:text-xl font-bold">Ibnu<span className="text-primaryText">Roihan</span></h3>
                            <div className="hidden sm:block">
                                <div className="space-x-1 lg:space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-secondary text-white' : 'text-forth hover:bg-third hover:text-white',
                                                'px-3 py-2 rounded-md sm:max-lg:text-sm lg:text-base font-medium'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            {/* Navigation desktop end */}

                            {/* Mobile menu button start */}
                            <div className="absolute inset-y-0 right-1 flex items-center sm:hidden">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md mr-4 p-3 text-white hover:bg-third focus:outline-none focus:ring-inset focus:ring-white focus:ring-2">
                                    {open ? (
                                        <XMarkIcon className="block h-6" />
                                    ) : (
                                        <Bars3Icon className="block h-6" />
                                    )}
                                </Disclosure.Button>

                            </div>
                            {/* Mobile menu button end */}
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-secondary text-white' : 'text-forth hover:bg-third hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium')}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}