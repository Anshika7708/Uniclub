import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom';
import UserProfile from "./Dashboard/UserProfile.jsx";

const navigation = [];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  const shouldShowNavItems = !isLandingPage && !isAuthPage;
  
  return (
    <Disclosure as="nav" className="bg-blue-950">
      <div className="mx-auto max-w-7xl pl-4">
        <div className="relative flex h-16 items-center justify-between">

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Profile"
                src="/image-removebg.png"
                className="h-8 w-auto"
              />
            </div>
            {shouldShowNavItems && (
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {shouldShowNavItems && (
              <UserProfile />
            )}
          </div>
        </div>
      </div>


    </Disclosure>
  )
}