
'use client'

import { useState,useEffect } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ProductCard from "./ProductCard"
import { useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { filters, singleFilter, sortOptions } from "./FilterData";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import { useLocation, useNavigate,useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { findProducts } from '../../../State/CustomerProduct/Action'
import './Product.css';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
const location=useLocation();
const navigate=useNavigate();
const params = useParams();


const decodedQueryString=decodeURIComponent(location.search);
const searchParams=new URLSearchParams(decodedQueryString);
const colorValue = searchParams.get("color")
const sizeValue = searchParams.get("size")
const priceValue = searchParams.get("price")
const discount = searchParams.get("discount")
const sortValue = searchParams.get("sort")
const pageNumber = searchParams.get("page") || 1;
const stock = searchParams.get("stock")
const dispatch=useDispatch();
const { customersProduct } = useSelector((store) => store);
console.log("..fetching. from productjsx.",customersProduct);

const handleSortChange = (value) => {
  const searchParams = new URLSearchParams(location.search);
  searchParams.set("sort", value);
  const query = searchParams.toString();
  navigate({ search: `?${query}` });
  window.scrollTo(0, 0); // Scroll to the top of the page
};
useEffect(() => {
  window.scrollTo(0, 0);
}, [pageNumber]);


//Function for change of Pagination
const handlePaginationChange=(event,value)=>{
  const searchParams=new URLSearchParams(location.search);
  searchParams.set("page",value);
  const query=searchParams.toString();
  navigate({search:`?${query}`});
}

//Function to handle/change routes when clicked on checkbox 
const handleFilter = (value, sectionId) => {
  const searchParams = new URLSearchParams(location.search);
  let filterValue = searchParams.get(sectionId) ? searchParams.get(sectionId).split(',') : [];

  if (filterValue.includes(value)) {
    filterValue = filterValue.filter(item => item !== value);
  } else {
    filterValue.push(value);
  }
  if (filterValue.length === 0) {
    searchParams.delete(sectionId);
  } else {
    searchParams.set(sectionId, filterValue.join(','));
  }
  const query = searchParams.toString();
  console.log("Navigating to:", `?${query}`);
navigate({ search: `?${query}` });
}

//Function to handel the routes when clicked on radios
const handleRadioFilterChange = (e, sectionId) => {
  const searchParams = new URLSearchParams(location.search);
  searchParams.set(sectionId, e.target.value);
  const query = searchParams.toString();
  navigate(`?${query}`);
};


useEffect(() => {
  const [minPrice, maxPrice] = priceValue == null ? [0, 1000] : priceValue.split("-").map(Number);

  const data = {
    category: params.levelThree,
    colors: colorValue || [],
    sizes: sizeValue || [],
    minPrice: minPrice || 0,
    maxPrice:maxPrice || 10000,
    minDiscount: discount || 0,
    sort: sortValue || "price_low",
    pageNumber: pageNumber,
    pageSize: 8,
    stock: stock
}
dispatch(findProducts(data))
}, [
  params.item,
  colorValue,
  sizeValue,
  priceValue,
  discount,
  sortValue,
  pageNumber,
  stock,
  ]);
  console.log('Page number:', pageNumber);

  return (
    <div className="bg-white ">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
               <div className='flex gap-2'>
               <BlurOnIcon />
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
              {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                        // open={false}
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      onChange={() =>
                                        handleFilter(option.value, section.id)
                                      }
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                      // onClick={()=>handleFilter(option.value,section.id)}
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
              {singleFilter.map((section) => (
                    <Disclosure
                      // defaultOpen={true}
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </DisclosureButton>
                          </h3>
                          <DisclosurePanel className="pt-6">
                            <FormControl>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                              >
                                {section.options.map((option, optionIdx) => (
                                  <FormControlLabel
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                    // onChange={(e) =>
                                    //   handleRadioFilterChange(e, section.id)
                                    // }
                                  />
                                ))}
                              </RadioGroup>
                            </FormControl>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto  px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          onClick={() => handleSortChange(option.query)}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h1 className='text-xl font-semibold text-gray-400 my-4'>Filters</h1>
                {filters.map((section) => (
                    <Disclosure
                      // defaultOpen={false}
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </DisclosureButton>
                          </h3>
                          <DisclosurePanel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    onChange={() =>
                                      handleFilter(option.value, section.id)
                                    }
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                 {singleFilter.map((section) => (
                    <Disclosure
                      // defaultOpen={true}
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </DisclosureButton>
                          </h3>
                          <DisclosurePanel className="pt-6">
                            <FormControl>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                              >
                                {section.options.map((option, optionIdx) => (
                                  <FormControlLabel
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                    onChange={(e) =>
                                      handleRadioFilterChange(e, section.id)
                                    } 
                                  />
                                ))}
                              </RadioGroup>
                            </FormControl>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 w-full">
  <div className="flex flex-wrap justify-center">
    {customersProduct?.products && customersProduct.products?.content?.map((item)=>(
<ProductCard product={item}/>
    ))} 
  </div>
</div>
            </div>
          </section>
          <section className='pagination-container   w-full px=[3.6rem]' >
            <div className='pagination '>
            <Pagination  count={customersProduct.products?.totalPages} 
            color="secondary"
             onChange={handlePaginationChange} 
             sx={{
              '& .MuiPaginationItem-root': {
                fontSize: '1.3rem',  // Change font size
                color: '#1F2937',    // Custom color for the pagination items
              },
              '& .MuiPaginationItem-page.Mui-selected': {
                backgroundColor: '#2dd4bf', 
                color: 'white',             
              },
              '& .MuiPaginationItem-page': {
                padding: '10px 15px', 
              },
            }}
             />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
