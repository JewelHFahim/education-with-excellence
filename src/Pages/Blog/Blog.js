import React from "react";
import './Blog.css'

const Blog = () => {
  return (
    <div className="min-h-screen bg-base-100 my-8 container">
      <p className="text-center text-2xl font-bold mb-2">
        OUR <span className="text-orange-600">BLOG</span>{" "}
      </p>

      <div className=" lg:grid grid-cols-2 w-9/12 mx-auto my-5 p-5 border bg-slate-200 border-slate-300 justify-center items-center ">

        <div>
          <img
            src="https://www.globalsign.com/application/files/9716/0388/7415/iStock-1175502114.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-center font-medium mt-2">
            Why are you using `firebase`? What other options do you have to
            implement authentication?
          </p>
          <p className="text-left my-2 p-2">
            Most apps need to know the identity of a user. Knowing a user's
            identity allows an app to securely save user data in the cloud and
            provide the same personalized experience across all of the user's
            devices. <br /> <br />
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
          </p>
          <p className="p-2">
            Firebase Alternative:{" "}
            <span className="font-semibold">
              {" "}
              Back4App, Backendless, Kuzzle, Pubnub, Kumulos, Appwrite, Deployd,
              NHost, AWS Amplify, Heroku
            </span>
          </p>
        </div>

      </div>

      <div className="lg:grid grid-cols-2 w-9/12 mx-auto my-5 p-5 border bg-slate-200 justify-center items-center border-slate-300">
        <div>
          <p className="text-center font-medium mt-2">
            How does the Private Route work?
          </p>
          <p className="text-left my-2 p-2">
            Private Routes in React Router (also called Protected Routes)
            require a user being authorized to visit a route (read: page). So if
            a user is not authorized for a specific page, they cannot access it.
            The most common example is authentication in a React application
            where a user can only access the protected pages when they are
            authorized (which means in this case being authenticated).
            Authorization goes beyond authentication though. For example, a user
            can also have roles and permissions which give a user access to
            specific areas of the application.
          </p>
        </div>
        <div>
          <img
            src="https://i.ytimg.com/vi/y6S26FiwEy4/maxresdefault.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="lg:grid grid-cols-2 w-9/12 mx-auto my-5 p-5 border bg-slate-200 justify-center items-center border-slate-300">
        <div>
          <img
            src="https://images.ctfassets.net/nx13ojx82pll/60miWU6vSisC1N2IgQRPkt/61066f84608375c590b6dcb68fb47dc0/nodejs-cors-guide-what-it-is-and-how-to-enable-it-picture-1.png?w=1744&h=982&q=80&fm=png"
            alt=""
          />
        </div>
        <div>
          <p className="text-center text-lg font-semibold ">What is 'CORS'?</p>
          <p className="text-left p-3">
            The word CORS stands for “Cross-Origin Resource Sharing”.
            Cross-Origin Resource Sharing is an HTTP-header based mechanism
            implemented by the browser which allows a server or an
            API(Application Programming Interface) to indicate any origins
            (different in terms of protocol, hostname, or port) other than its
            origin from which the unknown origin gets permission to access and
            load resources. The cors package available in the npm registry is
            used to tackle CORS errors in a Node.js application. <br /> <br />
            Today, there are many applications that depend on APIs to access
            different resources. Some of the popular APIs include weather, time,
            and fonts. There are also servers that host these APIs and ensure
            that information is delivered to websites and other end points.
            Therefore, making cross-origin calls, is a popular use case for the
            modern web applicati <br /> <br />
            Let’s say accessing images, videos, iframes, or scripts from another
            server. This means that the website is accessing resources from a
            different origin or domain. When building an application to serve up
            these resources with Express, a request to such external origins may
            fail. This is where CORS comes in to handle cross-origin requests.
          </p>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 w-9/12 mx-auto my-5 p-5 border bg-slate-200 justify-center items-center border-slate-300">
        <div>
          <img
            src="https://www.peerbits.com/static/3908ce2a3941a9a56f1b145496600fac/189bc/development-practices-for-node-js-developers-main.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="text-center text-lg font-semibold ">
            What is Node.js?Why Do We Use NodeJs?
          </p>
          <p className="text-left p-3">
            {" "}
            Node.js is an open-source, cross-platform JavaScript runtime
            environment and library for running web applications outside the
            client's browser. Ryan Dahl developed it in 2009, and its latest
            iteration, version 15.14, was released in April 2021. Developers use
            Node.js to create server-side web applications, and it is perfect
            for data-intensive applications since it uses an asynchronous,
            event-driven model.
          </p>
          <ul className="text-left p-2 font-semibold">
            <li>-Asynchronous and Event Driven </li>
            <li>-Very Fast</li>
            <li>-Single Threaded but Highly Scalable </li>
            <li>-No Buffering </li>
            <li>-License</li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default Blog;
