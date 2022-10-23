import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='grid  p-5 max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-5xl bg-white'>
          <h2 className="place-self-center text-2xl font-semibold">Feel Free To Contact Us</h2>

          <div className='rounded-xl shadow-md overflow-hidden'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title='iframe'
              referrerPolicy="no-referrer-when-downgrade">

            </iframe>
          </div>
        </div>
        <br />
        <br />
        <div className='grid  p-5 max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-5xl bg-white'>
        
            <form
              action="https://formspree.io/f/xbjbavzv"
              method="POST"
              className="h-auto w-96  place-self-center ">
              <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                  <input
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    type="text"
                    placeholder="username"
                    name="username"
                    required
                    autoComplete="off"
                  />

                </div>
                <div>
                  <input
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    type="email"
                    name="Email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    name="Message"
                    cols="30"
                    rows="10"
                    required
                    autoComplete="off"
                    placeholder="Enter you message"></textarea>
                </div>

                <input type="submit" value="send" className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 place-self-center' />

              </div>


            </form>

         
           
       
        </div>
    </>

  )
}

export default Contact
